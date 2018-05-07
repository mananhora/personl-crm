import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CirclesService } from '../circles.service';
import { FriendsService } from '../../friends/friends.service';
import { Circle } from '../circle';
import { Profile } from '../../profile/profile';

@Component({
  selector: 'app-circles-edit',
  templateUrl: './circles.edit.component.html',
  styleUrls: ['./circles.edit.component.css']
})
export class CirclesEditComponent implements OnInit {

  friendsLoading = true;
  circleLoading = true;
  routeId: number;
  name: string;
  circle: Circle;
  childCircles: Circle[];
  parentCircle: Circle;
  allCircles: Circle[];
  friends: Profile[];
  allFriends: Profile[];

  constructor(private circlesService: CirclesService, private friendsService: FriendsService,
    private router: Router, private route: ActivatedRoute,
    private location: Location, public dialog: MatDialog) { }

  getCircleInfo(id: number) {
    this.circlesService.getCircleInfo(id)
      .subscribe(data => {
        // get circle name
        this.circle = new Circle(data['circle']['circle_name'], data['circle']['id']);
        if (data['circle']['parent_id']) {
          // and parent circle name
          this.circlesService.getCircleInfo(id).subscribe(data => {
            this.parentCircle = new Circle(data['circle']['circle_name'], data['circle']['id']);
          })
        }
    });
  }

  getChildCircles(id: number) {
    this.circlesService.getChildCircles(id)
      .subscribe(data => {
        for (let i = 0; i < data['child_circles'].length; i++) {
          let name = data['child_circles'][i].circle_name;
          let id = data['child_circles'][i].id;
          let circle = new Circle(name, id);
          if (this.childCircles) {
            this.childCircles.push(circle);
          } else {
            this.childCircles = [circle];
          }
        }
    })
  }

  getFriendsForCircle(circle_id: number) {
    this.friendsService.getFriends(circle_id)
      .subscribe(data => {
        for (let i = 0; i < data['friends'].length; i++) {
          let friend_id = data['friends'][i]['id'];
          let name = data['friends'][i]['name'];
          let email = data['friends'][i]['email'];
          let friend = new Profile(name, email, friend_id);
          // create interactive local friends list
          if (this.friends) {
            this.friends.push(friend);
          } else {
            this.friends = [friend];
          }
          // save original friends list
          if (this.circle.friends) {
            this.circle.friends.push(friend);
          } else {
            this.circle.friends = [friend];
          }
        }
      });
  }

  getAllCircles() {
    this.circlesService.getCircles()
      .subscribe(data => {
        for (let i = 0; i < data['circles'].length; i++) {
          let name = data['circles'][i]['circle_name'];
          let id = data['circles'][i]['id'];
          let circle = new Circle(name, id);

          if (this.allCircles) {
            this.allCircles.push(circle);
          } else {
            this.allCircles = [circle];
          }
        }
        this.circleLoading = false;
      });
  }

  getAllFriends() {
    this.friendsService.getAllFriends()
      .subscribe(data => {
        for (let i = 0; i < data['friends'].length; i++) {
          let id = data['friends'][i]['id'];
          let name = data['friends'][i]['name'];
          let email = data['friends'][i]['email'];
          let friend = new Profile(name, email, id);

          if (this.allFriends) {
            this.allFriends.push(friend);
          } else {
            this.allFriends = [friend];
          }
        }
        this.friendsLoading = false;
      })
  }

  removeFriend(friend: Profile) {
    let index = this.friends.indexOf(friend);
    if (index >= 0) this.friends.splice(index, 1);
    this.circlesService.removeFriendFromCircle(friend.id, this.routeId).subscribe(data => {
      if (!data['result']) {
        alert(data['description'])
      }
    });
  }

  removeChildCircle(circle: Circle) {
    let index = this.childCircles.indexOf(circle);
    if (index >= 0) this.childCircles.splice(index, 1);
    this.circlesService.removeChildCircle(this.routeId, circle.id).subscribe(data => {
      if (!data['result']) {
        alert(data['description']);
      }
    });
  }

  deleteCircle() {
    if (confirm('Are you sure you want to delete this circle?')) {
      this.circlesService.deleteCircle(this.routeId).subscribe(data => {
        if (!data['result']) {
          alert(data['description']);
        }
      });
      this.router.navigate(['/app/home']);
    }
  }

  saveChanges() {
    // change parent circle
    if (this.parentCircle) {
      this.circlesService.assignChildCircle(this.parentCircle.id, this.routeId).subscribe(data => {
        if (!data['result']) {
          alert(data['description']);
        }
      });
    } else {
      this.circlesService.getCircleInfo(this.routeId).subscribe(data => {
        if (data['circle']['parent_id']) {
          this.circlesService.removeChildCircle(data['circle']['parent_id'], this.routeId).subscribe(data => {
            if (!data['result']) {
              alert(data['description']);
            }
          });
        }
      });
    }
    // add child circles
    for (let i = 0; i < this.childCircles.length; i++) {
      this.circlesService.assignChildCircle(this.routeId, this.childCircles[i].id).subscribe(data => {
        if (!data['result']) {
          alert(data['description']);
        }
      });
    }

    // add friends
    if (this.friends) {
      for (let i = 0; i < this.friends.length; i++) {
        this.circlesService.addFriendToCircle(this.friends[i].id, this.routeId).subscribe(data => {
          if (!data['result']) {
            alert(data['description']);
          }
        });
      }
    }
    this.router.navigate(['/app/friends/', this.routeId]);
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.routeId = +this.route.snapshot.paramMap.get('id');
    // initialize blank variables
    this.circle = new Circle('', 0);
    this.childCircles = [];
    this.friends = [];
    // get and render component data
    if (this.routeId) {
      this.getAllCircles();
      this.getCircleInfo(this.routeId);
      this.getChildCircles(this.routeId);
      this.getAllFriends();
      this.getFriendsForCircle(this.routeId);
    }
  }

  // add child circles
  openChildCirclesDialog(): void {
    let dialogRef = this.dialog.open(AddDialog, {
      width: '30em',
      data: { for: 'sub groups', list: this.allCircles, selected: this.childCircles }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        for (let i = 0; i < result.selected.length; i++) {
          this.childCircles.push(result.selected[i]);
        }
      }
    });
  }

  // add friends
  openFriendsDialog(): void {
    let dialogRef = this.dialog.open(AddDialog, {
      width: '30em',
      data: { for: 'friends', list: this.allFriends, selected: this.friends }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        for (let i = 0; i < result.selected.length; i++) {
          this.friends.push(result.selected[i]);
        }
      }
    });
  }

}

// dialog pop-up modal for adding child circles or friends
@Component({
selector: 'add-dialog',
template: `
  <h2 mat-dialog-title>Add {{data.for}}</h2>
  <mat-dialog-content>
    <mat-form-field>
      <mat-select placeholder="Add {{data.for}}" multiple name="data.selected" [(value)]="data.selected">
        <mat-option *ngFor="let x of data.list" [value]="x">{{x.name}}</mat-option>
      </mat-select>
    </mat-form-field>
  </mat-dialog-content>
  <mat-dialog-actions class="right">
    <button mat-button (click)=onNoClick()>Cancel</button>
    <button mat-button (click)="dialogRef.close(data)">Done</button>
  </mat-dialog-actions>
`,
})
export class AddDialog {

  constructor(
    public dialogRef: MatDialogRef<AddDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
