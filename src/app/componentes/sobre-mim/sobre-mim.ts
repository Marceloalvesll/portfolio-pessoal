import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// Avisamos ao TypeScript que AMBAS as variáveis globais existem
declare var Typed: any;
declare var ScrollReveal: any;

@Component({
  selector: 'app-sobre-mim',
  standalone: true,
  imports: [],
  templateUrl: './sobre-mim.html',
  styleUrl: './sobre-mim.css'
})
export class SobreMim implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // --- Animação Typed.js ---
      const typedOptions = {
        strings: ['Desenvolvedor de Software', 'Analista de Dados', 'Entusiasta de IA'],
        typeSpeed: 100,
        backSpeed: 60,
        backDelay: 1000,
        loop: true
      };
      new Typed('.multiple-text', typedOptions);

      // --- Animação ScrollReveal ---
      const sr = ScrollReveal({
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
      });

      sr.reveal('.home-content, h1', { origin: 'top' });
      sr.reveal('.home-img, .btn, .social-media', { origin: 'bottom' });
      sr.reveal('.home-content h3:nth-of-type(1)', { origin: 'left' });
    }
  }
}