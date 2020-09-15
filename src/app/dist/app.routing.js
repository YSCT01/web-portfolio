"use strict";
exports.__esModule = true;
exports.routing = exports.appRoutingProviders = void 0;
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var about_component_1 = require("./components/about/about.component");
var error404_component_1 = require("./components/error404/error404.component");
var projects_component_1 = require("./components/projects/projects.component");
var project_component_1 = require("./components/project/project.component");
var contact_component_1 = require("./components/contact/contact.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'About', component: about_component_1.AboutComponent },
    { path: 'Projects', component: projects_component_1.ProjectsComponent },
    { path: 'Projects/:name', component: project_component_1.ProjectComponent },
    { path: 'Contact', component: contact_component_1.ContactComponent },
    { path: '**', component: error404_component_1.Error404Component },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
