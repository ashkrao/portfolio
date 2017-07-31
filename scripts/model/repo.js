'use strict';

var app = app || {};

(function (module) {
  module.requestRepos = function (ctx, next) {
    // call GitHub to get my repos
    $.ajax({
      url: `/github/user/repos`,
      method: 'GET'
    })
    .then(
      function (data) {
        let mappedData = data.map(repo =>({
          name: repo.name,
          url: repo.html_url
        }));
        ctx.repos = mappedData;
        next();
      }
    );
  };
})(app);
