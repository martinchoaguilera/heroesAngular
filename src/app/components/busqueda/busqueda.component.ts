import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.services';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent implements OnInit {
  
  heroes: Heroe[]= [];
  nada: string;
  termino:string;
  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService) { 
  }

  ngOnInit() {

    this.activatedRoute.params.subscribe( params => {
      this.termino= params[ 'termino' ];
      this.heroes = this._heroesService.buscarHeroes( this.termino );
      console.log( this.heroes );
    })
  }
}
