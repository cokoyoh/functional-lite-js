const total = [1, 2, 3, 4].reduce((f1, f2) => {
  console.log({ f1, f2 });
  return f1 + f2;
})

console.log({ total });
