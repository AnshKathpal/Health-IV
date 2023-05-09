import { createContext,useState } from "react";

export const AuthContext = createContext();


const AuthContextProvider = ({children}) => {


    const [isAuth,setIsAuth] = useState(false);

    const [data,setData] = useState([]);



    //  const login = () =>{
    //     setIsAuth(true);
    // }

    const [submittedData, setSubmittedData] = useState([]);




    return (
        <AuthContext.Provider value={{submittedData, setSubmittedData, isAuth, setIsAuth, data,setData}} >
            {children}
        </AuthContext.Provider>
    )


}

export default AuthContextProvider;