import { Component, OnInit,ViewChild,EventEmitter } from '@angular/core';
import { TestUserService } from '../test-user.service';
import {NgForm} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild (UserComponent) newChild :UserComponent;
  NewData;
  UserData:any ={};
  AllUserData:any;
  UserObj:any;
  constructor(private newservice:TestUserService, private router: Router ) {}


  UserName:string ="Hello World";
  ngOnInit(): void {
    this.GetAllDAta();
  }

  /*AddValue(name){

    ///this.UserName = name.value;
    this.newservice.UserName.next(name.value);
  }*/


  //method to get data

  GetAllDAta(){
    this.newservice.getData().subscribe(res=>{

      //we are sending response to next component
      this.newservice.AllUserData.next(res);
     
      this.NewData = res;

    });
   
  }

  //method to insert data
  postData(form:NgForm){
    console.log(form.value);
    
    this.newservice.postData(form.value).subscribe(res=>{
     
    });
      
   // this.router.navigateByUrl('/user');
    this.GetAllDAta();
  }
  
  DeleteUserData(data){
    this.newservice.removeData(data).subscribe(res=>{
      console.log(res);
      
     // this.GetAllDAta();

    });
  }


}
