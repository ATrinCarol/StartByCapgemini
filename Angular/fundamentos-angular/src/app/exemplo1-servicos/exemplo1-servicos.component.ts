import { Component } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplo1-servicos',
  templateUrl: './exemplo1-servicos.component.html',
  styleUrls: ['./exemplo1-servicos.component.css']
})
export class Exemplo1ServicosComponent {
  nome = "";

  constructor(private logger: LoggerService){}
  

  adicionarNome(){
    this.logger.logar(`O nome ${this.nome} foi adicionado.`)
  }

}
