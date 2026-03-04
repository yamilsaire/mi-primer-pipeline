const assert = require('assert');
const saludar = require('../app');

describe('Prueba de la función saludar', () => {
  it('Debería saludar a Juan', () => {
    assert.strictEqual(saludar('Juan'), 'Hola, Juan!');
  });
});