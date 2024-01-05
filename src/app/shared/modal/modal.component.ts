import { Component } from '@angular/core';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { NgFor } from '@angular/common';
import { ContadorService } from '../../services/contador.service';

type CategoriaNome = 'Adultos' | 'Crianças' | 'Bebês';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatChipsModule, NgFor],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  categorias = this.contadorService.getCategorias();
  contadores = this.contadorService.getContadores();

  constructor(
    private contadorService: ContadorService,
    public dialog: MatDialog
  ) {}

  openDialog() {
    this.dialog.open(ModalComponent);
  }

  alterarContador(categoria: CategoriaNome, operacao: 'aumentar' | 'diminuir') {
    this.contadorService.alterarContador(categoria, operacao);
  }
}
