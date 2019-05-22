const {Menu} = require('electron');
const electron = require('electron');
const app = electron.app;
const name = app.getName();

const template = [
  {
    label: "Browser",
    submenu: [
      {
        label: "Reload Browser",
        accelerator: "CmdOrCtrl+Shift+R",
        click (item, focusedWindow) {
          if(focusedWindow) focusedWindow.webContents.reload();
        }
      },
      {
        label: "Debugging",
        click (item, focusedWindow) {
          if(focusedWindow) focusedWindow.webContents.toggleDevTools();
        }
      }
    ]
  },
  {
    label: "Actions",
    submenu: [
      {
        label: "Search",
        accelerator: "CmdOrCtrl+S",
        click (item, focusedWindow) {
          if(focusedWindow) focusedWindow.webContents.executeJavaScript("browser.search()");
        }
      }
    ]
  }
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
