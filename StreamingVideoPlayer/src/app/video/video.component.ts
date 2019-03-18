import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service'

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  video: Video;
  videos: Video[];

  constructor(private VideoService: VideoService ) {
    this.videos = []
   }


  ngOnInit() {  
    this.videos.push(this.VideoService.attachVideo());
  }

  

}
