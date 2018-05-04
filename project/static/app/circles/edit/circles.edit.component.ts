import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { CirclesService } from '../circles.service';
import { Circle } from '../circle';

@Component({
  selector: 'app-circles-edit',
  templateUrl: './circles.edit.component.html',
  styleUrls: ['./circles.edit.component.css']
})
export class CirclesEditComponent implements OnInit {

  routeId: number;
  circle: Circle;

  constructor(private circlesService: CirclesService, private router: Router,
    private route: ActivatedRoute, private location: Location) { }

  getCircleInfo(id: number) {
    console.log('ayyyy');
    this.circlesService.getCircleInfo(id)
      .subscribe(data => {
        this.circle = new Circle(data['circle_name'], this.routeId);
    });
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.routeId = +this.route.snapshot.paramMap.get('id');
    if (this.routeId) {
      this.getCircleInfo(this.routeId);
    }
  }

}
