"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProjectsComponent = void 0;
var core_1 = require("@angular/core");
var Api_1 = require("../../Services/Api");
var project_service_1 = require("../../Services/project.service");
var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(_projectServices) {
        this._projectServices = _projectServices;
        this.url = Api_1.Api.url;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.loadProjects();
    };
    //Function to get the projects
    ProjectsComponent.prototype.loadProjects = function () {
        var _this = this;
        this._projectServices.getProjects().subscribe(function (response) {
            _this.projectList = response.projects;
        }, function (error) {
            console.log(error);
        });
    };
    ProjectsComponent = __decorate([
        core_1.Component({
            selector: 'app-projects',
            templateUrl: './projects.component.html',
            styleUrls: ['./projects.component.css'],
            providers: [project_service_1.ProjectServices]
        })
    ], ProjectsComponent);
    return ProjectsComponent;
}());
exports.ProjectsComponent = ProjectsComponent;
