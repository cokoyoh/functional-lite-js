const guard = (fn) => (arg) => {
  return arg ? fn(arg) : arg;
};

const compose = (...fns) => {
  return [...fns].reverse().reduce((g, f) => {
    return (...args) => f(g(...args));
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

const not = (fn) => (...args) => !fn(...args)

const asyncPipe = (...fns) => arg => [...fns].reduce(async (g, f) => f( await g), arg)

module.exports = { guard, trace, pipe, compose, composeMethod, partial, spreadArgs, not, asyncPipe };
