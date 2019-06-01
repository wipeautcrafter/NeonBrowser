const settings = require("./settings.js");
const $ = require("jquery");
const path = require("path");

module.exports = {
  navigate: function(url) {
    const view = $(".tab.focus").children("webview.front");
    view[0].loadURL(module.exports.decodeUrl(url));
  },
  addPage: function() {
    const tab = $(".tab.focus");
    const view = $("<webview></webview>");
    tab.children(".front").removeClass("front");
    view.addClass("front");
    view.attr("src", module.exports.decodeUrl(settings.startPage));
    tab.on("click mouseover", function() {
      $(".tab.focus").removeClass("focus");
      $(this).addClass("focus");
    });
    view.on("did-start-loading", function() {
      $(".page-indicator").html("Loading..");
    });
    view.on("did-stop-loading", function() {
      $(".page-indicator").html("");
    });
    view.appendTo(tab);
  },
  addTab: function() {
    const tab = $("<div class=\"tab focus\"></div>");
    $(".tab.focus").removeClass("focus");
    $(".tabs").append(tab);
    module.exports.addPage();
  },
  cyclePages: function() {
    const tab = $(".tab.focus");
    let index = tab.children("webview.front").index();
    const max = tab.children().length;

    index++;
    if(index >= max) index = 0;

    tab.children(".front").removeClass("front");
    tab.children("webview").eq(index).addClass("front");
  },
  cycleTabs: function() {
    const tabs = $(".tabs");
    let index = tabs.children(".tab.focus").index();
    const max = tabs.children().length;

    index++;
    if(index >= max) index = 0;

    $(".tab.focus").removeClass("focus");
    $(".tab").eq(index).addClass("focus");
  },
  closePage: function() {
    $(".tab.focus").children("webview.front").remove();
    if($(".tab.focus").children("webview").length > 0)
      $(".tab.focus").children("webview").eq(0).addClass("front");
  },
  closeTab: function() {
    $(".tab.focus").remove();
    if($(".tab").length > 0)
      $(".tab").eq(0).addClass("focus");
  },
  decodeUrl: function(url) {
    if(!url.match(/^((https?|file):\/\/|neon:).+$/)) url = "http://"+url;
    url = url.replace(/^neon:(.+)$/, "file://"+path.join(__dirname, "..", "BrowserPages", "$1", "index.html"));
    return url;
  },
  encodeUrl: function(url) {
    url = url.replace(new RegExp("file:///"+path.join(__dirname, "..", "BrowserPages", "([A-z]+)", "index.html").replace(/\\/g, "/").replace(/\./g, "\\.")), "neon:$1");
    return url;
  }
};
