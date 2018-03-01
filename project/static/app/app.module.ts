import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NodesComponent } from './nodes/nodes.component';
import { ProfileComponent } from './profile/profile.component';

import { AppService } from './app.service';
import { LoginService } from './login/login.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NodesComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    AppService,
    LoginService,
  ],
  bootstrap: [
    AppComponent,
    LoginComponent,
    NodesComponent,
    ProfileComponent
  ]
})
export class AppModule { }
