import { useContext, useState } from "react";
import {AccountContext} from "../../../context/AccountProvider";

import {Box, styled} from "@mui/material";

import { newMessage } from "../../../service/api";

import Footer from "./Footer";

const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
`;

const Component = styled(Box)`
    height: 80vh;
    overflow-y: scroll;
`;

const Messages = ({person, conversation}) => {
    const [value, setValue] = useState('');

    const {account} = useContext(AccountContext);

    const sendText = async (e) => {
        const code = e.keyCode || e.which;

        // for enter button code is 13
        if(code === 13){
            let message = {
                senderId: account.sub,
                receiverId: person.sub,
                conversationId: conversation[0]._id,
                type: 'text',
                text: value
            }
            
            console.log(message);
            await newMessage(message);

            setValue('');
        }
    };

    return (
        <Wrapper>
            <Component>

            </Component>
            <Footer sendText={sendText} 
                    setValue = {setValue}
                    value = {value} // set value as empty after sending message
            />
        </Wrapper>
    )
}

export default Messages;