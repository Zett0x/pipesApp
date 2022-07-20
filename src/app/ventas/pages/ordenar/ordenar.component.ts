import { Component, OnInit } from '@angular/core';

import { COLOR, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
})
export class OrdenarComponent implements OnInit {
  mayus:boolean=true;

  heroes:Heroe[]=[
  { nombre:'Iron Man',
    vuela:true,
    color:COLOR.ROJO
  },
  {
    nombre:'Super Man',
    vuela:true,
    color:COLOR.AZUL
  },
  {
    nombre:'Batman',
    vuela:false,
    color:COLOR.NEGRO
  },
  {
    nombre:'Daredevil',
    vuela:false,
    color:COLOR.ROJO
  },
  {
    nombre:'Linterna Verde',
    vuela:true,
    color:COLOR.VERDE
  },

];
  constructor() { }

  ngOnInit(): void {
  }

  changeMayus():void{
    this.mayus=!this.mayus;
  }


}
