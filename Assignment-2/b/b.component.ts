import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css'] 
})

export class BComponent implements OnInit {
  inputTextB: string = '';

  constructor(private myService: MyserviceService) {}

  ngOnInit(): void {
    this.myService.textToB$.subscribe((text) => {
      this.inputTextB = text;
    });
  }

  sendTextToA(): void {
    this.myService.sendTextToA(this.inputTextB);
  }
}
