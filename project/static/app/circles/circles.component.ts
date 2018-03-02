import { Component, OnInit } from '@angular/core';
import { CirclesService } from './circles.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-circles',
  templateUrl: './circles.component.html',
  styleUrls: ['./circles.component.css']
})
export class CirclesComponent implements OnInit {

  circles = [];
  circle1 = 'Company A';
  circle2 = 'University';
  circle3 = 'Company B';
  circle4 = 'Hometown';

  constructor(private circlesService: CirclesService) { }

  getCircles() {
    // this.circlesService.getCircles()
    // .subscribe(data => this.circles = {
    //     name: data['name'],
    //     textfile:  data['textfile']
    // });
  }

  ngOnInit() {
    // get circles
  }

}
