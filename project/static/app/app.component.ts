import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  name = '. . .';

  constructor(private appService: AppService) { }

  // getName(): void {
  //   // * assign from an object *
  //   this.name = this.appService.name;
  //   // * assign from an external function *
  //  this.name = this.appService.getName();
  // }

  ngOnInit() {
    // * assign from an object *
    // this.name = this.appService.name;
    // * assign from an external function *
    // this.getName();
    // * assign from an internal function *
    this.name = this.appService.getName();
  }
}
