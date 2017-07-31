'use strict';

var app = app || {};

(function(module){
  let reposController = {};

  reposController.index = function(ctx, next) {
    $('#repoList').empty();
    $('main section').hide();
    module.displayRepos(ctx.repos);
    $('#github').show();
    next();
  }
  module.reposController = reposController;
})(app);

//Reference: Demo class 14
