import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.scss']
})
export class CharactersDetailComponent implements OnInit {
  title = 'Character detail';
  character: any;

  // See params in url
  constructor(private route: ActivatedRoute,
              private router: Router,
              private characterService: CharacterService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id'); // el + convierte string a número, es js
    this.title += ': ' + id;
    this.character = this.characterService.getCharacter(id)
    .subscribe(data => {
      this.character = data;
    });
  }

  onBack(): void {
    this.router.navigate(['/characters']);
  }
}
