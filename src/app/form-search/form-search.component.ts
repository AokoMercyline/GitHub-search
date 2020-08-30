import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.css']
})
export class FormSearchComponent implements OnInit {
  @Output() emitSearch = new EventEmitter<any>();
  UserName:string;
  constructor() { }
get(){
  this.emitSearch.emit(this.UserName);                                                                                                                                                                                   
}
  ngOnInit(): void {
  }

}
