import { Component } from '@angular/core';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { AsyncPipe, NgFor } from '@angular/common';
import { Store } from '@ngrx/store';
import { aumentar, diminuir } from '../../ngrx/contador/contador.action';

type CategoriaNome = 'Adultos' | 'Crianças' | 'Bebês';

interface Categoria {
  nome: CategoriaNome;
  descricao: string;
}

interface EstadoContador {
  Adultos: number;
  Crianças: number;
  Bebês: number;
}

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatChipsModule, NgFor, AsyncPipe],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  openDialog() {
    this.dialog.open(ModalComponent);
  }
  constructor(
    public dialog: MatDialog,
    private store: Store<{ contadores: EstadoContador }>
  ) {}

  categorias: Categoria[] = [
    { nome: 'Adultos', descricao: 'Acima de 12 anos' },
    { nome: 'Crianças', descricao: 'De 2 anos até 12 anos' },
    { nome: 'Bebês', descricao: 'Até 2 anos' },
  ];

  contadores$ = this.store.select('contadores');

  alterarContador(categoria: CategoriaNome, operacao: 'aumentar' | 'diminuir') {
    if (operacao === 'aumentar') {
      this.store.dispatch(aumentar({ categoria }));
      console.log('aumentar');
    } else {
      this.store.dispatch(diminuir({ categoria }));
      console.log('diminuir');
    }
  }
}
