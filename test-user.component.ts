import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TestUserService } from '../test-user.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-test-user',
  templateUrl: './test-user.component.html',
  styleUrls: ['./test-user.component.css']
})
export class TestUserComponent implements OnInit {
  @ViewChild(UserComponent) newChild :UserComponent;
  AllUserData:string;
  NewData;
  data:any={};
  UserObj:any;
  constructor(private newservice:TestUserService) { 

   
    this.newservice.AllUserData.subscribe(data=>{
    
      this.NewData = data;
    });

    
  }

  ngOnInit(): void {
   
  }
  SendData(){
   this.newChild.UserObj = this.data.Message;
  }

}
