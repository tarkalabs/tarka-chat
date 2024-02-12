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
        expand: true,
        preChatRenderer: function (onClose) {
          // Return a DOM Node that can be attached to the chatbot UI
          // Use the onClose callback to close the pre-chat screen
          const button = document.createElement("button");
          button.innerText = "Close pre-chat";
          button.addEventListener("click", onClose);
          return button;
        },
        submitHandler: async function (message) {
          // Do API calls
          // after getting response return the response string
          return Promise.resolve("Recieved response");
        },
      });
```

where,

- [Optional] **title** is the title of the chatbot window
- [Optional] **botName** will be displayed below each bot message
- [Optional] **expand** opens the chat window in expanded mode on init when set to true, otherwise opens in collapse mode. Defaults to false.
- **greeting** will be the first message displayed on the chatbot when opened for the first time
- **themeColor** will set the color scheme of the chat window
- **selectorId** the DOM element selector (id) inside which the bot will be rendered
- **submitHandler** this function will be called whenever a user types a message in the bot and submits
  Returned response from submitHandler should be one the below types:

  1. _String_
  2. One of the below objects:

  - _Text type:_

  ```
    {
        "type": "text",
        "message": "MESSAGE"
    }
  ```

  - _File type:_

  ```
    {
      "type": "file",
      "link": "LINK_TO_FILE",
      "name": "FILE_NAME",
    }
  ```

  - _Image type:_

  ```
    {
      "type": "image",
      "link": "LINK_TO_IMAGE",
      "name": "IMAGE_NAME",
    }
  ```

  3. _Array containing one/multiple of above mentioned types:_
     E.g.

  ```
  [
    {
      "type": "text",
      "message": "MESSAGE"
    },
    {
      "type": "file",
      "link": "LINK_TO_FILE",
      "name": "FILE_NAME",
    }
  ]
  ```

```
<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
```
include this to generate charts by highcharts and enable exporting.

Demo : https://tarkalabs.github.io/tarka-chat/demo/
