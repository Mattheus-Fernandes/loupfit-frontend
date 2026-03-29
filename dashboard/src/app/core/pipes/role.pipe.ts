import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'role'
})
export class RolePipe implements PipeTransform {

  transform(value: string): string {

    switch(value) {
      case "OWNER":
        return "Proprietário"

      case "ADMIN":
        return "Administrador"

      case "EDITOR":
        return "Editor"

      case "VIEWER":
        return "Visualizador"
        
       default:
        return value;
    }
  }
}
