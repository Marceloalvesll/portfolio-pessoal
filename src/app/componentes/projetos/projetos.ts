import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './projetos.html',
  styleUrl: './projetos.css'
})
export class Projetos {

}