import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private currentIndex: number = 0;
  public images: { title: string; url: string }[] = [
    {
      title: 'Saikyou no Ousama, Nidome no Jinsei wa Nani wo Suru?',
      url: 'slider/1.png',
    },
    {
      title: 'Saikyou no Ousama, Nidome no Jinsei wa Nani wo Suru?',
      url: 'slider/2.jpg',
    },
    {
      title: 'Saikyou no Ousama, Nidome no Jinsei wa Nani wo Suru?',
      url: 'slider/3.png',
    },
    {
      title: 'Saikyou no Ousama, Nidome no Jinsei wa Nani wo Suru?',
      url: 'slider/4.png',
    },
    {
      title: 'Saikyou no Ousama, Nidome no Jinsei wa Nani wo Suru?',
      url: 'slider/5.jpg',
    },
  ];
  public nextImage(): void {
    if (this.currentIndex + 1 < this.images.length) {
      this.currentIndex++;
      this.updatePosition();
    }
  }

  public beforeImage(): void {
    if (this.currentIndex >= 1) {
      this.currentIndex--;
      this.updatePosition();
    }
  }
  private updatePosition(): void {
    const element = document.getElementById('slider') as HTMLDivElement;
    element.style.transform = `translateX(-${this.currentIndex * 100}%)`;
  }
}
