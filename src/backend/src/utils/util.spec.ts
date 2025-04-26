import { generateGameID } from 'src/utils/util';

describe('util', () => {
  it('should have be 8 in length', () => {
    const id = generateGameID();
    expect(id.length).toBe(8);
  });
});
