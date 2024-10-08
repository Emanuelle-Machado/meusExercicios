test('assertivas', () => {
  let number = null;
  expect(number).toBeNull();
  number = 10;
  expect(number).not.toBeNull();
  expect(number).toBe(10);
  expect(number).toEqual(10);
  expect(number).toBeGreaterThan(9);
  expect(number).toBeLessThan(11);
});

test('objetos', () => {
  const obj = { name: 'John', mail: 'john@mail.com' };
  expect(obj).toHaveProperty('name');
  expect(obj).toHaveProperty('name', 'John');
  expect(obj.name).toBe('John');

  const obj2 = { name: 'John', mail: 'john@mail.com' };
  expect(obj).toEqual(obj2);
});
