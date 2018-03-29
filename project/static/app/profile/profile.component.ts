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

  id: number;
  model = new Profile('', '', 555,);

  constructor(private profileService: ProfileService,
    private route: ActivatedRoute, public dialog: MatDialog) { }

  getProfile(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    // this.heroService.getHero(id)
    //   .subscribe(hero => this.hero = hero);
  }

  ngOnInit() {
    this.getProfile();

    if (this.id > 0) {
      this.getFriendProfile(this.id);
    } else {
      this.getMyProfile();
    }
  }

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

  getCirclesForFriend(id: number) {
    this.profileService.getCirclesForFriend(id)
      .subscribe(data => {
        console.log(data);
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
