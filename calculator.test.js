const cal = require('./calculator');

test('1+2 = 3', () => {
    expect(cal("add", 1, 2)).toBe(3);
});

test('1-2 = -1', () => {
    expect(cal("minus", 1, 2)).toBe(-1);
});

test('1*2 = 2', () => {
    expect(cal("multi", 1, 2)).toBe(2);
});

test('1/2 = 0.5', () => {
    expect(cal("divide", 1, 2)).toBe(0.5);
});