import TarkaChat from "../src/main.js";

TarkaChat.init({
  title: "Stocks Advisor",
  botName: "Stad",
  greeting: "Hello. How can I assist you today?",
  themeColor: "#F0DAFB",
  selectorId: "tarkachatbot",
  preChatRenderer: (close) => {
    const button = document.createElement("button");
    button.innerText = "Close Pre-chat";
    button.addEventListener("click", close);
    return button;
  },
  submitHandler: async function (message) {
    //Do API calls
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // after getting response
    return Promise.resolve("Recieved: " + message);
  },
});
