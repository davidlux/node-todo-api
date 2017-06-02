// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// let obj = new ObjectID();
// console.log(obj)

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, db) => {

  if (err){
    return console.log('Unable to connect to MongoDB Server');
  }

  // db.collection('Todos').find({
  //   _id: new ObjectID('592ca79f5c2e63125c1ca0d7')
  // }).toArray().then((docs) => {
  //
  //   console.log('todos');
  //   console.log(JSON.stringify(docs, undefined, 2));

  // db.collection('Todos').find({
  //   _id: new ObjectID('592ca79f5c2e63125c1ca0d7')
  // }).count().then((count) => {
  //   console.log(`Todos count:  ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch docs', err);
  // });




  db.collection('Users').find({
    name: 'David Lux'
  }).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  })



  // db.close();


})
