const isShortEnough = (str) => str.length <= 5;

const not = (predicate) => {
  return (...args) => {
    return !predicate(...args)
  }
}

const isLongEnough = not(isShortEnough);

const curry = (fn, arity = fn.length) => {
  return (function nextCurried(previousArgs) {
    return function curried(nextArg) {
      const args = [...previousArgs, nextArg];

      if (args.length >= arity) {
        return fn(...args)
      }

      return nextCurried(args)
    }
  })([])
}

const partial = (fn, ...presetArgs) => {
  return (...laterArgs) => {
    return fn(...presetArgs, ...laterArgs)
  };
}

const identity = x => x;

/**
 * Given a function which receives multiple args, transform it into a unary 
 * -> a function which receives only a single arg
 */
const unary = (fn) => (arg) => fn(arg);

// related to what a unary function does
const binary = (fn) => (firstArg, secondArg) => fn(firstArg, secondArg);

/**
 * constant(V) utility is a function which simply returns a function which returns the value
 * 
 * Useful for example in instances where the const cannot simply be passed as is but can be retruned
 * e.g in promise.then(() => value) -> promise.then(constant(value))
 */
const constant = (value) => {
  return () => value;
}

const sum = (a, b) => a + b;

console.log({ isLong: isLongEnough('this is a long string') });
console.log({ isNotLong: isLongEnough('not') });

const addFiveTo = curry(sum)

const nums = [1, 2, 3, 4].map(addFiveTo(5))

console.log({ nums: [1, 2, 3, 4].map(addFiveTo(5)) });

