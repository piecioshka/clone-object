const {
  cloneWithObjectAssign,
  cloneWithSpreadOperator,
  cloneWithJSONSerialization,
  cloneWithStructuredClone,
} = require("./clone");

describe("Testing different clone approaches", () => {
  const original = Object.freeze({
    ciasteczko: "serniczek",
    size: 15,
    author: {
      name: "Piotr",
      getSurname: () => 'Kowalski',
      age: 33,
    },
  });

  [
    cloneWithObjectAssign,
    cloneWithSpreadOperator,
    cloneWithJSONSerialization,
    cloneWithStructuredClone,
  ].forEach((fn) => {
    describe(fn.name, () => {
      it(`should make a shallow copy`, () => {
        const cloned = fn(original);
        expect(cloned).not.toBe(original);
      });
      it(`should make a deep copy`, () => {
        const cloned = fn(original);
        expect(cloned.author).not.toBe(original.author);
      });
      it(`should make a copy methods`, () => {
        const cloned = fn(original);
        expect(cloned.author.getSurname).toBe(original.author.getSurname);
      });
    });
  });
});
