import { Component } from "@angular/core";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
})
export class CarouselComponent {
  public slides: { title: string; image: string }[] = [
    { title: "Slide 1", image: "https://picsum.photos/seed/picsum/900/500" },
    { title: "Slide 2", image: "https://picsum.photos/seed/picsum/900/500" },
    { title: "Slide 3", image: "https://picsum.photos/seed/picsum/900/500" },
  ];
}
