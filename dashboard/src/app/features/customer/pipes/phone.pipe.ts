import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string): string {

    if(!value) return ""

    let phone = value.toString().replace(/\D/g, "")

    if(phone.length > 11 && phone.startsWith("0")) {
      phone = phone.substring(1)
    } 

    if(phone.length === 11) {
      return phone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3")
    }

    if(phone.length === 10) {
      return phone.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3")
    }

    return value
  }

}
