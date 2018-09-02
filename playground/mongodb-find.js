
const {MongoClient,ObjectID}=require("mongodb");

MongoClient.connect("mongodb://localhost:27017/Users",(err,db)=>{
  if (err)
  {
     return console.log('Unable to connect to MongoDB');
  }

  console.log('Connected to MongoDB server');

db.collection('Users').find({name:'Andrew'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
  console.log('Error: ',err);
});

  db.collection('Users').find().count().then((count)=>{
    console.log(`Todos count: ${count}`);
  }, (err)=>{
    console.log('Error: ',err);
  });

    db.close();
})
