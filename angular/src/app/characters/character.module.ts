import { NgModule } from '@angular/core';
import { CharacterListComponent } from './characters-list/character-list.component';
import { CharactersDetailComponent } from './characters-detail/characters-detail.component';
import { RouterModule } from '@angular/router';
import { CharacterDetailGuard } from './character-detail.guard';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CharacterListComponent,
    CharactersDetailComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'characters', component: CharacterListComponent },
      {
        path: 'characters/:id',
        canActivate: [CharacterDetailGuard], // Convention se mantiene este orden
        component: CharactersDetailComponent }, // :id parametro con nombre id
      ]),
    SharedModule
    ]
})
export class CharacterModule { }
