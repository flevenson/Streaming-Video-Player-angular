export class Video {

  constructor(
    public video: HTMLVideoElement,
    public vidCurrentTime: HTMLParagraphElement,
    public vidProgress: HTMLParagraphElement,
    public seekBar: HTMLDivElement,
    public vidDuration: HTMLDivElement,
    public playButton: HTMLButtonElement,
    public playButtonIcon: HTMLImageElement,
    public draggableCircle: HTMLImageElement,
    public isDragging: boolean) {
      this.video = video;
      this.vidCurrentTime = vidCurrentTime;
      this.vidProgress = vidProgress;
      this.seekBar = seekBar;
      this.vidDuration = vidDuration;
      this.playButton = playButton;
      this.playButtonIcon = playButtonIcon;
      this.draggableCircle = draggableCircle;
      this.isDragging = isDragging;
  }

}