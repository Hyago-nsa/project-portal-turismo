import { createReducer, on } from '@ngrx/store';
import { aumentar, diminuir } from './contador.action';

export interface EstadoContador {
  Adultos: number;
  Crianças: number;
  Bebês: number;
}

export const estadoInicial: EstadoContador = {
  Adultos: 0,
  Crianças: 0,
  Bebês: 0,
};

export const contadorReducer = createReducer(
  estadoInicial,
  on(aumentar, (state, { categoria }) => ({
    ...state,
    [categoria]: state[categoria] + 1,
  })),
  on(diminuir, (state, { categoria }) => ({
    ...state,
    [categoria]: Math.max(state[categoria] - 1, 0),
  }))
);
