import { FirstCharCapitalPipe } from './first-char-capital.pipe';

describe('FirstCharCapitalPipe', () => {
  it('create an instance', () => {
    const pipe = new FirstCharCapitalPipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms "abc" to "Abc"', () => {
    const pipe = new FirstCharCapitalPipe();
    expect(pipe.transform('abc')).toBe('Abc');
  });

  it('transforms "abc def" to "Abc def"', () => {
    const pipe = new FirstCharCapitalPipe();
    expect(pipe.transform('abc def')).toBe('Abc def');
  });

  it('"Abc def" stays "Abc def"', () => {
    const pipe = new FirstCharCapitalPipe();
    expect(pipe.transform('Abc def')).toBe('Abc def');
  });
});
