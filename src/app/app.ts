import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule
// ... outros imports de componentes ...
import { Header } from './componentes/header/header';
import { Footer } from './componentes/footer/footer';
import { SobreMim } from './componentes/sobre-mim/sobre-mim';
import { Experiencia } from './componentes/experiencia/experiencia';
import { Habilidades } from './componentes/habilidades/habilidades';
import { Projetos } from './componentes/projetos/projetos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, // Adicionar CommonModule para usar [class.show]
    Header, 
    Footer, 
    SobreMim, 
    Experiencia, 
    Habilidades, 
    Projetos
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'portfolio-pessoal';
  showScrollButton = false; // 1. Propriedade para controlar a visibilidade

  // 2. Escuta o evento de scroll da janela
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 400) { // Se o scroll for maior que 400px
      this.showScrollButton = true;
    } else {
      this.showScrollButton = false;
    }
  }

  // 3. Método para rolar para o topo
  scrollToTop(event: Event) {
    event.preventDefault(); // Impede o comportamento padrão do link '#'
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Rola suavemente
    });
  }
}