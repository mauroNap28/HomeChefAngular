import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatCardModule } from '@angular/material/card'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MatInputModule } from '@angular/material/input'; 
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { MatSliderModule } from '@angular/material/slider';
import { ProvaComponent } from './prova/prova.component';
import { HighlightDirective } from './direttive/highlight.directive';
import { AutenticazioneComponent } from './autenticazione/autenticazione.component';
import { HomeComponent } from './home/home.component'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './servizi/UserService';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import { AuthenticationService } from './servizi/AuthenticationService';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { MatIconModule } from '@angular/material/icon'; 

@NgModule({
  declarations: [
    AppComponent,
    ProvaComponent,
    HighlightDirective,
    AutenticazioneComponent,
    HomeComponent,
    RegistrazioneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatSliderModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatIconModule
  ],
  providers: [
    UserService,
    AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
