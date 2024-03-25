import TarkaChat from "../src/main.js";
import "./style.css";

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
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // after getting response use any one of the following to simulate different types of responses
  let textResponse = "This is a **markdown** __enabled__ text response";
  let textObjResponse = { type: "text", message: "hi tehreee" };
  let fileObjResponse = {
    type: "file",
    name: "tarka trends",
    link: "https://tarkalabs.com",
  };
  let imageObjResponse = {
    type: "image",
    name: "tarka logo",
    link: "https://tarkalabs.com/assets/img/teamg2.94f91078.jpg",
  };
  let tableObjResponse = {
    type: "table",
    table_data: {
      header: ["col1", "col2"],
      rows: [
        { col1: "a", col2: 1 },
        { col1: "b", col2: 2 },
      ],
    },
  };
  let blankTableObjResponse = {
    type: "table",
    table_data: {
      header: ["col1", "col2"],
      rows: [],
    },
  };
  let highchartsResponse = {
    type: "highchart-config",
    high_chart_config: {
      chart: {
        type: "pie",
      },
      title: {
        text: "Browsers market share",
      },
      series: [
        {
          name: "Brands",
          data: [
            {
              name: "Chrome",
              y: 70,
            },
            {
              name: "Firefox",
              y: 20,
            },
            {
              name: "Others",
              y: 10,
            },
          ],
        },
      ],
    },
  };
  return Promise.resolve(textResponse);
}

const chat = TarkaChat.init({
  title: "Stocks Advisor",
  botName: "Stad",
  greeting: "Hello. How can I assist you today?",
  themeColor: "#F0DAFB",
  selectorId: "tarkachatbot",
  uploadTypes: UPLOAD_TYPES,
  generateUploadPreview: generateImageThumbnail,
  preChatRenderer: getPreChatScreen,
  submitHandler: sendMessage,
  expand: true,
});

// chat.toggle(), chat.isOpen()
