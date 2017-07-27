'use strict';

var app = app || {};

(function (module) {
  module.requestRepos = function (callback) {
    $.get({
      url: 'https://api.github.com/user/repos'
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
