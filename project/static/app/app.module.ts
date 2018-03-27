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
import { ProfileComponent } from './profile/profile.component';
import { ProfileEditComponent } from './profile/edit/profile.edit.component';

import { AppService } from './app.service';
import { LoginService } from './login/login.service';
import { RegisterService } from './register/register.service';
import { CirclesService } from './circles/circles.service';
import { ProfileService } from './profile/profile.service';

const appRoutes: Routes = [
  { path: 'app/login', component: LoginComponent },
  { path: 'app/register', component: RegisterComponent },
  { path: 'app/home', component: CirclesComponent },
  { path: 'app/home/add', component: CirclesAddComponent },
  { path: 'app/profile', component: ProfileComponent },
  { path: 'app/profile/edit', component: ProfileEditComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CirclesComponent,
    CirclesAddComponent,
    ProfileComponent,
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
  providers: [
    AppService,
    LoginService,
    RegisterService,
    CirclesService,
    ProfileService,
  ],
  bootstrap: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CirclesComponent,
    CirclesAddComponent,
    ProfileComponent,
    ProfileEditComponent
  ]
})
export class AppModule { }
