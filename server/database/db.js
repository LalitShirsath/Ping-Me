import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


const Connection = async () => {

    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-yx9ha2g-shard-00-00.hatdnxw.mongodb.net:27017,ac-yx9ha2g-shard-00-01.hatdnxw.mongodb.net:27017,ac-yx9ha2g-shard-00-02.hatdnxw.mongodb.net:27017/?ssl=true&replicaSet=atlas-94rsvg-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try{ 
        await mongoose.connect(URL,{ useUnifiedTopology: true});
        console.log("Database connected");
    }
    catch(error){
        console.log("Error while connecting with database: ", error.message);
    }
}

export default Connection;
