import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../../services/heroes.services';
import { Router } from '@angular/router';
import { HeroeComponent } from '../../heroe/heroe.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  heroesBusqueda: Heroe[];

  constructor(private _heroesService: HeroesService,
    private router: Router) {

  }
  buscarHeroe(termino: string) {

    // this.heroesBusqueda = this._heroesService.buscarHeroes(termino);
    // this.router.navigate(['search', [termino] ]);
    this.router.navigate(['search', termino ]);
  }

}
