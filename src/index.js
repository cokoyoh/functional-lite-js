const isShortEnough = (str) => str.length <= 5;

const not = (predicate) => {
  return (...args) => {
    return !predicate(...args)
  }
}

const isLongEnough = not(isShortEnough);

const curry = (fn, arity = fn.length) => {
  return (function nextCurried(previousArgs) {
    return function curried(...nextArgs) {
      const args = [...previousArgs, nextArgs];

      if (args.length >= arity) {
        return fn(args)
      }

      return nextCurried(args)
    }
  })([])
}

console.log({ isLong: isLongEnough('this is a long string') });
console.log({ isNotLong: isLongEnough('not') });
