import { useContext } from 'react';
import { AccountContext } from '../context/AccountProvider';

// for header, import appbar and toolbar from material ui
// styled is used for custom style
import {AppBar, Toolbar, styled, Box} from '@mui/material'

// components
import LoginDialog from "./account/LoginDialog";
import ChatDialog from './chat/ChatDialog';

// this header will have properties of AppBar and our own styling
const Header = styled(AppBar)`
    height: 220px;
    background-color: #00bfa5;
    box-shadow:none;
`

// Component is for box and custom styling
const Component = styled(Box)`
    height: 100vh;
    background: #DCDCDC;
`


const Messenger = () => {

    const {account} = useContext(AccountContext);

    return (

        <Component>
            {
                account ? <ChatDialog/>
                :
                <>
                    <Header>
                        <Toolbar>

                        </Toolbar>
                    </Header>
                    <LoginDialog/>
                </>
            }
            
        </Component>

    )
}

export default Messenger;