import lodash from "lodash";

const items = [1, [2, [3, [4]]]];
const newitems = lodash.flattenDeep(items);
console.log(newitems);
