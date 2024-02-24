import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.css'
})
export class AboutmeComponent {
 
  myInfo = {
    name: 'Rishabh Upwanshi',
    age: 26 
  };

showAlert(): void {

  // alert('Warning!');

      alert(`Name: ${this.myInfo.name}, Age: ${this.myInfo.age}`);

    }
}
