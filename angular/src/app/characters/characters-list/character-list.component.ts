import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
    selector: 'app-characters',
    templateUrl: './character-list.component.html',
    styleUrls: ['./character-list.component.scss']
})

// export para ser usado en otros lados.
export class CharacterListComponent implements OnInit {
    title = 'Character List';
    imageWidth = '50';
    imageMargin = '2';
    color = 'red';
    showImage = false;
    filteredCharacters: any[];
    characters: any[] = [];
    strengthMapping:
      {[k: string]: string} = {'=0': 'No points', '=1': '# point', other: '# points'};

    private _listFilter: string; // Can be call from html. Convention: _

    constructor(private characterService: CharacterService) {} // Antes del oninit

    ngOnInit(): void { // Antes de que datos se rendereen. ANgular tiene control sobre este, es mejor práctica, sobre el constructor
        this.characterService.getCharacters()
        .subscribe( (data: any[]) => {
            this.characters = data;
            this.filteredCharacters = this.characters;
         } );
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy: string): any[] {
        filterBy = filterBy.toLowerCase();

        return this.characters.filter( (c: any) => {
            return c.name.toLowerCase().includes(filterBy);
        });
    }

    onBarClicked(value: string): void {
        console.log(value);
        this.title = 'Characters List: ' + value;
    }

    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredCharacters = this.listFilter ? this.performFilter(this.listFilter) : this.characters;
    }
}
