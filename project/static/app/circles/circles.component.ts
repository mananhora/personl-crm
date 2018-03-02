import { Component, OnInit } from '@angular/core';
import { CirclesService } from './circles.service';
import { HttpHeaders } from '@angular/common/http';
import { Circle } from './circle';

@Component({
  selector: 'app-circles',
  templateUrl: './circles.component.html',
  styleUrls: ['./circles.component.css']
})
export class CirclesComponent implements OnInit {

  circles = [];

  constructor(private circlesService: CirclesService) { }

  // getCircles() {
  //   this.circlesService.getCircles()
  //   .subscribe(data => this.circles = {
  //       name: data['name'],
  //       textfile:  data['textfile']
  //   });
  // }

  ngOnInit() {
    this.circles = this.circlesService.getCircles();
  }

}
