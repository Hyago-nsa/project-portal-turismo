import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { contadorReducer } from './ngrx/contador/contador.reducer';

@NgModule({
  imports: [StoreModule.forRoot({ contadores: contadorReducer })],
})
export class AppModule {}
