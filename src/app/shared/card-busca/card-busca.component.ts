import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-busca',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card-busca.component.html',
  styleUrl: './card-busca.component.css',
})
export class CardBuscaComponent {}
