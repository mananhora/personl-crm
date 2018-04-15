import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CirclesComponent } from './circles/circles.component';
import { CirclesAddComponent } from './circles/add/circles.add.component';
import { FriendsComponent } from './friends/friends.component';
import { FriendsAddComponent } from './friends/add/friends.add.component';
import { ProfileComponent } from './profile/profile.component';
import { DialogOverviewExampleDialog } from './profile/profile.component';
import { ProfileEditComponent } from './profile/edit/profile.edit.component';

import { AppService } from './app.service';
import { CirclesService } from './circles/circles.service';
import { FriendsService } from './friends/friends.service';
import { ProfileService } from './profile/profile.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/app/home', pathMatch: 'full' },
  { path: 'app/home', component: CirclesComponent },
  { path: 'app/home/add', component: CirclesAddComponent },
  { path: 'app/friends', component: FriendsComponent },
  { path: 'app/friends/add', component: FriendsAddComponent },
  { path: 'app/profile', component: ProfileComponent },
  { path: 'app/profile/:id', component: ProfileComponent },
  { path: 'app/profile/:id/edit', component: ProfileEditComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CirclesComponent,
    CirclesAddComponent,
    FriendsComponent,
    FriendsAddComponent,
    ProfileComponent,
    DialogOverviewExampleDialog,
    ProfileEditComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  entryComponents: [
    DialogOverviewExampleDialog
  ],
  providers: [
    AppService,
    CirclesService,
    FriendsService,
    ProfileService,
  ],
  bootstrap: [
    AppComponent,
    CirclesComponent,
    CirclesAddComponent,
    FriendsComponent,
    FriendsAddComponent,
    ProfileComponent,
    ProfileEditComponent
  ]
})
export class AppModule { }
