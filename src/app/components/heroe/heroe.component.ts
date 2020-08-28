import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.services';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {


  heroe: any = {};

  constructor(  private activatedRoute: ActivatedRoute,
                private _heroesService: HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = _heroesService.getHeroe(params.id);
      console.log( this.heroe );
    })
    
  }

}
