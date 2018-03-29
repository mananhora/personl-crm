import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CirclesComponent } from './circles/circles.component';
import { CirclesAddComponent } from './circles/add/circles.add.component';
import { FriendsComponent } from './circles/friends/friends.component';
import { ProfileComponent } from './profile/profile.component';
import { DialogOverviewExampleDialog } from './profile/profile.component';
import { ProfileEditComponent } from './profile/edit/profile.edit.component';

import { AppService } from './app.service';
import { LoginService } from './login/login.service';
import { RegisterService } from './register/register.service';
import { CirclesService } from './circles/circles.service';
import { FriendsService } from './circles/friends/friends.service';
import { ProfileService } from './profile/profile.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/app/home', pathMatch: 'full' },
  { path: 'app/login', component: LoginComponent },
  { path: 'app/register', component: RegisterComponent },
  { path: 'app/home', component: CirclesComponent },
  { path: 'app/home/add', component: CirclesAddComponent },
  { path: 'app/friends', component: FriendsComponent },
  { path: 'app/profile', component: ProfileComponent },
  { path: 'app/profile/:id', component: ProfileComponent },
  { path: 'app/profile/edit', component: ProfileEditComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CirclesComponent,
    CirclesAddComponent,
    FriendsComponent,
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
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  entryComponents: [
    DialogOverviewExampleDialog
  ],
  providers: [
    AppService,
    LoginService,
    RegisterService,
    CirclesService,
    FriendsService,
    ProfileService,
  ],
  bootstrap: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CirclesComponent,
    CirclesAddComponent,
    FriendsComponent,
    ProfileComponent,
    ProfileEditComponent
  ]
})
export class AppModule { }
