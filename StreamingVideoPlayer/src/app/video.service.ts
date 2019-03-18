import { Injectable } from '@angular/core';
import { Video } from "./video"


@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor() { }

  attachVideo(): Video {
    let newVideo = new Video(
      document.querySelector('.video-main'),
      document.querySelector('.current-time'),
      document.querySelector('.progress-fg'),
      document.querySelector('.progress-bg'),
      document.querySelector('.duration'),
      document.querySelector('.play-btn'),
      document.querySelector('.play-icon'),
      document.querySelector('.draggable-circle'),
      false
    )
    return newVideo
  }
}
