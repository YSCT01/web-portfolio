import { Component, OnInit } from '@angular/core';
import { Project } from '../../Model/project';
import  { ProjectServices } from '../../Services/project.service';
import { Api } from '../../Services/Api';
import { Router, Params, RouterLink, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers:[ProjectServices]
})
export class ProjectComponent implements OnInit {

  public r_project:Project;
  public url:String;
  public request:Boolean;

  constructor(
    private _projectServices:ProjectServices,
    private _router:Router,
    private _route:ActivatedRoute
  ) { 
    this.url= Api.url;
    this.request = true;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      var name = params.name; 
      this.searchProject(name);
    });
  }
  //Function to get the project elements
  searchProject(p_name:any){
      this._projectServices.searchProject(p_name).subscribe(
        response=>{
          this.r_project = response.project;
          this.request = true;
        },
        error=>{
          console.log(<any>error);
          this.request = false;
        }
      );
    }

  

}
