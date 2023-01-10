import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = 'Caroline';
  dataNascimento = "1995-05-28";
  contatoTelefone = "(11)95958-0959"
  urlImagem = "/assets/20221004_200816.jpg";

  mostrarContato(){
    alert(`O contato via WhatsApp é: ${this.contatoTelefone}`)
  }
}
