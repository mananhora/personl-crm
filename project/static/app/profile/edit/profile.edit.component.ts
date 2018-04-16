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
  model = new Profile('', '', 555,);

  constructor(private profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router) { }

  getProfile() {
    this.routeId = +this.route.snapshot.paramMap.get('id');
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
    console.log('yo: yay edit !!!');
    this.profileService.updateProfile(
      this.model.id,
      this.model.location,
      ['hello', 'notes'],
      this.model.phone,
      this.model.job
    ).subscribe(data => {
      console.log('yo: ', data);
    });
    this.router.navigate(['/app/profile/', this.routeId]);
  }

  deleteProfile() {
    console.log('deleted');
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
