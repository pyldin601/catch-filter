const catchFilter = require('./');

test('Pass error through', () => {
  const error = new Error('foo');
  expect(() => {
    try {
      throw error;
    } catch (e) {
      catchFilter()(e);
    }
  }).toThrow();
});


test('Handle specific error and rethrow another', () => {
  const filter = catchFilter(
    [TypeError, error => 'All be fine']
  );

  expect(() => {
    try {
      throw new Error();
    } catch (e) {
      filter(e);
    }
  }).toThrow();

  try {
    throw new TypeError();
  } catch (e) {
    const result = filter(e);
    expect(result).toBe('All be fine');
  }
});


test('Default error handler', () => {
  const filter = catchFilter(
    [(error) => 'All be caught']
  );

  try {
    throw new Error();
  } catch (e) {
    const result = filter(e);
    expect(result).toBe('All be caught');
  }

  try {
    throw new TypeError();
  } catch (e) {
    const result = filter(e);
    expect(result).toBe('All be caught');
  }
});
