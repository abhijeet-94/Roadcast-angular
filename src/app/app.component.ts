import { Component, OnInit } from '@angular/core';
import { DatetimeService } from './datetime.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'roadcast';
  clock = ""
  clockHandle;

  constructor(private datetimeservice: DatetimeService) {
    this.clockHandle = this.datetimeservice.getTime().subscribe((data: any) => {
      this.clock = data;
    })
  }
  ngOnInit() {

  }
}
