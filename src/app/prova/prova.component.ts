import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent {
  @Input() data: any
  @Output() mandaDatiEvento = new EventEmitter<string>()
  title = 'HomeChef';
  coloreEvidenziatore = 'orange'
  numero = 7.333333333333333
  persone = [
    {nome: 'mauro', isOnline:true},
    {nome: 'carmine', isOnline:true},
    {nome: 'michelino', isOnline:false}
  ]

  mandaDati(){
    this.mandaDatiEvento.emit(this.data[0].nome)
  }
  onRiceviDati(evento: string){
    console.log(evento)
  }
  cambiaColoreEvidenziatore(coloreEvidenziatore: string){
    this.coloreEvidenziatore = coloreEvidenziatore
  }
}