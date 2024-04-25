const _ = require("lodash");

const items = [1, [3, 4, [4, 6, 6]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
