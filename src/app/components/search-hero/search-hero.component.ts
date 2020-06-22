import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from "../../service/heroes.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html'
})
export class SearchHeroComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor(private _router: Router, private _heroesService: HeroesService, private _activeRouter: ActivatedRoute) { }
  ngOnInit(): void {
    this._activeRouter.params.subscribe(params => {
      this.termino = params['heroe'];
      this.heroes = this._heroesService.searchHeroes(params['heroe']);
    })

  }

  getHeroe(index: number) {
    this._router.navigate(['/heroe', index]);
  }

}
