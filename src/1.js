// Generate a random Node.js code
const randomCode = () => {
  const functions = ['map', 'filter', 'reduce', 'find'];
  const methods = ['concat', 'slice', 'splice', 'indexOf'];
  const operators = ['+', '-', '*', '/', '%'];
  const variables = ['x', 'y', 'z', 'a', 'b', 'c'];
  const values = [1, 2, 3, 4, 5];

  return {
    functions: functions[Math.floor(Math.random() * functions.length)],
    methods: methods[Math.floor(Math.random() * methods.length)],
    operators: operators[Math.floor(Math.random() * operators.length)],
    variables: variables[Math.floor(Math.random() * variables.length)],
    values: values[Math.floor(Math.random() * values.length)]
  };
};
