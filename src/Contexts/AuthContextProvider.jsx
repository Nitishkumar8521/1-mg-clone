import { createContext, useState } from "react"
export const AuthContext = createContext();

export function AuthContextProvider({children}){
    const [auth, setAuth] = useState(0);
    function toggle(){
        if(auth===1){
            setAuth(0);
        }
        else{
            setAuth(1);
        }
    }

    return(<>
    <AuthContext.Provider value={{auth,toggle}}>
        {children}
    </AuthContext.Provider>
    </>)
}
