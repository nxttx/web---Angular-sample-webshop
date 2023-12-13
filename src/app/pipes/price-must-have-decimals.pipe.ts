import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceMustHaveDecimals',
  standalone: true
})
export class PriceMustHaveDecimalsPipe implements PipeTransform {

  transform(value: Number): String {
    // if doesnt have decimals, add ,--
    // if has decimals, make sure to be maximum 2 decimals and change dot to comma
    let price = value.toString();
    if (!price.includes('.')) {
      price = price + ',--';
    } else {
      let priceArray = price.split('.');
      if (priceArray[1].length > 2) {
        price = priceArray[0] + ',' + priceArray[1].substring(0, 2);
      } else if (priceArray[1].length === 1) {
        price = priceArray[0] + ',' + priceArray[1] + '0';
      } else {
        price = priceArray[0] + ',' + priceArray[1];
      }
    }
    return price;
  }

}
