import { generateGameID } from 'src/utils/util';

describe('util', () => {
  it('', () => {
    const id = generateGameID();
    expect(id.length).toBe(8);
  });
});
