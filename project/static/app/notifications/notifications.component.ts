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
  now = new Date();

  constructor(private notificationsService: NotificationsService,
    private route: ActivatedRoute, private location: Location) { }

  getReminders() {
    this.notificationsService.getReminders()
      .subscribe(data => {
        // @TODO this isn't a very adaptive JSON response object
        for(let i = 0; i < data[0].length-1; i++) {
          let profile = new Profile(data[i][0].name, data[i][0].email, data[i][0].id);
          profile.reminder.daysLeft = data[i][1];
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
        let profile = this.reminders.find(match => match.id === id);
        // profile.reminder.lastContact = new Date();
    });
  }

  evaluateDate(date: Date): boolean {
    return date.getDate() == this.now.getDate() &&
           date.getMonth() == this.now.getMonth() &&
           date.getFullYear() == this.now.getFullYear();
  }

  ngOnInit() {
    this.getReminders();
  }

}
