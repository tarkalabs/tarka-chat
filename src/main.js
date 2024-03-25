import "./style.scss";
import layout from "./layout.html?raw";
import lottie from "lottie-web";
import animationData from "./logo.json";
import { renderPreChat } from "./prechat";
import { configHighcharts, createHighchartsNode } from "./highcharts";
import {
  createFileAttachmentNode,
  createImageNode,
  createTableNode,
  createTextNode,
  setThemeColors,
} from "./utils";

const INITIAL_STATE = false;

configHighcharts();

function loadLottie(element) {
  const animation = lottie.loadAnimation({
    container: element,
    renderer: "svg",
    loop: true,
    autoplay: true,
    animationData: animationData,
  });

  return animation;
}

export default {
  selectorId: "",
  title: "",
  botName: "",
  greeting: "",

  init: function (config = {}) {
    this.selectorId = config.selectorId;
    this.title = config.title;
    this.botName = config.botName;
    this.greeting = config.greeting;

    this.enableUpload = config.enableUpload ?? false;
    this.uploadTypes = config.uploadTypes;
    this.generateUploadPreview = config.generateUploadPreview;

    setThemeColors(config.themeColor);
    this.render(config.submitHandler);

    if (config.preChatRenderer) {
      renderPreChat(config.preChatRenderer);
    }
    this.toggle(config.expand || INITIAL_STATE);
    return { toggle: this.toggle, isOpen: this.isOpen };
  },

  isOpen: function () {
    const chatContainer = document.querySelector("#tarka-chat .t-container");
    return chatContainer.style.display === "flex";
  },

  toggle: function (forceOpenState = undefined) {
    const chatContainer = document.querySelector("#tarka-chat .t-container");
    const launcherClosed = document.querySelector("#tarka-chat .closed");
    const launcherOpened = document.querySelector("#tarka-chat .opened");
    if (
      forceOpenState === true ||
      (forceOpenState === undefined && !this.isOpen())
    ) {
      chatContainer.style.display = "flex";
      launcherOpened.style.display = "block";
      launcherClosed.style.display = "none";
    } else {
      chatContainer.style.display = "none";
      launcherOpened.style.display = "none";
      launcherClosed.style.display = "block";
    }
  },

  render: function (submitHandler) {
    const targetElement = document.getElementById(this.selectorId);
    if (!targetElement) {
      console.error(`Element with ID "${this.selectorId}" not found.`);
      return;
    }

    const createPreviewItem = async (file) => {
      const wrapper = this.createNode("upload-preview-item");
      const previewImage = await this.generateUploadPreview(file);
      wrapper.appendChild(previewImage);
      return wrapper;
    };

    const onFileSelect = async (event) => {
      const previewContainer = document.querySelector(
        "#tarka-chat .t-container > .upload-preview-container",
      );
      previewContainer.innerHTML = "";
      const files = event.target.files;
      const validFiles = new DataTransfer();
      for (const file of files) {
        if (this.uploadTypes && !this.uploadTypes.includes(file.type)) {
          continue;
        }
        const previewItem = await createPreviewItem(file);
        if (!previewItem) {
          continue;
        }
        previewContainer.appendChild(previewItem);
        validFiles.items.add(file);
      }
      if (validFiles.files.length > 0) {
        previewContainer.style.display = "flex";
      } else {
        previewContainer.style.display = "none";
      }
      event.target.files = validFiles.files;
    };

    const setProcessing = (processing) => {
      this.isProcessing = processing;
      const inputContainer = document.querySelector(
        "#tarka-chat .input-container",
      );
      inputContainer.style.display = processing ? "none" : "flex";

      const previewsContainer = document.querySelector(
        "#tarka-chat .t-container > .upload-preview-container",
      );
      if (processing) {
        previewsContainer.style.display = "none";
      }

      const loader = document.querySelector("#tarka-chat .chat-loader");
      loader.style.display = processing ? "block" : "none";
    };

    const msgHandler = async () => {
      const msgInput = document.querySelector("#tarka-chat .chat-input");
      const text = msgInput.value;
      if (this.isProcessing || text.length === 0) {
        return;
      }

      setProcessing(true);
      const uploadInput = document.querySelector("#tarka-chat .upload-input");
      const optionalFiles = [];

      if (this.enableUpload && uploadInput.files.length > 0) {
        const thumbnailsObj = { type: "thumbnails", nodes: [] };
        for (const file of uploadInput.files) {
          optionalFiles.push(file);
          const thumbnail = await this.generateUploadPreview(file);
          thumbnailsObj.nodes.push(thumbnail);
        }
        this.insertMessage([text, thumbnailsObj], false);
      } else {
        this.insertMessage(text, false);
      }
      const response = await submitHandler(text, optionalFiles);
      this.insertMessage(response, true);
      setProcessing(false);

      const previewsContainer = document.querySelector(
        "#tarka-chat .t-container > .upload-preview-container",
      );
      if (previewsContainer) previewsContainer.style.display = "none";

      msgInput.value = "";
      uploadInput.value = "";
      msgInput.focus();
    };

    targetElement.innerHTML = layout;
    this.setupLaucher();
    loadLottie(document.querySelector("#tarka-chat .logo"));
    document.querySelector("#tarka-chat .title").textContent = this.title;
    this.insertMessage(this.greeting, true);

    const uploadBtn = document.querySelector("#tarka-chat .upload-btn");
    const uploadInput = document.querySelector("#tarka-chat .upload-input");
    const sendBtn = document.querySelector("#tarka-chat .send-btn");
    const msgInput = document.querySelector("#tarka-chat .chat-input");

    if (this.enableUpload) {
      uploadBtn.style.display = "block";
      uploadBtn.disabled = false;
      uploadBtn.addEventListener("click", () => uploadInput?.click());
      uploadInput.addEventListener("change", onFileSelect);
    }

    sendBtn.addEventListener("click", msgHandler);
    msgInput.addEventListener("keyup", async function (event) {
      if (event.keyCode === 13) {
        await msgHandler();
      }
    });
  },

  setupLaucher: function () {
    const launcher = document.querySelector("#tarka-chat .launcher");
    launcher.addEventListener("click", () => this.toggle());
    const launcherClosed = document.querySelector("#tarka-chat .closed");
    loadLottie(launcherClosed);
  },

  // TODO Delete this
  createNode(className, content = null) {
    const node = document.createElement("div");
    node.className = className;
    if (content !== null) {
      node.innerHTML = content;
    }
    return node;
  },

  validateFieldPresent(field, parent) {
    if (!(field in parent)) {
      throw new Error(`'${field}' is mandatory in ${JSON.stringify(parent)}`);
    }
  },

  createNodeByType(data) {
    if (typeof data === "string") {
      data = { type: "text", message: data };
    }

    this.validateFieldPresent("type", data);
    switch (data.type) {
      case "text":
        return createTextNode(data.message);
      case "file":
        this.validateFieldPresent("link", data);
        this.validateFieldPresent("name", data);
        return createFileAttachmentNode(data.name, data.link);
      case "image":
        this.validateFieldPresent("link", data);
        return createImageNode(data.name, data.link);
      case "table":
        this.validateFieldPresent("table_data", data);
        return createTableNode(data.table_data.header, data.table_data.rows);
      case "highchart-config":
        this.validateFieldPresent("high_chart_config", data);
        return createHighchartsNode(data.high_chart_config);
      case "thumbnails":
        this.validateFieldPresent("nodes", data);
        const container = this.createNode("upload-preview-container");
        container.style.display = "flex";
        data.nodes.forEach((node) => {
          const wrapper = this.createNode("upload-preview-item");
          wrapper.appendChild(node);
          container.appendChild(wrapper);
        });
        return container;
      default:
        throw new Error(`Invalid type: ${type}`);
    }
  },

  insertMessage(data = "", incoming = false) {
    const messageContainer = document.querySelector(
      "#tarka-chat .message-container",
    );
    const wrapper = this.createNode("wrapper");

    if (Array.isArray(data)) {
      data.forEach((d) => {
        wrapper.appendChild(this.createNodeByType(content));
      });
    } else if (typeof data === "string" || typeof data === "object") {
      wrapper.appendChild(this.createNodeByType(data));
    }

    wrapper.appendChild(
      this.createNode("message-meta", incoming ? this.botName : "You"),
    );
    const msg = this.createNode(
      `message ${incoming ? "incoming" : "outgoing"}`,
    );
    msg.appendChild(wrapper);
    messageContainer.appendChild(msg);
    messageContainer.lastElementChild.scrollIntoView();
  },
};
