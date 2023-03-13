// array.sort sorts an array in place, meaning that
// the input is overwritten by the output.
const arr0 = ["a", "q", "d", "z"];
arr0.sort();
console.log(arr0);

// array.sort may take a compare function as an input.
// compare function is useful when sorting objects in an array.
const arr1 = [
  { id: 394, name: "c***" },
  { id: 322, name: "a***" },
  { id: 22, name: "s***" },
];
const compareFn = (a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
};
arr1.sort(compareFn);
console.log(arr1);
