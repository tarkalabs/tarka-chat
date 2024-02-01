import "./style.scss";
import layout from "./layout.html?raw";
import lottie from "lottie-web";
import animationData from "./logo.json";
import { TinyColor } from "@ctrl/tinycolor";
import attachment from "./images/attachment.png";
import downloadImg from "./images/download.png";

const INITIAL_STATE = false;

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
    this.setCssVars(config.themeColor);
    this.render(config.submitHandler);

    if (config.preChatRenderer) {
      this.renderPreChat(config.preChatRenderer);
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

    const setProcessing = (processing) => {
      this.isProcessing = processing;
      const inputContainer = document.querySelector("#tarka-chat .input-container");
      inputContainer.style.display = processing ? "none" : "flex";

      const loader = document.querySelector("#tarka-chat .chat-loader");
      loader.style.display = processing ? "block" : "none";
    };

    const msgHandler = async () => {
      const msgInput = document.querySelector("#tarka-chat .chat-input");
      const text = msgInput.value;

      if (!this.isProcessing && text.length > 0) {
        setProcessing(true);
        msgInput.value = "";
        this.insertMessage(text, false);
        const response = await submitHandler(text);
        this.insertMessage(response, true);
        setProcessing(false);
        msgInput.focus();
      }
    };

    if (targetElement) {
      targetElement.innerHTML = layout;
      this.setupLaucher();
      loadLottie(document.querySelector("#tarka-chat .logo"));
      document.querySelector("#tarka-chat .title").textContent = this.title;
      this.insertMessage(this.greeting, true);

      const sendBtn = document.querySelector("#tarka-chat .send-btn");
      const msgInput = document.querySelector("#tarka-chat .chat-input");
      sendBtn.addEventListener("click", msgHandler);

      msgInput.addEventListener("keyup", async function (event) {
        if (event.keyCode === 13) {
          await msgHandler();
        }
      });
    } else {
      console.error(`Element with ID "${this.selectorId}" not found.`);
    }
  },

  setupLaucher: function () {
    const launcher = document.querySelector("#tarka-chat .launcher");
    launcher.addEventListener("click", () => this.toggle());
    const launcherClosed = document.querySelector("#tarka-chat .closed");
    loadLottie(launcherClosed);
  },

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
    this.validateFieldPresent('type', data);

    switch (data.type) {
      case "text":
        return this.createNode("message-content", data.message);

      case "file":
        this.validateFieldPresent('link', data);
        this.validateFieldPresent('name', data);
        const nodeContent = `
          <div class="attachment-info">
            <img src="${attachment}" alt="File Icon" width="38" height="38">
            <div class="attachment-file-name">
              ${data.name || "File"}
            </div>
            <a href="${data.link}" class="attachment-download-btn">
              <img src="${downloadImg}" alt="Download Button" width="24" height="24">
            </a>
          </div>`;
        return this.createNode("attachment", nodeContent);

      case "image":
        this.validateFieldPresent('link', data);
        const imageContent = `
        <img src="${data.link}" alt="Your Image">
        <a href="${data.link}" class="overlay">
              <img src="${downloadImg}" alt="Download Button" width="24" height="24">
        </a>
        `;
        return this.createNode("image-container", imageContent);

      default:
        throw new Error(`Invalid type: ${type}`);
    }
  },

  insertMessage(data = "", incoming = false) {
    const messageContainer = document.querySelector(
      "#tarka-chat .message-container",
    );

    const wrapper = this.createNode("wrapper");

    if (typeof data === "string") {
      wrapper.appendChild(
        this.createNodeByType({ type: "text", message: data })
      );
    }

    if (Array.isArray(data)) {
      data.forEach((d) => {
        let content = d;
        if (typeof content === "string") {
          content = { type: "text", message: content };
        }
        wrapper.appendChild(this.createNodeByType(content));
      });
    }
    if (typeof data === "object" && !Array.isArray(data)) {
      wrapper.appendChild(this.createNodeByType(data));
    }

    wrapper.appendChild(
      this.createNode("message-meta", incoming ? this.botName : "You")
    );

    const msg = this.createNode(`message ${incoming ? "incoming" : "outgoing"}`);
    msg.appendChild(wrapper);

    messageContainer.appendChild(msg);
    messageContainer.lastElementChild.scrollIntoView();
  },

  setCssVars: function (themeColor = "#F0DAFB") {
    const hsl = new TinyColor(themeColor).toHsl();
    const hue = {
      primary: hsl.h,
      primaryOffset: hsl.h - 10,
      primaryOffsetHover: hsl.h + 10,
    };

    const root = document.querySelector(":root");
    root.style.setProperty(
      "--primary-background",
      `hsla(${hue.primaryOffset}, 80%, 99%, 1)`,
    );
    root.style.setProperty(
      "--primary-primary",
      `hsla(${hue.primary}, 100%, 35%, 1)`,
    );
    root.style.setProperty(
      "--primary-primary-subtle",
      `hsla(${hue.primaryOffset}, 80%, 92%, 1)`,
    );
    root.style.setProperty(
      "--primary-primary-subtle-hover",
      `hsla(${hue.primaryOffsetHover}, 80%, 89%, 1)`,
    );
    root.style.setProperty(
      "--primary-primary-alt",
      `hsla(${hue.primary}, 38%, 21%, 1)`,
    );
    root.style.setProperty(
      "--primary-primary-alt-subtle",
      `hsla(${hue.primaryOffset}, 23%, 91%, 1)`,
    );
    root.style.setProperty(
      "--gradient-background",
      `linear-gradient(0deg, hsla(${hue.primary}, 100%, 35%, 0.05) 0%, hsla(${hue.primary}, 0%, 0%, 0) 100%)`,
    );
    root.style.setProperty(
      "--gradient-gradient-fade",
      `linear-gradient(-0deg, hsla(${hue.primaryOffset}, 80%, 99%, 0) 0%, hsla(${hue.primaryOffset}, 80%, 99%, 1) 50%)`,
    );
  },

  renderPreChat: function(nodeGenerator) {
    const body = document.querySelector("#tarka-chat > .t-container > .body");
    const scrollFade = document.querySelector("#tarka-chat > .t-container > .scroll-fade");
    const messageContainer = document.querySelector("#tarka-chat > .t-container > .body > .message-container");
    const footer = document.querySelector("#tarka-chat > .t-container > .footer");

    scrollFade.style.display = "none";
    messageContainer.style.display = "none";
    footer.style.display = "none";

    const closePreChat = () => {
      body.querySelector(".tc-injected-prechat")?.remove();
      scrollFade.style.display = "block";
      messageContainer.style.display = "flex";
      footer.style.display = "flex";
    }

    const preChatScreen = nodeGenerator(closePreChat);
    preChatScreen.className += " tc-injected-prechat"
    body.appendChild(preChatScreen);
  }
};
