'use strict';

(function() {
  function Project (rawDataObj) {
    this.title = rawDataObj.title;
    this.category = rawDataObj.category;
    this.duration = rawDataObj.duration;
    this.description = rawDataObj.description;
    this.technologies = rawDataObj.technologies;
  }

  Project.all = [];

  Project.prototype.toHtml = function() {
    var $templateStr = $('#handlebarsTemplate').html();
    var compiled = Handlebars.compile($templateStr);
    var html = compiled(this);
    return html;
  }

  Project.loadAll = function(rawData) {
    rawData.forEach(function(projObject) {
      Project.all.push(new Project(projObject));
    })
  }

  Project.fetchAll = function() {
    if (localStorage.rawData) {
      Project.loadAll(JSON.parse(localStorage.rawData));
      Project.all.map(article => $('#articles').append(article.toHtml()));
    } else {
      $.getJSON('./js/projectData.json').then(
        function(data) {
          localStorage.rawData = JSON.stringify(data);
          Project.fetchAll();},
        function(){console.error('File not found');})
    }
  }
})();
