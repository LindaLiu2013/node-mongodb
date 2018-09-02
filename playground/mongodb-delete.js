
const {MongoClient,ObjectID}=require("mongodb");

MongoClient.connect("mongodb://localhost:27017/Users",(err,db)=>{
  if (err)
  {
     return console.log('Unable to connect to MongoDB');
  }

  console.log('Connected to MongoDB server');

// db.collection('Users').deleteMany({name:'Andrew'}).then((result)=>{
//   console.log("delete many",result);
// });

//or  db.collection('Users').deleteMany({name:'Andrew'});

//  db.collection('Users').deleteOne({_id:new ObjectID("5b8b2ed79889efd6e1b915ea")}).then((result)=>{
//    console.log("delete one",result);
// });

db.collection("Users").findOneAndDelete({name: 'Mike'}).then((result)=>{
   console.log("findOneAndDelete",result);
})

  //  db.close();
})
