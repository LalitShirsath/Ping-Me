import { useEffect, useState , useContext} from "react";

import { Box, Divider, Typography, styled } from "@mui/material";

import { getUsers } from "../../../service/api";
import { AccountContext } from "../../../context/AccountProvider";


//components
// import Conversation from "./Conversation";

const Component = styled(Box)`
    height: 81vh;
    overflow: overlay;
`;


const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edef;
    opacity: .6;
`;

const Compo = styled(Box)`
    display: flex;
    height: 45px;
    padding: 13px 0;
    cursor: pointer;
`

const Image = styled('img')({
    width: 50,
    height: 50,
    borderRadius: '50%',
    padding: '0 14px',
    objectFit: 'cover'
})

const Conversations = () => {

    const [users, setUsers] = useState([]);

    const {account} = useContext(AccountContext);

    useEffect(() => {
        const fetchData = async () => {
            let response = await getUsers();
            setUsers(response);
        }
        fetchData();
    }, []);


    return (
        <Component>
            {
                users.map(user => (
                    user.sub !== account.sub &&
                    <>
                        <Compo>
                            {/* <console className="log">{user.picture}</console> */}
                            <Box>
                                <Image src={user.picture} alt="dp"/>
                                
                            </Box>

                            <Box>
                                <Box>
                                    <Typography>{user.name}</Typography>
                                </Box>
                            </Box>

                        </Compo>

                        <StyledDivider/>
                    </>
                ))
            }
        </Component>
    )
}

export default Conversations;