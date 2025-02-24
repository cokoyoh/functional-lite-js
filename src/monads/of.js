const Monad = value => ({
  flatMap: f => f(value),
  map(f) {
    return this.flatMap(a => Monad.of(f(a)))
  }
});

Monad.of = x => Monad(x)

Monad(21).map(x => x * 2).map(x => console.log({ x }))
