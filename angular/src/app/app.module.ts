import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CharacterModule } from './characters/character.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, // Para correr en  browsers
    RouterModule.forRoot([ // Rutas de aplicación
      { path: 'home', component: HomeComponent },
      // Dejarlas siempre al final. Que haga match con toda la ruta. Puede ser que venga parcial.
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }, // Pagina de error no hace match con ninguno

    ]),
    CharacterModule,
  ],
  providers: [],
  bootstrap: [AppComponent] // El que va a correr en html
})
export class AppModule { }
