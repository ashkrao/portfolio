'use strict';
var app = app || {};

page('/', app.homeController);
page('/about', app.aboutController);
page('/repos', app.reposController);

page();
