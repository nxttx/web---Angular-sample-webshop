import { PriceMustHaveDecimalsPipe } from './price-must-have-decimals.pipe';

// transform(value: Number): String {
//   // if doesnt have decimals, add ,--
//   // if has decimals, make sure to be maximum 2 decimals and change dot to comma
//   let price = value.toString();
//   if (!price.includes('.')) {
//     price = price + ',--';
//   } else {
//     let priceArray = price.split('.');
//     if (priceArray[1].length > 2) {
//       price = priceArray[0] + ',' + priceArray[1].substring(0, 2);
//     } else if (priceArray[1].length === 1) {
//       price = priceArray[0] + ',' + priceArray[1] + '0';
//     } else {
//       price = priceArray[0] + ',' + priceArray[1];
//     }
//   }
//   return price;
// }

describe('PriceMustHaveDecimalsPipe', () => {
  it('create an instance', () => {
    const pipe = new PriceMustHaveDecimalsPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return 1,--', () => {
    const pipe = new PriceMustHaveDecimalsPipe();
    expect(pipe.transform(1)).toBe('1,--');
  });

  it('should return 1,--', () => {
    const pipe = new PriceMustHaveDecimalsPipe();
    expect(pipe.transform(1.0)).toBe('1,--');
  });

  it('should return 1,10', () => {
    const pipe = new PriceMustHaveDecimalsPipe();
    expect(pipe.transform(1.10)).toBe('1,10');
  });

  it('should return 1,11', () => {
    const pipe = new PriceMustHaveDecimalsPipe();
    expect(pipe.transform(1.11)).toBe('1,11');
  });

  it('should return 1,11', () => {
    const pipe = new PriceMustHaveDecimalsPipe();
    expect(pipe.transform(1.111)).toBe('1,11');
  });
});
