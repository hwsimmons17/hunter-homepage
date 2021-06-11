import { MongoClient } from "mongodb";
import nextConnect from "next-connect";

const client = new MongoClient(
  "mongodb+srv://hunterws:hunterws@cluster0.exsnw.mongodb.net/hunter?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db("hunter-homepage");
  console.log("MongoDB connected");
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;
