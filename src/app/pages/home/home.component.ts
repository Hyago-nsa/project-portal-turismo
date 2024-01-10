import { Component, OnInit } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner.component';
import { ContainerComponent } from '../../shared/container/container.component';
import { CardBuscaComponent } from '../../shared/card-busca/card-busca.component';
import { CardDepoimentoComponent } from '../../shared/card-depoimento/card-depoimento.component';
import { FormBuscaComponent } from '../../shared/form-busca/form-busca.component';
import { PromocaoService } from '../../core/services/promocao.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    ContainerComponent,
    CardBuscaComponent,
    CardDepoimentoComponent,
    FormBuscaComponent,
    HttpClientModule,
  ],
  providers: [PromocaoService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private servicoPromocao: PromocaoService) {}
  ngOnInit(): void {
    this.servicoPromocao.listar();
  }
}
