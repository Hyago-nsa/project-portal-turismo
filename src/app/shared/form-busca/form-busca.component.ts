import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-form-busca',
  standalone: true,
  imports: [CardComponent, MatButtonToggleModule, MatIconModule],
  templateUrl: './form-busca.component.html',
  styleUrl: './form-busca.component.css',
})
export class FormBuscaComponent {}
