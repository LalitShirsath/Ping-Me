import axios from "axios";

const url = "http://localhost:8000";

export const addUser = async (data) => {
    try{
        let responce = await axios.post(`${url}/add`,data);
        return responce.data;
    }
    catch(error){
        console.error("Error while addUser API: ",error);
    }
} 

export const getUsers = async () => {
    try{
        let responce = await axios.get(`${url}/users`);
        return responce.data;
    }
    catch(error){
        console.error("Error while calling getUsers api: ",error);
    }
} 

export const setConversation = async (data) => {
    try{
        await axios.post(`${url}/conversation/add`,data);
    }
    catch(error){
        console.error("Error while calling setConversation api: ",error);
    }
}