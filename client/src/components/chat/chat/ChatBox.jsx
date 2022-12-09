import { Box } from "@mui/material";
import { useEffect } from "react";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { getConversation } from "../../../service/api";

import ChatHeader from "./ChatHeader";
import Messages from "./Messages";



const ChatBox = () => {

    const { person, account } = useContext(AccountContext)

    useEffect(() => {
        const getConversationDetails = async () => {
            let data = await getConversation({senderId: account.sub, receiverId: person.sub});
            console.log(data);
        }
        getConversationDetails();
    }, [person.sub]); 
    // whenever we select on different chats the useEffect will be called

    return (
        <Box style={{height: '75%'}}>
            <ChatHeader person={person}/>
            <Messages person={person}/>
        </Box>
    )
}


export default ChatBox;