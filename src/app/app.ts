// ... outros imports
import { SobreMim } from './componentes/sobre-mim/sobre-mim';
import { Experiencia } from './componentes/experiencia/experiencia';
import { Habilidades } from './componentes/habilidades/habilidades';
import { Projetos } from './componentes/projetos/projetos';
import { Header } from './componentes/header/header';
import { Footer } from './componentes/footer/footer';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  // A lista de imports agora contém todos os nossos componentes de secção
  imports: [Header, Footer, SobreMim, Experiencia, Habilidades, Projetos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'portfolio-pessoal';
}