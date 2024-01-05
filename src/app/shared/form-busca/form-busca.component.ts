import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from '../card/card.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { ContadorService } from '../../services/contador.service';

@Component({
  selector: 'app-form-busca',
  standalone: true,
  imports: [
    CardComponent,
    MatButtonToggleModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './form-busca.component.html',
  styleUrl: './form-busca.component.css',
})
export class FormBuscaComponent {

  constructor(
    private contadorService: ContadorService,
    public dialog: MatDialog
  ) {}

  openDialog() {
    this.dialog.open(ModalComponent);
  }

  get formatarContadores(): string {
    const contadores = this.contadorService.getContadores();
    return `Adultos: ${contadores.Adultos}, Crianças: ${contadores.Crianças}, Bebês: ${contadores.Bebês}`;
  }
}
