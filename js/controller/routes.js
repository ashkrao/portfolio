'use strict';
var app = app || {};

page('/about', app.aboutController.init);
page('/', app.homeController.init);

page();
