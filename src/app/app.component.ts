import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  seconde: number = 0;
  counterSubscription: Subscription | undefined;

  constructor() {}

  ngOnInit() {
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe(
      (value: number) => {
        this.seconde = value;
      }
    );
  }

  ngOnDestroy()
  {
    this.counterSubscription?.unsubscribe();
  }

}
