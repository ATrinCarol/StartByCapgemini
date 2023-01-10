import { Component } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {
 celulares: Celular[] = [
  {id: 1, nome: "XL", descricao: "Grande", esgotado: false},
  {id: 2, nome: "Normal", esgotado: false},
  {id: 3, nome: "Mini", descricao: "Pequeno", esgotado: true}
 ]
}
