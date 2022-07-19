import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent{

    //i18nSelect
  nombre:string="FRAN";
  genero:string='hombre';

  invitacionMapa={
    'hombre':'invitarlo',
    'mujer':'invitarla'
  }


  //i18nPlural

  clientes:string[]=['PEDRO','MARIA','AAA','FJAWFAWF','FAWFAWAWA','FAWFAF','FAWFAWF'];

  clientesMapa={
    '=0':'no tenemos ningún cliente esperando',
    '=1':'tenemos un cliente esperando',
    'other':'tenemos # clientes esperando'
  }

  cambiarCliente(){
    if(this.nombre==='FRAN'){
      this.nombre='MARIA';
      this.genero='mujer';
    }
    else{
      this.nombre='FRAN';
      this.genero='hombre';
    }
  }
  borrarCliente(){
    this.clientes.pop();
  }



  constructor() { }

  //KeyValue Pipe
  persona={
    nombre:'fran',
    edad:35,
    direccion:'Ottawa, Canada'
  }

  //JSON PIPE

  heroes=[
    {
      nombre:'superman',
      vuela:true
    },
    {
      nombre:'Robin',
      vuela:false
    },
    {
      nombre:'Aquaman',
      vuela:false
    }
  ]

  // ASYNC PIPE

  miObservable=interval(1000); // 0,1,2,3

  valorPromesa=new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });




}
