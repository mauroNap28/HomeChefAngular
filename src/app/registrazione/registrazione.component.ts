import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrazioneRequest } from '../classi/RegistrazioneRequest';
import { AuthenticationService } from '../servizi/AuthenticationService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css'],
})
export class RegistrazioneComponent {
  hide = true
  registrazioneForm: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
  });
  registrazioneRequest: RegistrazioneRequest = {
    username: '',
    password: '',
    role: 1
  };
  erroreRegistrazione: boolean = false;
  avvenutaRegistrazione: boolean = false;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  registrazione() {
    this.authenticationService
    .registrazione(this.registrazioneForm.value)
    .subscribe(() => {
      this.avvenutaRegistrazione = true
    },
    (error) => {
      console.error('Errore durante il login:', error);
      this.erroreRegistrazione = true;
    })
  }
}
