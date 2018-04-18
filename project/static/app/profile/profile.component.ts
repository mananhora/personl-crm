import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProfileService } from './profile.service';
import { Profile } from './profile';
import { Circle } from '../circles/circle';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  routeId: number;
  model = new Profile('', '', 0,);

  constructor(private profileService: ProfileService,
    private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    this.routeId = +this.route.snapshot.paramMap.get('id');

    if (this.routeId) {
      this.getFriendProfile(this.routeId);
    } else {
      this.getMyProfile();
    }
  }

  getMyProfile() {
    this.profileService.getMyProfile()
      .subscribe(data => {
        if (data['name']) this.model.name = data['name'];
        if (data['email']) this.model.email = data['email'];
        if (data['id']) this.model.id = data['id'];
        if (data['img']) this.model.img = data['img'];
        if (data['circles']) this.model.circles = data['circles'];
        if (data['phone_number']) this.model.phone = data['phone_number'];
        if (data['location']) this.model.location = data['location'];
        if (data['job']) this.model.job = data['job'];
    })
  }

  getFriendProfile(id: number) {
    this.profileService.getFriendProfile(id)
      .subscribe(data => {
        if (data['name']) this.model.name = data['name'];
        if (data['email']) this.model.email = data['email'];
        if (data['id']) this.model.id = data['id'];
        (data['img']) ? this.model.img = data['img'] :
          this.model.img = 'assets/images/profile.png';
        if (data['circles']) this.model.circles = data['circles'];
        if (data['phone_number']) this.model.phone = data['phone_number'];
        if (data['location']) this.model.location = data['location'];
        if (data['notes']) this.model.notes = data['notes'];
        if (data['job']) this.model.job = data['job'];
      });
    this.getCirclesForFriend(id);
  }

  getCirclesForFriend(id: number) {
    this.profileService.getCirclesForFriend(id)
      .subscribe(data => {
        for (let i = 0; i < data['json_list'].length; i++) {
          if (this.model.circles) {
            this.model.circles.push(new Circle(
              data['json_list'][i].circle_name,
              data['json_list'][i].id));
          } else {
            this.model.circles = [new Circle(
              data['json_list'][i].circle_name,
              data['json_list'][i].id)];
          }
        }
      })
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: 'boo'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (this.model.notes) {
        this.model.notes.push(result);
      } else if (result) {
        this.model.notes = [result];
      }
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  template: `
    <h2 mat-dialog-title>Add a note</h2>
    <mat-dialog-content>
      <textarea id="data" name="data" [(ngModel)]="data">{{data}}</textarea>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button (click)=onNoClick()>Cancel</button>
      <button mat-button (click)="dialogRef.close(data)">Done</button>
    </mat-dialog-actions>
  `,
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
