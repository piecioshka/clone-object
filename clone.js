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

module.exports = {
  cloneWithObjectAssign,
  cloneWithSpreadOperator,
  cloneWithJSONSerialization,
  cloneWithStructuredClone,
};
