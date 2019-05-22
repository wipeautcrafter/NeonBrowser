const {app, BrowserWindow} = require("electron");
const path = require("path");
require("./menu.js");

let win = null;

function newWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true
    }
  });

  win.loadFile(path.join(__dirname, "html", "index.html"));
}

app.on("ready", newWindow);
app.on("window-all-closed", function() {
  if(process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", function() {
  if(win === null) {
    newWindow();
  }
});
