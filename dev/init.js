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
    [{
      "type": "text",
      "message": "The chart represents the distribution of data points with their respective shares in percentage. The 'others' category is included to represent the cumulative share of all other smaller categories not individually listed.",
  },{"type": "highchart-config","high_chart_config": {"chart":{"type":"pie"},"title":{"text":"Data Representation"},"tooltip":{"pointFormat":"{series.name}: <b>{point.percentage:.1f}%</b>"},"plotOptions":{"pie":{"allowPointSelect":true,"cursor":"pointer","dataLabels":{"enabled":true}}},"series":[{"name":"Share","colorByPoint":true,"data":[{"name":"5507","y":3139480.0,"percentage":19.550025842689635},{"name":"2204120","y":3039881.0,"percentage":18.929807518665896},{"name":"5312","y":2316499.0,"percentage":14.425196311033893},{"name":"2040","y":731826.0,"percentage":4.557193297091296},{"name":"5218057","y":712789.0,"percentage":4.438646963951005},{"name":"5235","y":477514.0,"percentage":2.9735532764171446},{"name":"4945559","y":336113.0,"percentage":2.093027455522552},{"name":"58050","y":292037.0,"percentage":1.8185594101639608},{"name":"4959810","y":223900.0,"percentage":1.3942598093245406},{"name":"5288","y":154935.0,"percentage":0.9648041248668946},{"name":"others","y":4633726.0,"percentage":28.854925990273184}]}],"exporting":{"enabled":true}}},
{"type":"table","table_data":"customer_id,total_quantity,percentage_of_total\n5507,3139480.0,19.550025842689635\n2204120,3039881.0,18.929807518665896\n5312,2316499.0,14.425196311033893\n2040,731826.0,4.557193297091296\n5218057,712789.0,4.438646963951005\n5235,477514.0,2.9735532764171446\n4945559,336113.0,2.093027455522552\n58050,292037.0,1.8185594101639608\n4959810,223900.0,1.3942598093245406\n5288,154935.0,0.9648041248668946\nothers,4633726.0,28.854925990273184"}]
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