import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstCharCapital',
  standalone: true
})
export class FirstCharCapitalPipe implements PipeTransform {

  transform(value: String): String {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
