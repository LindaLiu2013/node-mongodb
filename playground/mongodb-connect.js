//const MongoClient=require("mongodb").MongoClient;

const {MongoClient,ObjectID}=require("mongodb");

MongoClient.connect();

MongoClient.connect("mongodb://localhost:27017/Users",(err,db)=>{
  if (err)
  {
     return console.log('Unable to connect to MongoDB');
  }

  console.log('Connected to MongoDB server');

  db.collection('Users').insertOne({
    name: "Mike",
    age:25,
    location: "Phlia"
  },(err,result)=>{
    if (err){
      return console.log("Unable to insert",err);
    }
    console.log(JSON.stringify(result.ops,undefined,2));
  });
  db.close();
})
