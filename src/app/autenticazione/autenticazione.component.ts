import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../servizi/AuthenticationService';
import { LoginRequest } from '../classi/LoginRequest';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-autenticazione',
  templateUrl: './autenticazione.component.html',
  styleUrls: ['./autenticazione.component.css'],
})
export class AutenticazioneComponent implements OnInit {
  hide = true;
  loginForm!: FormGroup;
  token: string = '';
  decodedToken: any;
  erroreLogin: boolean = false;
  loginRequest: LoginRequest = {
    username: '',
    password: '',
    rememberMe: false,
  };

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
      ]),
      rememberMe: new FormControl(false),
    });
  }

  login() {
    this.authenticationService.login(this.loginForm.value).subscribe(
      (data: any) => {
        this.token = data.token;
        this.decodedToken = jwtDecode(data.token);
        this.authenticationService.createUser(
          this.decodedToken.sub,
          data.token,
          this.decodedToken.exp
        );
        localStorage.setItem(
          'user',
          JSON.stringify(this.authenticationService.user)
        );
        this.router.navigateByUrl('/home');
      },
      (error) => {
        console.error('Errore durante il login:', error);
        this.erroreLogin = true;
      }
    );
  }
  
  registrazione() {
    this.router.navigateByUrl('registrazione');
  }

  /*
    controlloEmail(email: string) {
    email = this.email;
    var regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (regex.test(email)) {
      this.emailValid = true;
      this.controlloAttivazioneBottone()
    } else {
      this.emailValid = false;
      this.buttonDisabled = true
    }
  }

  controlloPassword(password: string) {
    password = this.password;
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (regex.test(this.password)) {
      this.passValid = true;
      this.controlloAttivazioneBottone()
    } else {
      this.passValid = false;
      this.buttonDisabled = true
    }
  }
  */
}
