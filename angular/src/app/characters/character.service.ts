import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable({
        providedIn: 'root'
}) // To be a singleton. Multiples instancias en el provider y eso no es buena práctica.
export class CharacterService {
    private _characters = new BehaviorSubject<any>([]); // Para data que no cambia mucho
    constructor(private hhtp: HttpClient) {}

   /* getCharacters(): Observable<any> {
        return this.hhtp.get('/api/characters.json')
                .pipe(mergeMap( (data: any) => {
                    this._characters.next(data);

                    return of(data);
                }));
    }

    getCharacter(id: number): any {
        return this._characters.value.find( c => c.id === id);
    }*/

    getCharacters(): Observable<any> {
        return this.hhtp.get('/api/characters.json');
    }

    //merge de eventos antes del subscribe

    getCharacter(id: number): any {
        return this.getCharacters().pipe(
            mergeMap(data =>  {
                return of(data.find( c => c.id === id));
            })
        );
    }
}
