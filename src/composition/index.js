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

const text = `To compose two functions together, pass \
output of the first function call as the input of the \
second function call`;

const wordsUsed = unique(words(text))

console.log({ wordsUsed });
