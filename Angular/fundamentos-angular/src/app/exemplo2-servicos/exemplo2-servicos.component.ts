import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplo2-servicos',
  templateUrl: './exemplo2-servicos.component.html',
  styleUrls: ['./exemplo2-servicos.component.css']
})
export class Exemplo2ServicosComponent {

  descricao = "";

  constructor(public logger: LoggerService){}

  adicionarProduto(){
    this.logger.logar(`A descrição do produto ${this.descricao} foi adicionada.`)
    }
}
