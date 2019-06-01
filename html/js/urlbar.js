const settings = require("./settings.js");
const tabs = require("./tabs.js");
const $ = require("jquery");

module.exports = {
  registerEvents: function() {
    $(".url-bar").keyup(function(e) {
      const query = $(this).val();

      let type = 0;

      if(query.match(/^neon:[A-z0-9]+$/gm))
        type = 3;
      else if(query.match(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm))
        type = 2;
      else if(query.length > 0)
        type = 1;

      if(e.which === 27) {
        $(".url-bar-wrapper").removeClass("show");
        return;
      } else if(e.which === 13) {
        $(".url-bar-wrapper").removeClass("show");

        if(type === 3 || type === 2) {
          tabs.navigate(query);
        } else if(type === 1) {
          tabs.navigate(settings.searchEngine+encodeURI(query));
        }
      }

      switch(type) {
        case 3:
          $(".url-bar-icon").html(`<i class="${settings.searchBar.icon.neon}"></i>`);
          break;
        case 2:
          $(".url-bar-icon").html(`<i class="${settings.searchBar.icon.url}"></i>`);
          break;
        case 1:
          $(".url-bar-icon").html(`<i class="${settings.searchBar.icon.search}"></i>`);
          break;
        case 0:
          $(".url-bar-icon").html(`<i class="${settings.searchBar.icon.unknown}"></i>`);
      }
    });
  },
  toggle: function() {
    $(".url-bar-wrapper").toggleClass("show");
    if($(".url-bar-wrapper").hasClass("show")) {
      $(".url-bar").val(tabs.encodeUrl($(".tab.focus").children("webview")[0].getURL()));
      $(".url-bar").focus();
      $(".url-bar-icon").html(`<i class="${settings.searchBar.icon.unknown}"></i>`);
    }
  }
};
