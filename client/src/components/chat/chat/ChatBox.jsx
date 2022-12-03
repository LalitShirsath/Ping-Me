import { Box } from "@mui/material";


import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import Footer from "./Footer";


const ChatBox = () => {
    return (
        <Box style={{height: '75%'}}>
            <ChatHeader/>
            <Messages/>
            <Footer/>
        </Box>
    )
}


export default ChatBox;