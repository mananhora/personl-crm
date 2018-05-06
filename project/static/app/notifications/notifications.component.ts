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
        for(let i = 0; i < data['reminders'].length; i++) {
          let profile = new Profile(data['reminders'][i][0].name, data['reminders'][i][0].email, data['reminders'][i][0].id);
          profile.reminder.daysLeft = data['reminders'][i][1];
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
        profile.reminder.lastContact = new Date();
    });
  }

  evaluateDate(date: Date): boolean {
    // @TODO evaluate so empty if in future but checked if today (contacted already)
    return false;
  }

  ngOnInit() {
    this.getReminders();
  }

}
