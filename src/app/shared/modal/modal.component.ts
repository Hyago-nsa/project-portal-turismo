import { Component } from '@angular/core';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { NgFor } from '@angular/common';

type CategoriaNome = 'Adultos' | 'Crianças' | 'Bebês';

interface Categoria {
  nome: CategoriaNome;
  descricao: string;
}

interface Contadores {
  Adultos: number;
  Crianças: number;
  Bebês: number;
}

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatChipsModule, NgFor],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  constructor(public dialog: MatDialog) {}

  contadores: Contadores = {
    Adultos: 0,
    Crianças: 0,
    Bebês: 0,
  };

  categorias: Categoria[] = [
    { nome: 'Adultos', descricao: 'Acima de 12 anos' },
    { nome: 'Crianças', descricao: 'De 2 anos até 12 anos' },
    { nome: 'Bebês', descricao: 'Até 2 anos' },
  ];

  openDialog() {
    this.dialog.open(ModalComponent);
  }

  alterarContador(categoria: CategoriaNome, operacao: 'aumentar' | 'diminuir') {
    if (operacao === 'aumentar') {
      this.contadores[categoria]++;
    } else if (operacao === 'diminuir' && this.contadores[categoria] > 0) {
      this.contadores[categoria]--;
    }
  }
}
