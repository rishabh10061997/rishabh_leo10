import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})

export class AComponent implements OnInit {
  inputTextA: string = '';
  
  constructor(private myService: MyserviceService) {}

  ngOnInit(): void {
    this.myService.textToA$.subscribe((text) => {
      this.inputTextA = text;
    });
  }

  sendTextToB(): void {
    this.myService.sendTextToB(this.inputTextA);
  }
}
