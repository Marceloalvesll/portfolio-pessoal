import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare var ScrollReveal: any;

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [],
  templateUrl: './habilidades.html',
  styleUrl: './habilidades.css'
})
export class Habilidades implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const sr = ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
      });

      sr.reveal('h2', { origin: 'top' });
      // O 'interval: 200' faz com que cada card apareça 200ms depois do anterior
      sr.reveal('.categoria', { origin: 'bottom', interval: 200 });
    }
  }
}