import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name:'vuelaPipe'
})
export class VuelaPipe implements PipeTransform{


  transform(vuela:boolean):string {

    return (vuela)? 'Sí':'No';
  }



}
