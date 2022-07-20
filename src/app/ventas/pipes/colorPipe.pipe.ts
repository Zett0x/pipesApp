import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'colorPipe'
})
export class ColorPipe implements PipeTransform{


  transform(color:number):string {
    let c:string='';

    switch (color) {
      case 0:
        c='ROJO';
        break;

      case 1:
        c='NEGRO';
      break;
      case 2:
        c='AZUL';
      break;

      case 3:
        c='VERDE';
      break;


    }

    return c;
  }



}
