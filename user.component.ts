import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TestUserService } from '../test-user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Output() public NewChild = new EventEmitter;
  NewData;
  data:any={};
  UserObj;
  constructor(private newservice:TestUserService) {

    /*this.newservice.UserName.subscribe(data=>{
    
      this.UserName = data;
    });*/
    
    this.newservice.AllUserData.subscribe(data=>{
    
      this.NewData = data;
    });
  }

  UserName:string ="Hello World";
  ngOnInit(): void {
  }

  AddValue(name){

    this.UserName = name.value;
  }

  OutputTest(){
   this.NewChild.emit('This is output example');
  }

}
