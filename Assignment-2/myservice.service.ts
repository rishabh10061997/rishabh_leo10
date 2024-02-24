import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  private textToBSubject = new BehaviorSubject<string>('');
  textToB$ = this.textToBSubject.asObservable();

  private textToASubject = new BehaviorSubject<string>('');
  textToA$ = this.textToASubject.asObservable();

  sendTextToB(text: string): void {
    this.textToBSubject.next(text);
  }

  sendTextToA(text: string): void {
    this.textToASubject.next(text);
}
}
