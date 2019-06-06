import { Component, OnInit } from '@angular/core';
import { GreetingService } from './greeting.service';
import { Greeting } from './model/greeting';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  message = '';

  constructor(private greetingService: GreetingService) { }

  ngOnInit(): void {
    this.greetingService.getGreeting().subscribe((greeting: Greeting) => {
      this.message = greeting.message;
    });
  }

}
