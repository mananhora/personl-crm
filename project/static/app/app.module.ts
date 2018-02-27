import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { NodesComponent } from './nodes/nodes.component';
import { ProfileComponent } from './profile/profile.component';

import { AppService } from './app.service';


@NgModule({
  declarations: [
    AppComponent,
    NodesComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
  ],
  providers: [
    AppService
  ],
  bootstrap: [
    AppComponent,
    NodesComponent,
    ProfileComponent
  ]
})
export class AppModule { }
