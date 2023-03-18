import { FalsyToUndefinedPipe } from './falsy-to-undefined.pipe';

describe('FalsyToUndefinedPipe', () => {
  it('create an instance', () => {
    const pipe = new FalsyToUndefinedPipe();
    expect(pipe).toBeTruthy();
  });
});
