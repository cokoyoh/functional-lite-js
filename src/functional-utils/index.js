const guard = (fn) => (arg) => {
  return arg ? fn(arg) : arg;
};

const compose = (...fns) => {
  return [...fns].reverse().reduce((f1, f2) => {
    return (...args) => f2(f1(...args));
  });
};

const reverseArgs = (fn) => {
  return (...args) => fn(...args.reverse());
};

const pipe = reverseArgs(compose);

const trace = (label) => (value) => {
  console.log({ [label]: value });
  return value;
};

const composeMethod = (method) => (...fns) => [...fns].reduce(
  (f, g) => (...args) => g(...args)[method](f)
);

const partial = (fn, ...presetArgs) => {
  return (...laterArgs) => fn(...presetArgs, ...laterArgs)
}

const spreadArgs = (fn) => (args) => fn(...args)

module.exports = { guard, trace, pipe, compose, composeMethod, partial, spreadArgs };
