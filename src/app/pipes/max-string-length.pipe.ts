import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'maxStringLength',
  standalone: true
})
export class MaxStringLengthPipe implements PipeTransform {

  transform(value: String, args:number): String {
    return value.length > args ? value.substring(0, args) + '...' : value;
  }

}
