import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import {FormControl} from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProfileService } from '../profile.service';
import { CirclesService } from '../../circles/circles.service';
import { NotificationsService } from '../../notifications/notifications.service';
import { Profile } from '../profile';
import { Circle } from '../../circles/circle';
import { Address } from 'angular-google-place';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile.edit.component.html',
  styleUrls: ['./profile.edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  routeId: number;
  allCircles: Circle[];
  model = new Profile('', '', 0);
  lastContactForForm = new FormControl(new Date());

  constructor(private profileService: ProfileService, private circlesService: CirclesService,
    private notificationsService: NotificationsService, private route: ActivatedRoute, private router: Router,
    private location: Location, public dialog: MatDialog) { }

  getProfile() {
    this.routeId = +this.route.snapshot.paramMap.get('id');
  }

  goBack() {
    this.location.back();
  }

  getMyProfile() {
    this.profileService.getMyProfile()
      .subscribe(data => {
        if (data['friend']['name']) this.model.name = data['friend']['name'];
        if (data['friend']['email']) this.model.email = data['friend']['email'];
        if (data['friend']['id']) this.model.id = data['friend']['id'];
        (data['friend']['image_url']) ? this.model.img = data['friend']['image_url'] :
          this.model.img = 'assets/images/profile.png';
        if (data['friend']['circles']) this.model.circles = data['friend']['circles'];
        if (data['friend']['phone_number']) this.model.phone = data['friend']['phone_number'];
        if (data['friend']['location']) this.model.location = data['friend']['location'];
        if (data['friend']['notes']) this.model.notes = data['friend']['notes'];
        if (data['friend']['job']) this.model.job = data['friend']['job'];
    })
  }

  getFriendProfile(id: number) {
    this.profileService.getFriendProfile(id)
      .subscribe(data => {
        if (data['friend']['name']) this.model.name = data['friend']['name'];
        if (data['friend']['email']) this.model.email = data['friend']['email'];
        if (data['friend']['id']) this.model.id = data['friend']['id'];
        (data['friend']['image_url']) ? this.model.img = data['friend']['image_url'] :
          this.model.img = 'assets/images/profile.png';
        if (data['friend']['circles']) this.model.circles = data['friend']['circles'];
        if (data['friend']['phone_number']) this.model.phone = data['friend']['phone_number'];
        if (data['friend']['location']) this.model.location = data['friend']['location'];
        if (data['friend']['reminder_frequency']) this.model.reminder.frequency = data['friend']['reminder_frequency'];
        if (data['friend']['last_contacted_date']) {
          this.model.reminder.lastContact = data['friend']['last_contacted_date'];
          this.lastContactForForm = new FormControl(new Date(data['friend']['last_contacted_date']));
        }
        if (data['friend']['notes']) this.model.notes = data['friend']['notes'];
        if (data['friend']['job']) this.model.job = data['friend']['job'];
      })
    this.getCirclesForFriend(this.routeId);
  }

  getCirclesForFriend(id: number) {
    this.profileService.getCirclesForFriend(id)
      .subscribe(data => {
        for (let i = 0; i < data['circles'].length; i++) {
          if (this.model.circles) {
            this.model.circles.push(new Circle(
              data['circles'][i].circle_name,
              data['circles'][i].id));
          } else {
            this.model.circles = [new Circle(
              data['circles'][i].circle_name,
              data['circles'][i].id)];
          }
        }
      })
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
      });
  }

  editProfile() {
    if (!this.model.location) {
      this.model.location = '';
    }
    if (!this.model.phone) {
      this.model.phone = '';
    }
    if (!this.model.job) {
      this.model.job = '';
    }
    if (!this.model.notes) {
      this.model.notes = '';
    }
    this.profileService.updateProfile(
      this.model.id,
      this.model.location,
      this.model.img,
      this.model.notes,
      this.model.phone,
      this.model.job
    ).subscribe(data => {
      console.log(this.model.location);
      if (!data['result']) {
        alert(data['description']);
      }
    });
    if (this.model.reminder.frequency) {
      this.notificationsService.setReminder(
        this.model.reminder.frequency, this.model.id
      ).subscribe(data => {
        if (!data['result']) {
          alert(data['description']);
        }
      });
    }
    this.notificationsService.setLastContact(
      new Date(this.lastContactForForm.value), this.model.id
    ).subscribe(data => {
      if (!data['result']) {
        alert(data['description']);
      }
    });

    this.router.navigate(['/app/profile/', this.routeId]);
  }

  removeCircle(circle: Circle) {
    let index = this.model.circles.indexOf(circle);
    if (index >= 0) this.model.circles.splice(index, 1);
    this.circlesService.removeFriendFromCircle(this.routeId, circle.id).subscribe(data => {
      if (!data['result']) {
        alert(data['description'])
      }
    });
  }

  deleteProfile() {
    if (confirm('Are you sure you want to delete this profile?')) {
      this.profileService.deleteProfile(this.routeId).subscribe(data => {
        if (!data['result']) {
          alert(data['description']);
        }
      });
      this.router.navigate(['/app/friends']);
    }
  }

  ngOnInit() {
    this.getProfile();

    if (this.routeId == 0) {
      this.getMyProfile();
    } else {
      this.getFriendProfile(this.routeId);
      this.getAllCircles();
    }
  }

  openPhotoDialog(): void {
    let dialogRef = this.dialog.open(PhotoDialog, {
      width: '30em',
      data: this.model.img
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.model.img = result;
      }
    });
  }

  openCirclesDialog(): void {
    let dialogRef = this.dialog.open(CirclesDialog, {
      width: '30em',
      data: { name: this.model.name, list: this.allCircles, selected: this.model.circles }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        for (let i = 0; i < result.selected.length; i++) {
          if (this.model.circles) {
            this.model.circles.push(result.selected[i]);
          } else {
            this.model.circles = [result.selected[i]];
          }
          this.circlesService.addFriendToCircle(this.routeId, result.selected[i].id).subscribe();
        }
      }
    });
  }

}

  @Component({
  selector: 'photo-dialog',
  template: `
    <h2 mat-dialog-title>Add or update profile photo</h2>
    <mat-dialog-content>
      <input matInput type="url" name="data" [(ngModel)]="data">
    </mat-dialog-content>
    <mat-dialog-actions class="right">
      <button mat-button (click)=onNoClick()>Cancel</button>
      <button mat-button (click)="dialogRef.close(data)">Done</button>
    </mat-dialog-actions>
  `,
  })
  export class PhotoDialog {

  constructor(
    public dialogRef: MatDialogRef<PhotoDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

  @Component({
  selector: 'circles-dialog',
  template: `
    <h2 mat-dialog-title>Add {{name}} to new circles</h2>
    <mat-dialog-content>
      <mat-form-field>
        <mat-select placeholder="Add to circles" multiple name="data.selected" [(value)]="data.selected">
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
  export class CirclesDialog {

  constructor(
    public dialogRef: MatDialogRef<CirclesDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
