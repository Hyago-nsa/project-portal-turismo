import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../container/container.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ContainerComponent, CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';
}
