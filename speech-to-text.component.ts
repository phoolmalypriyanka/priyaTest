import { Component, OnInit } from '@angular/core';
import { TestUserService } from '../test-user.service';

@Component({
  selector: 'app-speech-to-text',
  templateUrl: './speech-to-text.component.html',
  styleUrls: ['./speech-to-text.component.css']
})
export class SpeechToTextComponent implements OnInit {

  constructor(public service:TestUserService) {
    this.service.init()
   }

  ngOnInit(): void {
  }

  startService(){
    this.service.start()
  }

  stopService(){
    this.service.stop()
  }


}
