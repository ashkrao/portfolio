'use strict';

var tabView = {};

tabView.handleTabs = function() {
  $('.tab').on('click', function() {
    var tabId = $(this).attr('data-content');
    tabView.showTab(tabId);
  });
}

tabView.showTab = function(tabId) {
  $('.tab-content').hide();
  $('#' + tabId).show();
}

$(document).ready(function() {
  tabView.handleTabs();
  tabView.showTab('articles');
});
