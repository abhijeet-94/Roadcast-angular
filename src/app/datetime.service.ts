import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatetimeService {
  s: any;
  interval: any;
  time = new Date();
  constructor() { }
  getTime() {
    this.s = new Observable((observer) => {
      this.interval = setInterval(() => {
        observer.next(this.time = new Date());
      }, 1000);
    }
    );
    return this.s;
  }

}
