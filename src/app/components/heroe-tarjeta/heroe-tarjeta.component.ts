import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
})
export class HeroeTarjetaComponent implements OnInit {
  
  @Input() heroe: any= {};
  @Input() idx: number;
  constructor( private router: Router) { }

  ngOnInit(): void {
  }
  verHeroe( idx:number ){
    this.router.navigate( ['/heroe',idx] );
}

}
