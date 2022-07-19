import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/products.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
})
export class OrdenarComponent implements OnInit {
  mayus:boolean=true;
  products:Product[]=[{code:1,name:'pc',category:'technology',quantity:4}];
  constructor() { }

  ngOnInit(): void {
  }

  changeMayus():void{
    this.mayus=!this.mayus;
  }

}
