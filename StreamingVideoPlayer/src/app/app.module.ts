import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { VideoOptionsComponent } from './video-options/video-options.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    VideoOptionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
