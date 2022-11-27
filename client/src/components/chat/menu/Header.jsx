import { useContext } from "react";
import { Box, styled } from "@mui/system";
import {Chat as MessageIcon, MoreVert} from "@mui/icons-material";

import { AccountContext } from "../../../context/AccountProvider";


const Component = styled(Box)`
    height: 44px;
    background: #ededed;
    padding: 8px 16px;
    display: flex;
    alignp-items: center;
`

const Wrapper = styled(Box)`
    margin-left: auto;
    & > * {
        margin-left: 2px;
        padding: 8px;
        color: #000;
    };

    & :first-child{
        font-size: 22px;
        margin-right: 8px;
        margin-top: 3px;
    }
`

const Image = styled('img')({
    height: 40,
    width: 40,
    borderRadius: "50%"
})

const Header = () => {

    const {account} = useContext(AccountContext);

    return (
        <>
            <Component>
                <Image src={account.picture} alt="dp" />
                <Wrapper>
                    <MessageIcon/>
                    <MoreVert/>      
                </Wrapper>
            </Component>

        </>
    )
}

export default Header;