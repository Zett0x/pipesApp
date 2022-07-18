import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  private nombre:string='francisco iborra';
  private valor:number=123564564123;
  obj ={nombre:'federico',age:12};

  getNombre():string{
    return this.nombre;
  }
  getValor():number{
    return this.valor;
  }

  mostrarNombre(){
    console.log(this.nombre);
  }
}
