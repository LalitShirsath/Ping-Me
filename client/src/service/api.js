import axios from "axios";

const url = "http://localhost:8000";

export const addUser = async (data) => {
    try{
        await axios.post(`${url}/add`,data);
    }
    catch(error){
        console.error("Error while addUser API: ",error.message);
    }
} 

export const getUsers = async () => {
    try{
        let responce = await axios.get(`${url}/users`);
        return responce.data;
    }
    catch(error){
        console.error("Error while calling getUsers api: ",error.message);
    }
} 