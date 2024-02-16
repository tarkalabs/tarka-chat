import TarkaChat from "../src/main.js";
import "./style.css"

const UPLOAD_TYPES = ["image/png", "image/jpeg"];

function generateImageThumbnail(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      const thumbnail = document.createElement("img");
      thumbnail.src = e.target.result;
      thumbnail.alt = file.name;
      resolve(thumbnail);
    };
    reader.readAsDataURL(file);
  });
}

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

async function sendMessage(message, optionalFiles) {
  console.log(optionalFiles);
  // Do API calls
  await new Promise((resolve) => setTimeout(resolve, 3000));
  // after getting response
  return Promise.resolve(
    "Recieved: " + message + ", Images count: " + optionalFiles?.length ?? 0
  );
}

const chat = TarkaChat.init({
  title: "Stocks Advisor",
  botName: "Stad",
  greeting: "Hello. How can I assist you today?",
  themeColor: "#F0DAFB",
  selectorId: "tarkachatbot",
  enableUpload: true,
  uploadTypes: UPLOAD_TYPES,
  generateUploadPreview: generateImageThumbnail,
  preChatRenderer: getPreChatScreen,
  submitHandler: sendMessage,
  expand: true,
});

// chat.toggle(), chat.isOpen()