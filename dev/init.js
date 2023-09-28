import TarkaChat from "../src/main.js";

TarkaChat.init({
  title: "Stocks Advisor",
  botName: "Stad",
  greeting: "Hello. How can I assist you today?",
  themeColorHue: 160,
  selectorId: "tarkachatbot",
  submitHandler: async function (message) {
    //Do API calls
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // after getting response
    return Promise.resolve("Recieved: " + message);
  },
});
