import { Component, OnInit } from '@angular/core';
import { Repo} from '../repo';
import { ProfileService} from '../profile.service'


@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  repo:Repo;

  constructor(public profileService:ProfileService ) { }

  getRepo(UserName){
    this.profileService.getRepo(UserName).then(
     ( success)=>{
       this.repo = this.profileService.repo;
     },
     (error)=>{
       console.log(error)
     }
    )
  }

  

  ngOnInit(): void {
    this.getRepo("AokoMercyline");
  }

}


