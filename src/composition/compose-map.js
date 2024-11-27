const { compose, composeMethod, trace } = require('./index');

const data = [1, 2, 3, 4, 5];

const toDouble = num => num * 2;

const toImcrement = num => num + 1;

const toArithmetic = compose(toImcrement, toDouble);

const outOddNumbers = num => num % 2 === 0;

const result = data.map(toArithmetic).filter(outOddNumbers)

console.log({ data, result });

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
}

