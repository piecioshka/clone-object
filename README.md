# clone-object

Different approaches to clone an object in JavaScript:

```js
function cloneWithObjectAssign(data) {
  return Object.assign({}, data);
}

function cloneWithSpreadOperator(data) {
  return { ...data };
}

function cloneWithJSONSerialization(data) {
  return JSON.parse(JSON.stringify(data));
}

function cloneWithStructuredClone(data) {
  return structuredClone(data);
}
```

Report

```md
  Testing different clone approaches
    cloneWithObjectAssign
      ✓ should make a shallow copy
      ✕ should make a deep copy
      ✓ should make a copy methods
    cloneWithSpreadOperator
      ✓ should make a shallow copy
      ✕ should make a deep copy
      ✓ should make a copy methods
    cloneWithJSONSerialization
      ✓ should make a shallow copy
      ✓ should make a deep copy
      ✕ should make a copy methods
    cloneWithStructuredClone
      ✓ should make a shallow copy
      ✓ should make a deep copy
      ✕ should make a copy methods
```

## License

[The MIT License](https://piecioshka.mit-license.org) @ 2023
