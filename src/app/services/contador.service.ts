import { Injectable } from '@angular/core';

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

@Injectable({
  providedIn: 'root',
})
export class ContadorService {
  private contadores: Contadores = {
    Adultos: 0,
    Crianças: 0,
    Bebês: 0,
  };

  private categorias: Categoria[] = [
    { nome: 'Adultos', descricao: '(Acima de 12 anos)' },
    { nome: 'Crianças', descricao: '(De 2 anos até 12 anos)' },
    { nome: 'Bebês', descricao: '(Até 2 anos)' },
  ];

  getContadores() {
    return this.contadores;
  }

  getCategorias() {
    return this.categorias;
  }

  alterarContador(categoria: CategoriaNome, operacao: 'aumentar' | 'diminuir') {
    if (operacao === 'aumentar') {
      this.contadores[categoria]++;
    } else if (operacao === 'diminuir' && this.contadores[categoria] > 0) {
      this.contadores[categoria]--;
    }
  }
}
