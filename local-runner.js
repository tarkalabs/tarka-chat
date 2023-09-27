import TarkaChat from "./src/main.js";

TarkaChat.init({
  title: "Upstock share market",
  botName: "Vidura",
  greeting:
    "All right! How can I assist you in regards to the upstock share market?",
  themeColor: 290,
  selectorId: "tarkachatbot",
  submitHandler: async function (message) {
    //Do API calls

    // after getting response
    return Promise.resolve("Recieved: " + message);
  },
});
