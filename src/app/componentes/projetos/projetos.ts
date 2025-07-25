import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

declare var ScrollReveal: any;

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './projetos.html',
  styleUrl: './projetos.css'
})
export class Projetos implements AfterViewInit {
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
      sr.reveal('.projeto-card', { origin: 'bottom', interval: 200 });
    }
  }
}