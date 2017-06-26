require('./db/mongoose');
require('./models/user');
const { Todo } = require('./models/todo');
const { ObjectID } = require('mongodb');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  const todo = new Todo({
    text: req.body.text,
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({ todos });
  }, e => res.status(400).send(e));
});

app.get('/todos/:id', (req, res) => {
  const id = req.params.id;
  if (!ObjectID.isValid(id)) {
    console.log(JSON.stringify(res.message, undefined, 2))
    return res.status(404).send('invalid ID');
  }
  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send('no todo found');
    }
    res.send({ todo });
  }).catch(e => res.send(e));
});


app.listen(3000, () => console.log('Started on port 30011'));

module.exports = { app };
