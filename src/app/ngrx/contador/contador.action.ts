import { createAction, props } from '@ngrx/store';

type CategoriaNome = 'Adultos' | 'Crianças' | 'Bebês';

export const aumentar = createAction(
  '[Contador] Aumentar',
  props<{ categoria: CategoriaNome }>()
);
export const diminuir = createAction(
  '[Contador] Diminuir',
  props<{ categoria: CategoriaNome }>()
);
