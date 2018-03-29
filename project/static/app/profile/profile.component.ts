import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProfileService } from './profile.service';
import { AppService } from '../app.service';
import { Profile } from './profile';
import { Circle } from '../circles/circle';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  model = new Profile(
    '', //name
    '', //email
    555, //id
  );

  constructor(private profileService: ProfileService, public appService: AppService, public dialog: MatDialog) { }

  getMyProfile() {
    this.profileService.getMyProfile()
      .subscribe(data => {
        this.model.name = data['name'];
        this.model.email = data['email'];
        this.model.id = data['id'];
    })
  }

  getFriendProfile(id: number) {
    this.profileService.getFriendProfile(id)
      .subscribe(data => {
        this.model.name = data['name'];
        this.model.email = data['email'];
        this.model.id = data['id'];
      })
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: 'boo'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (this.model.notes) {
        this.model.notes.push(result);
      } else if (result) {
        this.model.notes = [result];
      }
    });
    this.appService.currentProfileID = 1;
  }

  ngOnInit() {
    console.log('yo: ', this.appService.currentProfileID);
    if (this.appService.currentProfileID == 0) {
      this.getMyProfile();
    } else {
      this.getFriendProfile(this.appService.currentProfileID);
    }
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
