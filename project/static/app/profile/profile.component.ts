import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { Profile } from './profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  model = {
    img: 'https://pbs.twimg.com/profile_images/684222363907551232/54R_VAhv_400x400.jpg',
    circles: ['circle a', 'circle b', 'third circle name'],
    email: 'name@name.com',
    phone: '+15555551234',
    name: 'first last',
    location: 'los angeles, ca',
    reminder: '3 months',
    notes: ['lorem ipsum dolor set amet', 'nunc varius facilisis eros'],
  };

  constructor(private profileService: ProfileService) { }

  getMyProfile() {
    this.profileService.getMyProfile()
      .subscribe(data => {
        console.log(data['json.list']);
    })
  }

  ngOnInit() {
    this.getMyProfile();
  }

}
