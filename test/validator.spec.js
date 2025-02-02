// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import Validator from '../src/validator';


describe('Test Validador', () => {
  test('debería retornar true para 4137894711755904', () => {
      expect(
        (new Validator).isValid('4137894711755904')
        ).toBe(true);
  });
  test('debería retornar false para "1234567890"', () => {
      expect(
        (new Validator).isValid('1234567890')
        ).toBe(false);
  });
  test('probar maskify, deberia pasar', () => {
    expect(
      (new Validator).maskify('4137894711755904')
      ).toBe('############5904');
});
test('probar maskify,  no deberia pasar', () => {
  expect(
    (new Validator).maskify('4137894711755904')
    ).toBe('###########5904');
});

test('probar si new validator es un  objeto', () => {
  expect(
    (new Validator)).toBe(Object);
});
test('deberia retornar que no es una funcion ', () => {
  expect(
    (new Validator)).toBe(Function);
});
});


