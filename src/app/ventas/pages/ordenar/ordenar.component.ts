import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
})
export class OrdenarComponent implements OnInit {
  mayus:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  changeMayus():void{
    this.mayus=!this.mayus;
  }

}
