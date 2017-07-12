'use strict';

var projects = [];

function Project (rawDataObj) {
  this.title = rawDataObj.title;
  this.category = rawDataObj.category;
  this.duration = rawDataObj.duration;
  this.description = rawDataObj.description;
  this.technologies = rawDataObj.technologies;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template');

  $newProject.data('category', this.category);

  $newProject.find('h2').html(this.title);
  $newProject.find('.duration').html(this.duration);
  $newProject.find('.description').html(this.description);
  $newProject.find('.technologies-used').html(this.technologies);

  // Add a horizontal line at the end
  $newProject.append('<hr>');
  return $newProject;
};

rawData.forEach(function(projObject) {
  projects.push(new Project(projObject));
});

projects.forEach(function(proj) {
  $('main').append(proj.toHtml());
});
