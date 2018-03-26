import { Component, OnInit } from '@angular/core';
import { CirclesService } from '../circles.service';
import { Circle } from '../circle';

@Component({
  selector: 'app-circles',
  templateUrl: './circles.add.component.html',
  styleUrls: ['./circles.add.component.css']
})
export class CirclesAddComponent implements OnInit {

  circle: Circle;

  constructor(private circlesService: CirclesService) { }

  addCircle() {
    this.circlesService.addCircle({
        circle_name: this.circle.name,
      }).subscribe();
  }

  ngOnInit() {
    this.circle = new Circle('', 123);
  }

}
