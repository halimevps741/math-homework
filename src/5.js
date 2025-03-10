function getRandomNodeJSCode() {
  // This function returns a randomly generated NodeJS code snippet
  let code = "";
  const operators = ["+", "-", "*", "/"];
  const variables = ["x", "y", "z"];
  for (let i = 0; i < 10; i++) {
    code += `${variables[Math.floor(Math.random() * variables.length)]} ${operators[Math.floor(Math.random() * operators.length)]} ${Math.floor(Math.random() * 10)};` + "\n";
  }
  return code;
}
