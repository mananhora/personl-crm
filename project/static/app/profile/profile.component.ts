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
    this.getMyProfile();
  }

}
