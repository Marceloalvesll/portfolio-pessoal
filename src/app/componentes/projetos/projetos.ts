import { Component } from '@angular/core';
// 1. Importar o módulo do botão do Angular Material
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-projetos',
  standalone: true,
  // 2. Adicionar o MatButtonModule à lista de imports do componente
  imports: [MatButtonModule],
  templateUrl: './projetos.html',
  styleUrl: './projetos.css'
})
export class Projetos {

}