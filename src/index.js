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

const sum = (a, b) => a + b;

console.log({ isLong: isLongEnough('this is a long string') });
console.log({ isNotLong: isLongEnough('not') });

const addFiveTo = curry(sum)

const nums = [1, 2, 3, 4].map(addFiveTo(5))

console.log({ nums: [1, 2, 3, 4].map(addFiveTo(5)) });

