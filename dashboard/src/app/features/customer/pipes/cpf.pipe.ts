import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(value: string): string {

    if(!value) return ""

    const cpf = value.toString().replace(/\D/g, "")

    if(cpf.length === 11) {
      return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "XXX.$2.$1XX-XX")
    }

    return value.toString()
  }

}
