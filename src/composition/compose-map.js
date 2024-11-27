const { compose } = require('./index');

const data = [1, 2, 3, 4, 5];

const toDouble = num => num * 2;

const toImcrement = num => num + 1;

const toArithmetic = compose(toImcrement, toDouble);

const result = data.map(toArithmetic)

console.log({ data, result });


