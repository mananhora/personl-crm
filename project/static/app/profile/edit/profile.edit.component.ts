import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '../profile.service';
import { Profile } from '../profile';
import { Circle } from '../../circles/circle';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile.edit.component.html',
  styleUrls: ['./profile.edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  id: number;
  model = new Profile('', '', 555,);

  constructor(private profileService: ProfileService,
    private route: ActivatedRoute, ) { }

  getProfile() {
    this.id = +this.route.snapshot.paramMap.get('id');
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

  editProfile() {
    console.log('edited');
  }

  ngOnInit() {
    this.getProfile();

    if (this.id > 0) {
      this.getFriendProfile(this.id);
    } else {
      this.getMyProfile();
    }
  }

}
