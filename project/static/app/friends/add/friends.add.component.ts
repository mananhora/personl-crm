import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FriendsService } from '../friends.service';
import { CirclesService } from '../../circles/circles.service';
import { Profile } from '../../profile/profile';
import { Circle } from '../../circles/circle';

@Component({
  selector: 'app-friends-add',
  templateUrl: './friends.add.component.html',
  styleUrls: ['./friends.add.component.css']
})
export class FriendsAddComponent implements OnInit {

  friend: Profile;
  circles: Circle[];

  constructor(private circlesService: CirclesService,
    private friendsService: FriendsService,
    private router: Router) { }

  addFriend() {
    this.friendsService.addFriend(this.friend.name, this.friend.email, this.friend.circles)
      .subscribe();
    // @TODO: for some reason, causes a post error to add this nav into subsrcibe()
    this.router.navigate(['/app/friends']);
  }

  getAllCircles() {
    this.circlesService.getCircles()
      .subscribe(data => {
        for (let i = 0; i < data['json_list'].length; i++) {
          let name = data['json_list'][i]['circle_name'];
          let id = data['json_list'][i]['id'];
          let circle = new Circle(name, id);

          if (this.circles) {
            this.circles.push(circle);
          } else {
            this.circles = [circle];
          }
        }
      });
  }

  // do i want this function to draw straight from the global friend object?
  // or from parameters we're passing in?
  // addToCircle(id: number, circles: Circle[]) {
  //   for (let i = 0; i < circles.length; i++) {
  //     let circle = circles[i];
  //     console.log('yo: add to ', circle.name, ', #', circle.id);
  //     this.circlesService.addFriendToCircle(id, circle.id)
  //       .subscribe();
  //     console.log('yo: added for friend #', id);
  //   }
  // }

  ngOnInit() {
    this.friend = new Profile('', '', 555);
    this.getAllCircles();
  }

}
