const isShortEnough = (str) => str.length <= 5;

const not = (predicate) => {
  return (...args) => {
    return !predicate(...args)
  }
}

const isLongEnough = not(isShortEnough);

console.log({ isLong: isLongEnough('this is a long string') });
console.log({ isNotLong: isLongEnough('not') });
