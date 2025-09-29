# biome repro

- When `useArrowFunction` is on, running `biome check --write` turns a function into an arrow
  function even if it references `arguments`.


Run

```
npm run check -- --write
```

To verify this behavior
