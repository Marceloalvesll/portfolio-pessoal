import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router'; 
import { Header } from './componentes/header/header';
import { Footer } from './componentes/footer/footer'; // 1. Importar

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, Header, Footer], // 2. Adicionar
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'portfolio-pessoal';
}