import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import{ User} from '../user';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
  user:User;

  constructor(public profileService:ProfileService ) { }

  getUser(UserName){
    this.profileService.getUser(UserName).then(
     ( success)=>{
       this.user = this.profileService.user;
     },
     (error)=>{
       console.log(error)
     }
    )
  }

  ngOnInit(): void {
    this.getUser("AokoMercyline");
  }

}
