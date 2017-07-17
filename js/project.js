'use strict';

var projects = [];

function Project (rawDataObj) {
  this.title = rawDataObj.title;
  this.category = rawDataObj.category;
  this.duration = rawDataObj.duration;
  this.description = rawDataObj.description;
  this.technologies = rawDataObj.technologies;
}

function handlebarRenderTemplate(){
  rawData.forEach(function(object){
    var $templateStr = $('#handlebarsTemplate').html();
    var compiled = Handlebars.compile($templateStr);
    var html = compiled(object);
    $('#articles').append(html);
  })
}

rawData.forEach(function(projObject) {
  projects.push(new Project(projObject));
});

$(document).ready(function(){
  handlebarRenderTemplate();
})
