const incrementer = num => {
  return () => {
    const result = ++num;
    console.log({ result });
    return result;
  }
}

const increment = incrementer(3);

increment() // 4 
increment() // 5
increment() // 6
increment() // 7
increment() // 8
increment() // 9
