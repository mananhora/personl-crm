import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
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
    // 'https://pbs.twimg.com/profile_images/684222363907551232/54R_VAhv_400x400.jpg',
    // [new Circle('circle a', 12345)],
    // '+15555551234',
    // 'los angeles, ca',
    // '3 months',
    // ['lorem ipsum dolor set amet', 'nunc varius facilisis eros'],
  );

  constructor(private profileService: ProfileService) { }

  getMyProfile() {
    this.profileService.getMyProfile()
      .subscribe(data => {
        this.model.name = data['name'];
        this.model.email = data['email'];
        this.model.id = data['id'];
    })
  }

  ngOnInit() {
    // console.log(this.model);
    this.getMyProfile();
  }

}
