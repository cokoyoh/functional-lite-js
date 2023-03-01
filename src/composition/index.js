const words = (str) => {
  return String(str)
    .toLowerCase()
    .split(/\s|\b/)
    .filter(function alpha(v) {
      return /^[\w]+$/.test(v)
    })
}

const unique = (list) => {
  const uniqueList = [];

  for (let v of list) {
    if (uniqueList.indexOf(v) === -1) {
      uniqueList.push(v)
    }
  }

  return uniqueList;
}

const compose2 = (fn2, fn1) => {
  return (originalValue) => fn2(fn1(originalValue));
};

const compose3 = (...fns) => {
  return (result) => [...fns].reverse().reduce((result, fn) => fn(result), result);
}

const compose = (...fns) => {
  return fns.reverse().reduce((f1, f2) => {
    return (...args) => f2(f1(...args))
  })
}

// const uniqueWords = compose2(unique, words);
const uniqueWords = compose(unique, words);

const text = `To compose two functions together, pass \
output of the first function call as the input of the \
second function call`;

const wordsUsed = uniqueWords(text);

console.log({ wordsUsed });
