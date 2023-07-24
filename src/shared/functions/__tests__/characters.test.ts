import { removeSpecialCharacters } from '../characters';

describe('Characters', () => {
  it('should remove special characters', () => {
    const specialCharacters = 'df111gd.-dd222gg$,df333ss';

    expect('111222333').toEqual(removeSpecialCharacters(specialCharacters));
  });
});
