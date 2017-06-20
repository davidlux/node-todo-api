require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

const id = '5945b774ae7a21a81b61e7a2';

Todo.find({
  _id: id,
}).then((todos) => {
  console.log('todos: ', todos);
});
