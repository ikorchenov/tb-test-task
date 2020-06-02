const express = require('express');
const cors = require('cors');
const casual = require('casual');

const port = 3030;
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/login', (req, res) => {
  const { login, password } = req.body;
  const errors = [];

  if (!login) {
    errors.push('Необходимо указать логин');
  }

  if (!password) {
    errors.push('Необходимо указать пароль');
  }

  if (errors.length) {
    res.send({
      errors,
    });
  } else {
    res.send({
      data: {
        id: casual.integer(1, 100),
        name: casual.name,
        age: casual.integer(20, 30),
      },
    });
  }
});

app.listen(port, () => {
  console.log(`==> Server listen http://localhost:${port}`);
});
