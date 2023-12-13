import { CalculateShippingPipe } from './calculate-shipping.pipe';

/*
  transform(value: number): number {
    return Math.round((value / 100) * 8);
  }
   */

describe('CalculateShippingPipe', () => {
  it('create an instance', () => {
    const pipe = new CalculateShippingPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return 1.5 for 1', () => {
    const pipe = new CalculateShippingPipe();
    expect(pipe.transform(1)).toEqual(1.5);
  });

  it('should return 3 for 2', () => {
    const pipe = new CalculateShippingPipe();
    expect(pipe.transform(2)).toEqual(3);
  });

});
