import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateBtw',
  standalone: true
})
export class CalculateBtwPipe implements PipeTransform {

  transform(value: number): number {
    return value * 1.21;
  }

}
