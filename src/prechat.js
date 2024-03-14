export function renderPreChat(nodeGenerator) {
  const body = document.querySelector("#tarka-chat > .t-container > .body");
  const scrollFade = document.querySelector(
    "#tarka-chat > .t-container > .scroll-fade",
  );
  const messageContainer = document.querySelector(
    "#tarka-chat > .t-container > .body > .message-container",
  );
  const footer = document.querySelector("#tarka-chat > .t-container > .footer");

  scrollFade.style.display = "none";
  messageContainer.style.display = "none";
  footer.style.display = "none";

  const closePreChat = () => {
    body.querySelector(".tc-injected-prechat")?.remove();
    scrollFade.style.display = "block";
    messageContainer.style.display = "flex";
    footer.style.display = "flex";
  };

  const preChatScreen = nodeGenerator(closePreChat);
  preChatScreen.className += " tc-injected-prechat";
  body.appendChild(preChatScreen);
}
