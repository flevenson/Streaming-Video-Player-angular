export class Video {
  video: HTMLVideoElement;
  vidCurrentTime: HTMLParagraphElement;
  vidProgress: HTMLParagraphElement;
  seekBar: HTMLDivElement;
  vidDuration: HTMLDivElement;
  playButton: HTMLButtonElement;
  playButtonIcon: HTMLImageElement;
  draggableCircle: HTMLImageElement;
  isDragging: boolean
}