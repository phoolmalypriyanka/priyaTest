import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestUserService {
 //public url= 'http://localhost:3000/users';


  constructor(private http : HttpClient) { }

  //UserName =new Subject<string>();
 // UserName = new BehaviorSubject<string>('priya');


 //(1)We are creating subject
   AllUserData =new Subject<any>();

  postData(data)
{
  this.AllUserData.next(data);
  return this.http.post('http://localhost:3000/users' ,data);
  
}

getData(){
  return this.http.get('http://localhost:3000/users');
}
removeData(obj){
  return this.http.delete('http://localhost:3000/users/' + obj.id);
}

}
