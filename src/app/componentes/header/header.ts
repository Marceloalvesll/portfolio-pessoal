import { Component } from '@angular/core';
// 1. Importar o RouterLink para que o componente o conheça
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  // 2. Adicionar o RouterLink à lista de imports do componente
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}