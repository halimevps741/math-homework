const { Math } = require('math');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const mathHomework = req.query.mathHomework;
  if (!mathHomework) {
    return res.status(400).json({ error: 'No math homework provided' });
  }

  let solvedMathHomework = mathHomework.map((homework) => {
    const equation = homework.equation;
    if (!equation) {
      return res.status(400).json({ error: 'No equation provided' });
    }

    try {
      const solution = Math.eval(equation);
      return {
        ...homework,
        solution,
      };
    } catch (error) {
      return res.status(500).json({ error: 'Error solving equation' });
    }
  });

  return res.json(solvedMathHomework);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
