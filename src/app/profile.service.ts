import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import{ environment} from '../environments/environment';
import{ promise} from 'protractor';
import { Repo } from './repo';




@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  user:User;
  repo:Repo;
  

  
  constructor(private http:HttpClient) { 
    this.user = new User( "","","","",0,0,0);
    this.repo = new Repo( "", "","",new Date());

  }

  getUser(UserName:string){
    interface ApiResponse{
      name:string,
       login:string,
       avatar_url:string,
       bio:string,
       public_repos:number,
       followers:number,
       following: number,

    }

    let promise = new Promise((resolve, reject) => {
      let apiURL = 'https://api.github.com/users/' + UserName + '?access_token=' + environment.apiKey;
      this.http.get<ApiResponse>(apiURL)
        .toPromise()
        .then(
          res => { // Success
            this.user = res;
            resolve();
          },
          (error) =>{
            reject();
          }
        );
    });
    return promise;
  }
  getRepo(UserName:string){
    interface ApiResponse{
      name:string,
      description:string,
      language:string,
      created_at:Date
     

    }
    let promise = new Promise((resolve, reject) => {
      let apiURL = 'https://api.github.com/users/' + UserName + '/repos?access_token=' + environment.apiKey;
      this.http.get<ApiResponse>(apiURL)
        .toPromise()
        .then(
          res => { // Success
            this.repo = res;
            resolve();
          },
          (error)=>{
            reject();
          }
        );
    });
    return promise;
  


  }
  
}
