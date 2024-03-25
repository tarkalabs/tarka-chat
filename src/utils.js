import { TinyColor } from "@ctrl/tinycolor";
import attachmentImg from "./images/attachment.png";
import downloadImg from "./images/download.png";
import { marked } from "marked";

export function setThemeColors(themeColor = "#F0DAFB") {
  const hsl = new TinyColor(themeColor).toHsl();
  const hue = {
    primary: hsl.h,
    primaryOffset: hsl.h - 10,
    primaryOffsetHover: hsl.h + 10,
  };

  const root = document.querySelector(":root");
  root.style.setProperty(
    "--primary-background",
    `hsla(${hue.primaryOffset}, 80%, 99%, 1)`,
  );
  root.style.setProperty(
    "--primary-primary",
    `hsla(${hue.primary}, 100%, 35%, 1)`,
  );
  root.style.setProperty(
    "--primary-primary-subtle",
    `hsla(${hue.primaryOffset}, 80%, 92%, 1)`,
  );
  root.style.setProperty(
    "--primary-primary-subtle-hover",
    `hsla(${hue.primaryOffsetHover}, 80%, 89%, 1)`,
  );
  root.style.setProperty(
    "--primary-primary-alt",
    `hsla(${hue.primary}, 38%, 21%, 1)`,
  );
  root.style.setProperty(
    "--primary-primary-alt-subtle",
    `hsla(${hue.primaryOffset}, 23%, 91%, 1)`,
  );
  root.style.setProperty(
    "--gradient-background",
    `linear-gradient(0deg, hsla(${hue.primary}, 100%, 35%, 0.05) 0%, hsla(${hue.primary}, 0%, 0%, 0) 100%)`,
  );
  root.style.setProperty(
    "--gradient-gradient-fade",
    `linear-gradient(-0deg, hsla(${hue.primaryOffset}, 80%, 99%, 0) 0%, hsla(${hue.primaryOffset}, 80%, 99%, 1) 50%)`,
  );
}

export function createNode(className, content = null) {
  const node = document.createElement("div");
  node.className = className;
  if (content !== null) {
    node.innerHTML = content;
  }
  return node;
}

export function createTextNode(text) {
  let markdownText = marked.parse(text);
  return createNode("message-content", markdownText);
}

export function createFileAttachmentNode(name, link) {
  const nodeContent = `
    <div class="attachment-info">
      <img src="${attachmentImg}" alt="File Icon" width="38" height="38">
      <div class="attachment-file-name">
        ${name || "File"}
      </div>
      <a href="${link}" class="attachment-download-btn" target="_blank">
        <img src="${downloadImg}" alt="Download Button" width="24" height="24">
      </a>
    </div>`;
  return createNode("attachment", nodeContent);
}

export function createImageNode(name, link) {
  const imageContent = `
        <img src="${link}" alt="${name}">
        <a href="${link}" class="overlay">
              <img src="${downloadImg}" alt="Download Button" width="24" height="24">
        </a>
        `;
  return createNode("image-container", imageContent);
}

export function createTableNode(header, rows) {
  let node = createNode("table-container");
  if (rows.length > 1) {
    if (!header || !Array.isArray(header) || header.length == 0) {
      header = Object.keys(rows[0]);
    }
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");
    header.forEach((headerText) => {
      const header = document.createElement("th");
      const textNode = document.createTextNode(headerText);
      header.appendChild(textNode);
      headerRow.appendChild(header);
    });
    table.appendChild(headerRow);

    rows.forEach((rowData) => {
      const row = document.createElement("tr");
      header.forEach((headerText) => {
        let text = rowData[headerText];
        const cell = document.createElement("td");
        const textNode = document.createTextNode(text);
        cell.appendChild(textNode);
        row.appendChild(cell);
      });
      table.appendChild(row);
    });
    node.appendChild(table);
  } else {
    const h5 = document.createElement("h5");
    h5.innerHTML = "Table has no rows";
    node.appendChild(h5);
  }
  return node;
}
