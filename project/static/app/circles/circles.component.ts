import { Component, OnInit } from '@angular/core';
import { CirclesService } from './circles.service';
import { Circle } from './circle';

@Component({
  selector: 'app-circles',
  templateUrl: './circles.component.html',
  styleUrls: ['./circles.component.css']
})
export class CirclesComponent implements OnInit {

  circles: Circle[];

  constructor(private circlesService: CirclesService) { }

  showAllCircles() {
    this.circlesService.getCircles()
      .subscribe(data => {
        for (let i = 0; i < data['json_list'].length; i++) {
          let name = data['json_list'][i]['circle_name'];
          let id = data['json_list'][i]['id'];
          let circle = new Circle(name, id);

          if (this.circles) {
            this.circles.push(circle);
            this.showFriends(id);
          } else {
            this.circles = [circle];
            this.showFriends(id);
          }
        }
      });
  }

  showFriends(id: number) {
    this.circlesService.getFriends(id)
      .subscribe(data => {

        let friends: string[];
        let circle = this.getCircleById(id);

        for (let i = 0; i < data['json_list'].length; i++) {
          if (friends) {
            friends.push(data['json_list'][i]['name']);
          } else {
            friends = [ data['json_list'][i]['name'] ];
            console.log('friends is now ', friends);
          }
        }

        circle.friends = friends;
      });
  }

  getCircleById(id: number): Circle {
    return this.circles.find(function (circle) {
      return circle.id === id;
    });
  }

  // getFriends(circle: Circle): string[] {
  //   let friends: string[];
  //   this.circlesService.getFriends(circle.id())
  //     .subscribe(data => {
  //       for (let i = 0; i < data['json_list'].length; i++) {
  //         if (friends) {
  //           friends.push(data['json_list'][i]['name']);
  //         } else {
  //           friends = [ data['json_list'][i]['name'] ];
  //         }
  //       }
  //     });
  //   return friends;
  // }

  ngOnInit() {
    this.showAllCircles();
  }

}
