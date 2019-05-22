const $ = require("jquery");
require("bootstrap");

const browser = {
  search: function() {
    $(".url-bar-wrapper").toggleClass("show");
  }
};
