const settings = require("./js/settings.js");
const $ = require("jquery");
require("bootstrap");

const browser = {
  urlbar: require("./js/urlbar.js"),
  tabs: require("./js/tabs.js"),
  page: require("./js/page.js")
};

$(document).ready(function() {
  browser.urlbar.registerEvents();
  browser.tabs.addTab();
});
