import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  loggedIn = false;

  constructor(private appService: AppService) { }

  isLoggedIn() {
    this.appService.isLoggedIn()
      .subscribe(data => {
        console.log('yo: GET request data was ', data['is_logged_in']);
        this.loggedIn = data['is_logged_in'];
        console.log('yo: after GET request, ', this.loggedIn);
    })
  }

  ngOnInit() {
    this.isLoggedIn();
    console.log('yo: ', this.loggedIn);
  }
}
