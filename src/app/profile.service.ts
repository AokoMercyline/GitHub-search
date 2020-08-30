import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import{ environment} from '../environments/environment';
import{ promise} from 'protractor';



@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  user:User;
  

  
  constructor(private http:HttpClient) { 
    this.user = new User( "","","",0,0);

  }

  getUser(UserName:string){
    interface ApiResponse{
      name:string,
       login:string,
       avatar_url:string,
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
}
