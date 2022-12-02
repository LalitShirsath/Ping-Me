import { Box } from "@mui/system";


// components
import Header from "./Header";
import Search from "./Search";
import Conversation from "./Conversations";

const Menu = () => {
    return (
        <Box>
            <Header/>
            <Search/>
            <Conversation/>
        </Box>
    )
}

export default Menu;