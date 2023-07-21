import { insertMaskInCpf, validateCpf } from '../cpf';

const CPF_VALID = '04753272923';
// const CPF_VALID_WITH_MASK = '047.532.729-23';

const CPF_INVALID = '45375367543';
const CPF_INVALID_WITH_MASK = '453.753.675-43';

const CPF_ALL_ZERO = '000.000.000-00';

const CPF_MENOR = '53454446';

describe('CPF', () => {
  it('should insert mask in cpf', () => {
    expect(CPF_INVALID_WITH_MASK).toEqual(insertMaskInCpf(CPF_INVALID));
  });

  it('should invalid cpf', () => {
    expect(false).toEqual(validateCpf(CPF_INVALID));
  });

  it('should invalid cpf in all zero', () => {
    expect(false).toEqual(validateCpf(CPF_ALL_ZERO));
  });

  it('should invalid cpf in lenght != 11', () => {
    expect(false).toEqual(validateCpf(CPF_MENOR));
  });

  it('should valid cpf', () => {
    expect(true).toEqual(validateCpf(CPF_VALID));
  });
});
