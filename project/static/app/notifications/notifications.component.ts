import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NotificationsService } from './notifications.service';
import { Profile } from '../profile/profile';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  reminders: Profile[];

  constructor(private notificationsService: NotificationsService,
    private route: ActivatedRoute, private location: Location) { }

  getReminders() {
    this.notificationsService.getReminders()
      .subscribe(data => {
        // @TODO this isn't a very adaptive JSON response object
        for(let i = 0; i < data[0].length-1; i++) {
          let profile = new Profile(data[i][0].name, data[i][0].email, data[i][0].id);
          if (this.reminders) {
            this.reminders.push(profile);
          } else {
            this.reminders = [profile];
          }
        }
    });
  }

  contacted(friend: Profile) {
    this.setLastContact(new Date(), friend.id);
  }

  setLastContact(date: Date, id: number) {
    this.notificationsService.setLastContact(date, id)
      .subscribe(data => {
        console.log(data);
    });
  }

  setReminder(frequency: number, id: number) {
    this.notificationsService.setReminder(frequency, id)
      .subscribe(data => {
        console.log(data);
        this.getReminders();
    });
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.getReminders();
  }

}
