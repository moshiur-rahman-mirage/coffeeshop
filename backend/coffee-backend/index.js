
// require and initialization
const  express  = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app=express();
const port=process.env.PORT || 5000;
require('dotenv').config()
// MIDDLEWARE
//const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}.@sandbox.h4862k9.mongodb.net/?retryWrites=true&w=majority`;

const uri = `mongodb://localhost:27017`;

app.use(cors());
app.use(express.json())


////////////////////////



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const dataCollection=client.db('coffeeDB').collection('coffee');
    // create api

    app.get('/',async (req,res)=>{
        const cursor= dataCollection.find();
        const result=await cursor.toArray();
        res.send(result);
    })

    app.get('/:id',async(req,res)=>{
        const id=req.params.id;
        const query={_id:new ObjectId(id)};
        const result= await dataCollection.findOne(query);
        res.send(result)
    })

    app.put('/update/:id',async(req,res)=>{
        const id=req.params.id;
        const filter={_id:new ObjectId(id)};
        const options={upsert:true};
        const updatedData=req.body;
        const data={
            $set:{
                name:updatedData.name,
                chef:updatedData.chef,
                supplier:updatedData.supplier,
                taste:updatedData.taste,
                category:updatedData.category,
                details:updatedData.details,
                photoUrl:updatedData.photoUrl
            }
        }
        console.log(data)
        const result= await dataCollection.updateOne(filter,data,options)
        res.send(result)
    })

    app.post('/add',async (req,res)=>{
        const newData=req.body;
        const result=await dataCollection.insertOne(newData);
        res.send(result)
    })

    app.delete('/delete/:id',async(req,res)=>{
        const id=req.params.id;
        const query={_id:new ObjectId(id)};
        const result=await dataCollection.deleteOne(query);
        res.send(result)
        console.log('deleting'+id)
    })



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);


//////////////////////



// api





// listen and log

app.listen(port,()=>{
    console.log(`coffee server is running on ${port}`);
})