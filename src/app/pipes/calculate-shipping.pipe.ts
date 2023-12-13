import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateShipping',
  standalone: true
})
export class CalculateShippingPipe implements PipeTransform {

  transform(value: number): number {
    return value * 1.5;
  }

}
