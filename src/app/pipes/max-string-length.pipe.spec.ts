import { MaxStringLengthPipe } from './max-string-length.pipe';

describe('MaxStringLengthPipe', () => {
  it('create an instance', () => {
    const pipe = new MaxStringLengthPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return the same string if it is shorter than the max length', () => {
    const pipe = new MaxStringLengthPipe();
    expect(pipe.transform('short', 10)).toBe('short');
  });

  it('should return the same string if it is equal to the max length', () => {
    const pipe = new MaxStringLengthPipe();
    expect(pipe.transform('short', 5)).toBe('short');
  });

  it('should return the same string if it is longer than the max length', () => {
    const pipe = new MaxStringLengthPipe();
    expect(pipe.transform('longer', 3)).toBe('lon...');
  });
});
