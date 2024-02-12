import TarkaChat from "../src/main.js";
import "./style.css"

function getPreChatScreen(onClose) {
  const title = document.createElement("h3");
  title.innerText = "Welcome to a demo prechat screen in TarkaChat";

  const button = document.createElement("button");
  button.innerText = "Next";
  button.addEventListener("click", onClose);

  const container = document.createElement("div");
  container.id = "prechat-container";
  container.appendChild(title);
  container.appendChild(button);
  return container;
}

async function sendMessage(message) {
  // Do API calls
  await new Promise((resolve) => setTimeout(resolve, 3000));
  // after getting response
  return Promise.resolve([{"type": "high-chart", "high-chart-object": "link to image"}]);
}

const chat = TarkaChat.init({
  title: "Stocks Advisor",
  botName: "Stad",
  greeting: "Hello. How can I assist you today?",
  themeColor: "#F0DAFB",
  selectorId: "tarkachatbot",
  preChatRenderer: getPreChatScreen,
  submitHandler: sendMessage,
  expand: true,
});

// chat.toggle(), chat.isOpen()