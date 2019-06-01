const settings = require("./settings.js");
const $ = require("jquery");

module.exports = {
  history: {
    forward: function() {
      $(".tab.focus").children("webview.front")[0].goForward();
    },
    backward: function() {
      $(".tab.focus").children("webview.front")[0].goBack();
    }
  }
};
