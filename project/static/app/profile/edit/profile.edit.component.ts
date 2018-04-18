import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';
import { Profile } from '../profile';
import { Circle } from '../../circles/circle';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile.edit.component.html',
  styleUrls: ['./profile.edit.component.css']
})
export class ProfileEditComponent implements OnInit {

  routeId: number;
  model = new Profile('', '', 555);

  constructor(private profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router) { }

  getProfile() {
    this.routeId = +this.route.snapshot.paramMap.get('id');
  }

  getMyProfile() {
    this.profileService.getMyProfile()
      .subscribe(data => {
        if (data['name']) this.model.name = data['name'];
        if (data['email']) this.model.email = data['email'];
        if (data['id']) this.model.id = data['id'];
        (data['img']) ? this.model.img = data['img'] :
          this.model.img = 'assets/images/profile.png';
        if (data['circles']) this.model.circles = data['circles'];
        if (data['phone_number']) this.model.phone = data['phone_number'];
        if (data['location']) this.model.location = data['location'];
        if (data['notes']) this.model.notes = data['notes'];
        if (data['job']) this.model.job = data['job'];
    })
  }

  getFriendProfile(id: number) {
    this.profileService.getFriendProfile(id)
      .subscribe(data => {
        if (data['name']) this.model.name = data['name'];
        if (data['email']) this.model.email = data['email'];
        if (data['id']) this.model.id = data['id'];
        (data['img']) ? this.model.img = data['img'] :
          this.model.img = 'assets/images/profile.png';
        if (data['circles']) this.model.circles = data['circles'];
        if (data['phone_number']) this.model.phone = data['phone_number'];
        if (data['location']) this.model.location = data['location'];
        if (data['notes']) this.model.notes = data['notes'];
        if (data['job']) this.model.job = data['job'];
      })
  }

  /**
   * @function updateProfile
   * @param {number} id - ID of profile being edited
   * @param {string} [location=''] - new location value
   * @param {string[]} [notes=[]] - new notes value
   * @param {string} [phone=''] - new phone value
   * @param {string} [job=''] - new job value
   */
  editProfile() {
    if (!this.model.location) {
      this.model.location = '';
    }
    if (!this.model.phone) {
      this.model.phone = '';
    }
    if (!this.model.job) {
      this.model.job = '';
    }
    if (!this.model.notes) {
      this.model.notes = [];
    }
    this.profileService.updateProfile(
      this.model.id,
      this.model.location,
      this.model.notes,
      this.model.phone,
      this.model.job
    ).subscribe();
    this.router.navigate(['/app/profile/', this.routeId]);
  }

  deleteProfile() {
    alert('deleted');
  }

  ngOnInit() {
    this.getProfile();

    if (this.routeId == 0) {
      this.getMyProfile();
    } else {
      this.getFriendProfile(this.routeId);
    }
  }

}
