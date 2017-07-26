'use strict';

var app = app || {};

(function(module){
  module.homeController = function() {
    $('main section').hide();
    $('#articles').show();
  }
})(app);
