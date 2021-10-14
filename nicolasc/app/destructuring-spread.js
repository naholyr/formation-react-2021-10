// Destructuring: arrays

const array = [1, 2, 3, 4, 5];

// const a = array[0]
// const b = array[1]
// const [a, b] = array; // a = 1, b = 2
const [a, b, ...tail] = array; // a = 1, b = 2, c = [3, 4, 5]

const sum1 = (array = []) =>
  array.length <= 1 ? array[0] : array[0] + sum1(array.slice(1));

// destructuring arguments
const sum2 = ([head, ...tail]) => {
  return head + (tail.length === 0 ? 0 : sum2(tail));
};

// destructuring + default values
const sum3 = ([head = 0, ...tail] = []) => {
  return head + (tail.length === 0 ? 0 : sum3(tail));
};

// Destructuring: objects

const object = { x: 1, y: 2, c: 3, d: 4, e: 5 };

// const { x, y } = object; // x = 1, y = 2
const { x, y, ...rest } = object;

const foo1 = (o) => o.x + o.y;
const foo2 = ({ x, y }) => x + y;

// const { x, y, z } = object; // x = 1, y = 2, z = undefined
// const { x, y, z = 33 } = object; // x = 1, y = 2, z = 33

// Destrucring & rename

// const toto = object.x;
// const tata = object.y;
// const tutu = object.z;
const { x: toto, y: tata, z: tutu = 33 } = object;

const foo3 = ({ x: toto, y: tata, z: tutu = 33 }) => {};

// Spread

const array2 = [0, ...array, 6]; // [0, 1, 2, 3, 4, 5, 6]
const array3 = [0, array, 6]; // [0, [1, 2, 3, 4, 5], 6]

const object2 = { a: 0, ...object }; // { a: 0, x: 1, y: 2, c: 3, d: 4, e: 5 }
const object3 = { x: 33, ...object, x: 42 }; // { x: 33, x: 1, y: 2, c: 3, d: 4, e: 5, x: 42 }
const object4 = { ...object, x: 42 }; // { x: 1, y: 2, c: 3, d: 4, e: 5, x: 42 }
const object5 = { x: 33, ...object }; // { x: 33, x: 1, y: 2, c: 3, d: 4, e: 5 }
const clone = { ...object };
