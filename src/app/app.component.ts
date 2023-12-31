import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  
  title = 'HomeChef';
  coloreEvidenziatore = 'orange'
  numero = 7.333333333333333
  persone = [
    {nome: 'mauro', isOnline:true},
    {nome: 'carmine', isOnline:true},
    {nome: 'michelino', isOnline:false}
  ]

  onRiceviDati(evento: string){
    console.log(evento)
  }
  ngAfterViewInit(): void {
  }
  cambiaColoreEvidenziatore(coloreEvidenziatore: string){
    this.coloreEvidenziatore = coloreEvidenziatore
  }
}
