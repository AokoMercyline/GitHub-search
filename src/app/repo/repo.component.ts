import { Component, OnInit } from '@angular/core';
import { Repo} from '../repo';
import { ProfileService} from '../profile.service'
import { User } from '../user';
import { UserComponent } from '../user/user.component';


@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  repo:Repo;

  constructor(public profileService:ProfileService ) { }

  getRepo(repo){
    this.profileService.getRepo(repo)
    .then(
      ( success)=>{
        this.repo = this.profileService.repos;
        console.log(this.repo);
        
      },
      (error)=>{
        console.log(error)
      }
     )
  }

  

  ngOnInit(): void {
    this.getRepo("Quotes");
    
  }

}


