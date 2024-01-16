const input = [{ a: 1 }, { b: 2 }, { c: 3 }];

function arrayToObject(input) {
  let output = {};
  input.forEach((input) => {
    const keys = Object.keys(input);
    const values = Object.values(input);
    keys.forEach((key, i) => {
      output = {
        ...output,
        [key]: values[i],
      };
    });
  });
  return output;
}

const output = arrayToObject(input);

console.log(output);
