# Tarka Chat UI

Tarka Chat UI is a plug and play javascript library to integrate a chat assistant to your website in one line

## How to use it

Incude the following script in your html

`<script src="https://tarkalabs.github.io/tarka-chat/dist/tarka-chat.umd.js"></script>`

Initialise the global `TarkaChat` component with options in any script tag

```
TarkaChat.init({
        title: "Personal Assistant",
        botName: "superbot",
        greeting: "Welcome. How can I assist you today?",
        themeColor: "#F0DAFB",
        selectorId: "chatbot",
        submitHandler: async function (message) {
          //Do API calls
          // after getting response return the response string
          return Promise.resolve("Recieved response");
        },
      });
```

where,

- [Optional] **title** is the title of the chatbot window
- [Optional] **botName** will be displayed below each bot message
- **greeting** will be the first message displayed on the chatbot when opened for the first time
- **themeColor** will set the color scheme of the chat window
- **selectorId** the DOM element selector (id) inside which the bot will be rendered
- **submitHandler** this function will be called whenever a user types a message in the bot and submits

Demo : https://tarkalabs.github.io/tarka-chat/demo/
