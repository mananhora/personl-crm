import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  model = {
    name: 'first last',
    location: 'university of rochester',
    img: 'https://pbs.twimg.com/profile_images/684222363907551232/54R_VAhv_400x400.jpg',
    circles: ['circle a', 'circle b', 'third circle name'],
    email: 'name@name.com',
    phone: '+15555551234',
  };

  constructor() { }

  ngOnInit() { }

}
