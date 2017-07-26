'use strict';

var app = app || {};

(function(module){
  module.aboutController = function() {
    $('main section').hide();
    $('#about').show();
  }
})(app);
