import { CalculateBtwPipe } from './calculate-btw.pipe';

describe('CalculateBtwPipe', () => {
  it('create an instance', () => {
    const pipe = new CalculateBtwPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return 1,21', () => {
    const pipe = new CalculateBtwPipe();
    expect(pipe.transform(1)).toBe(1.21);
  });


});
