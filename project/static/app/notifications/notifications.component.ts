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

  notifications: string[];

  constructor(private notificationsService: NotificationsService,
    private route: ActivatedRoute, private location: Location) { }

  getReminders() {
    this.notificationsService.getReminders()
      .subscribe(data => {
        console.log(data);
    });
  }

  setLastContact(date: number, id: number) {
    this.notificationsService.setLastContact(date, id)
      .subscribe(data => {
        console.log(data);
    });
  }

  setReminder(frequency: number, id: number) {
    this.notificationsService.setReminder(frequency, id)
      .subscribe(data => {
        console.log(data);
    });
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
    this.getReminders();
    this.setReminder(4, 11);
    this.getReminders();
  }

}
