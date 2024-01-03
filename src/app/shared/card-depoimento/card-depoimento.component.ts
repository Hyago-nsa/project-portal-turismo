import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card-depoimento',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card-depoimento.component.html',
  styleUrl: './card-depoimento.component.css',
})
export class CardDepoimentoComponent {}
