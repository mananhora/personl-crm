import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CirclesService } from '../circles.service';
import { Circle } from '../circle';

@Component({
  selector: 'app-circles',
  templateUrl: './circles.add.component.html',
  styleUrls: ['./circles.add.component.css']
})
export class CirclesAddComponent implements OnInit {

  circle: Circle;
  friends: string[];
  selectedFriends: string[];

  constructor(private circlesService: CirclesService) { }

  addCircle() {
    this.circlesService.addCircle({
        circle_name: this.circle.name,
      }).subscribe();

    // for (friend in selectedFriends) {
    //   this.circlesService.addFriendToCircle({
    //     friend_id: friend,
    //     circle_id: circle_id,
    //   });
    // }
  }

  getFriendsList() {
    console.log('yo: gettin friends');
    this.circlesService.getFriendsList()
      .subscribe(data => {
        console.log('yo: ', data);
        this.friends = data['friends'];
    })
  }

  ngOnInit() {
    this.circle = new Circle('', 123);
    this.friends = ['Manan', 'Tarin'];
  }

}
