import { Component, OnInit } from '@angular/core';
import { Project } from '../../Model/project';
import { Api } from '../../Services/Api';
import { ProjectServices } from '../../Services/project.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers:[ProjectServices]
})
export class ProjectsComponent implements OnInit {
  public url:String;
  public projectList:Project[];
  constructor(
    private _projectServices:ProjectServices
  ) { 
    this.url = Api.url;
  }

  ngOnInit(): void {
    this.loadProjects();
  }

  //Function to get the projects
  loadProjects(){
    this._projectServices.getProjects().subscribe(
      response=>{
        this.projectList = response.project;
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

  

}
