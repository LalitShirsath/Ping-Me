import { useState, createContext } from "react";

export const AccountContext = createContext(null);


const AccountProvider = ({children}) => {
    // const [state, setState] = useState(initialState)
    // useState returns an array with exactly two items:

    // The current state of this state variable, initially set to the initial state you provided.
    // The set function that lets you change it to any other value in response to interaction.
    
    const [account, setAccount] = useState();

    return (
        <AccountContext.Provider value={{
            account,
            setAccount
        }}>
        
        {children}

        </AccountContext.Provider>
    )
}

export default AccountProvider;