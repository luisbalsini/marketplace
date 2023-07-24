import { validateEmail } from '../email';

describe('Email', () => {
  it('should error in invalid email', () => {
    expect(false).toEqual(validateEmail('email.com.br'));
    expect(false).toEqual(validateEmail('emailg@jose'));
    expect(false).toEqual(validateEmail('@jose.com'));
  });

  it('should sucess valid email', () => {
    expect(true).toEqual(validateEmail('email@email.com.br'));
    expect(true).toEqual(validateEmail('email.email@email.com.br'));
  });
});
