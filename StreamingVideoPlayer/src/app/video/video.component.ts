import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';
import { Hls } from 'hls.js'

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  video: Video;
  videos: Video[];

  constructor(private VideoService: VideoService, ) {
    this.videos = []
   }


  ngOnInit() {  
    this.videos.push(this.VideoService.attachVideo());
      let hls = new Hls();

      hls.attachMedia(this.videos[0].video);
      hls.on(Hls.Events.MEDIA_ATTACHED, function () {
        console.log("video and hls.js are now bound together !");
        hls.loadSource("https://video-dev.github.io/streams/x36xhzz/x36xhzz.m3u8");
        hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
          console.log("manifest loaded, found " + data.levels.length + " quality level");
        });
      });

  }

  togglePlaying(): void {
    if(this.videos[0].video.paused){
      this.videos[0].video.play();
      this.videos[0].playButtonIcon.setAttribute('src', './assets/pause.svg')
    } else {
      this.videos[0].video.pause();
      this.videos[0].playButtonIcon.setAttribute('src', './assets/play-sign.svg')
    }
  }

}
