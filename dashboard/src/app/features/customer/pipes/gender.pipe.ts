import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case "M":
        return "Masculino"
      case "F":
        return "Feminino"
      default:
        return "Desconhecido"
    }
  }

}
