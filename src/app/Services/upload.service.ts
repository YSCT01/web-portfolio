import {Injectable } from '@angular/core';
import { Api } from '../Services/Api';

@Injectable()
export class UploadService{
    public url:String;

    constructor(){
        this.url = Api.url;
    }

    makeFileRequest(url:string, params:Array<any>, files:Array<any>, name:String){
        return new Promise(function(resolve, reject){


            var formData:any = new FormData();
            var xhr = new XMLHttpRequest();

            for (var i = 0; i <files.length; i++){
                formData.append(name, files[i], files[i].name);
            }

            xhr.onreadystatechange = function(){
                if (xhr.readyState == 4){
                    if(xhr.status == 200){
                        resolve(JSON.parse(xhr.response));
                    }
                    else{
                        reject (xhr.response);
                    }
                }
            }
            xhr.open('POST', url, true);
            xhr.send(formData);
        });
    }



}