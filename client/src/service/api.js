import axios from "axios";

const url = "";

export const addUser = async (data) => {
    try{
        await axios.post(url,data);
    }
    catch(error){
        console.error("Error while addUser API: ",error.message);
    }
}