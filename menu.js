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
    label: "Page",
    submenu: [
      {
        label: "Search",
        accelerator: "CmdOrCtrl+S",
        click (item, focusedWindow) {
          if(focusedWindow) focusedWindow.webContents.executeJavaScript("browser.urlbar.toggle()");
        }
      },
      {
        label: "History Forward",
        accelerator: "Alt+Right",
        click (item, focusedWindow) {
          if(focusedWindow) focusedWindow.webContents.executeJavaScript("browser.page.history.forward()");
        }
      },
      {
        label: "History Backward",
        accelerator: "Alt+Left",
        click (item, focusedWindow) {
          if(focusedWindow) focusedWindow.webContents.executeJavaScript("browser.page.history.backward()");
        }
      }
    ]
  },
  {
    label: "Tabs",
    submenu: [
      {
        label: "Add Page",
        accelerator: "CmdOrCtrl+N",
        click (item, focusedWindow) {
          if(focusedWindow) focusedWindow.webContents.executeJavaScript("browser.tabs.addPage()");
        }
      },
      {
        label: "Cycle Pages",
        accelerator: "CmdOrCtrl+Tab",
        click (item, focusedWindow) {
          if(focusedWindow) focusedWindow.webContents.executeJavaScript("browser.tabs.cyclePages()");
        }
      },
      {
        label: "Close Page",
        accelerator: "CmdOrCtrl+K",
        click (item, focusedWindow) {
          if(focusedWindow) focusedWindow.webContents.executeJavaScript("browser.tabs.closePage()");
        }
      },
      {
        type: "separator"
      },
      {
        label: "Add Tab",
        accelerator: "CmdOrCtrl+Shift+N",
        click (item, focusedWindow) {
          if(focusedWindow) focusedWindow.webContents.executeJavaScript("browser.tabs.addTab()");
        }
      },
      {
        label: "Cycle Tabs",
        accelerator: "CmdOrCtrl+Shift+Tab",
        click (item, focusedWindow) {
          if(focusedWindow) focusedWindow.webContents.executeJavaScript("browser.tabs.cycleTabs()");
        }
      },
      {
        label: "Close Tab",
        accelerator: "CmdOrCtrl+Shift+K",
        click (item, focusedWindow) {
          if(focusedWindow) focusedWindow.webContents.executeJavaScript("browser.tabs.closeTab()");
        }
      }
    ]
  }
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
