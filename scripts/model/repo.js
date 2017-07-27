'use strict';

var app = app || {};
var consts = require('server.js');


(function (module) {
  module.requestRepos = function (callback) {
    $.ajax({
      url: 'https://api.github.com/user/repos',
      method: 'GET',
      headers: {
        Authorization: `token ${consts.GITHUB_TOKEN}`
      }
    })
    .then(
      function (data){
        let mappedData = data.map(repo =>({
          name: repo.name,
          url: repo.html_url
        }));
        console.log(mappedData);
        callback(mappedData);
      }
    );
  };
})(app);

//Reference: Demo class 12
