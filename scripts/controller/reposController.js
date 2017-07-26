'use strict';

var app = app || {};

(function(module){
  module.reposController = function() {
    module.requestRepos(function (repos) {
      module.displayRepos(repos);
    });
    $('main section').hide();
    $('#github').show();
  }
})(app);

//Reference: Demo class 12
