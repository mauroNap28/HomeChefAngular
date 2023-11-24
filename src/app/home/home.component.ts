import { Component, OnInit } from '@angular/core';
import { UserService } from '../servizi/UserService';
import { UserResponse } from '../classi/UserResponse';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  public listaUtenti: UserResponse[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {

    this.userService.getListaUtenti()
    .subscribe((data: UserResponse[]) => this.listaUtenti = data);
  }
}
