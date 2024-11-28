const { compose, composeMethod, trace, pipe } = require('./index');

const data = [1, 2, 3, 4, 5];

const toDouble = num => num * 2;

const toImcrement = num => num + 1;

const toArithmetic = compose(toImcrement, toDouble);

const outOddNumbers = num => num % 2 === 0;

const result = data.map(toArithmetic).filter(outOddNumbers)

console.log({ data, result });


console.log("_".repeat(20));
console.log("\n".repeat(2));

const composeFlatMap = composeMethod('flatMap');
const composePromises = composeMethod('then');

{
  const label = 'API call composition';

  const getUserById = id =>  id === 3 ?
    Promise.resolve({ name: 'Airo', role: 'Author' }) : 
    Promise.resolve({ name: 'Anonymous', role: 'Anonymous' })
  
  const hasPermision = ({ role }) => Promise.resolve(role === 'Author');

  const authUser = composePromises(hasPermision, getUserById)

  authUser(3).then(trace(label))
  authUser(32).then(trace(label))

  console.log('_'.repeat(20))
  console.log('\n'.repeat(2))
}

{
  const guard = fn => arg => {
    return arg ? fn(arg) : arg
  }

  const addOne = num => num += 1;

  const multiplyByTwo = num => num * 2

  const toArithmetic = pipe(...[addOne, multiplyByTwo].map(guard))

  const result = [1, null, 2, null, 3, 4, 5, null, 6].map(toArithmetic)

  console.log({ result })
}

