import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// Avisa o TypeScript que a variável "Typed" existe globalmente
declare var Typed: any;

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
      const options = {
        strings: ['Desenvolvedor de Software', 'Analista de Dados', 'Entusiasta de IA'],
        typeSpeed: 100,
        backSpeed: 60,
        backDelay: 1000,
        loop: true
      };
      // O "new Typed" agora usa a variável global
      new Typed('.multiple-text', options);
    }
  }
}