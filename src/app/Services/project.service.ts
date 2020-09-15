import { Injectable } from '@angular/core';
import  { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from '../Model/project';
import { Api } from '../Services/Api';

@Injectable()
export class ProjectServices{
    public url:String;

    constructor(
        private _http:HttpClient
    ){
        this.url = Api.url;
    }

    getProjects():Observable<any>{
        var headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + '/projects' , {headers:headers});
    }

    searchProject(name):Observable<any>{
        var headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + '/project/' + name , {headers:headers});
    }

    updateProject(project:Project):Observable<any>{
        var params = JSON.stringify(project);
        var headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url + '/update/' + project.name , params, {headers: headers});
    }

    deleteProject(name):Observable<any>{
        var headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url + '/delete/' + name,{headers:headers});
    }

    sendEmail(form):Observable<any>{
        var data = JSON.stringify(form);
        var headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url + '/sendEmail', data, {headers: headers});
    }
}