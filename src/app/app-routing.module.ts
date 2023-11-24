import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AutenticazioneComponent } from './autenticazione/autenticazione.component';
import { ProvaComponent } from './prova/prova.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'autenticazione', component: AutenticazioneComponent },
  { path: 'prova', component: ProvaComponent },
  { path: 'registrazione', component: RegistrazioneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
