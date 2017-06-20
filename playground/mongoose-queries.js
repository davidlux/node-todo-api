require('./../server/db/mongoose');
const { ObjectID } = require('mongodb');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

const id = '59499fa92898c3a800df749b';

// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// } else {
//   User.findById(id).then((user) => {
//     if (!user) {
//       return console.log('user not found');
//     }
//     return console.log('User', user);
//   }).catch(e => console.log(e));
// }

// Todo.find({
//   _id: id,
// }).then((todos) => {
//   console.log('todos: ', todos);
// });
//
//
// Todo.findOne({
//   _id: id,
// }).then((todo) => {
//   console.log('todo', todo);
// });

Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('ID not found');
  }
  return console.log('todo', todo);
}).catch(e => e);
