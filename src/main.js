import "./style.scss";
import layout from "./layout.html?raw";
import lottie from "lottie-web";
import animationData from "./lottie.json";

function loadLottie(element) {
  const animation = lottie.loadAnimation({
    container: element,
    renderer: "svg",
    loop: true,
    autoplay: false,
    animationData: animationData,
  });
  element.addEventListener("mouseenter", () => {
    animation.play();
  });
  element.addEventListener("mouseleave", () => {
    animation.stop();
  });

  return animation;
}

export default {
  selectorId: "",
  title: "",
  botName: "",
  greeting: "",
  colors: {},
  opened: false,

  init: function (config = {}) {
    this.selectorId = config.selectorId;
    this.title = config.title;
    this.botName = config.botName;
    this.greeting = config.greeting;
    this.setCssVars(config.themeColor);
    this.render(config.submitHandler);
  },

  render: function (submitHandler) {
    const targetElement = document.getElementById(this.selectorId);

    if (targetElement) {
      targetElement.innerHTML = layout;
      this.setupLaucher();
      loadLottie(document.getElementById("logo"));
      document.getElementById("title").textContent = this.title;
      this.insertMessage(this.greeting, true);
      const sendBtn = document.getElementById("send-btn");
      sendBtn.addEventListener("click", async () => {
        const msgInput = document.getElementById("chat-input");
        this.insertMessage(msgInput.value, false);
        const response = await submitHandler(msgInput.value);
        msgInput.value = "";
        this.insertMessage(response, true);
      });
    } else {
      console.error(`Element with ID "${this.selectorId}" not found.`);
    }
  },

  setupLaucher: function () {
    const launcher = document.getElementById("launcher");
    const launcherClosed = document.getElementById("launcher-closed");
    const launcherOpened = document.getElementById("launcher-opened");
    loadLottie(launcherClosed);
    launcher.addEventListener("click", () => {
      const chatContainer = document.getElementById("container");
      if (chatContainer.style.display !== "flex") {
        chatContainer.style.display = "flex";
        launcherOpened.style.display = "block";
        launcherClosed.style.display = "none";
      } else {
        chatContainer.style.display = "none";
        launcherOpened.style.display = "none";
        launcherClosed.style.display = "block";
      }
    });
  },

  insertMessage(content = "", incoming = false) {
    const messageContainer = document.getElementById("message-container");
    const msg = document.createElement("div");
    msg.className = "message " + (incoming ? "incoming" : "outgoing");
    msg.innerHTML = `<div class="wrapper"><div class="message-content">${content}</div> 
      <div class="message-meta">${incoming ? this.botName : "You"}</div></div>
    `;
    document.querySelector("#message-container").appendChild(msg);
    messageContainer.lastElementChild.scrollIntoView();
  },

  setCssVars: function (themeColor) {
    const hue = {
      primary: themeColor,
      primaryOffset: themeColor - 10,
      primaryOffsetHover: themeColor + 10,
    };
    const primaryColor = `hsla(${hue.primary}, 100%, 35%, 1)`;
    const background = `hsla(${hue.primaryOffset}, 80%, 99%, 1)`;

    const root = document.querySelector(":root");
    root.style.setProperty("--primary-background", background);
    root.style.setProperty("--primary-primary", primaryColor);
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
};
