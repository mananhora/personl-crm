import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { NodesComponent } from './nodes/nodes.component';
import { ProfileComponent } from './profile/profile.component';


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
  providers: [],
  bootstrap: [
    AppComponent,
    NodesComponent,
    ProfileComponent
  ]
})
export class AppModule { }
