import { createContext } from "react";
import run from "../config/gemini";

export const StoreContext = createContext(null) 



const StoreContextProvider = (props) => {

        const onSent = async (prompt) => {
            await run(prompt)
        }

        onSent("what is react js")
        

    const contextValue = {
           
            
    }

    return(
        <StoreContext.Provider value={contextValue}>
        {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider


