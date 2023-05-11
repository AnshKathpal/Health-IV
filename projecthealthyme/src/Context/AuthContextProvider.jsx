import { createContext,useState } from "react";

export const AuthContext = createContext();


const AuthContextProvider = ({children}) => {


    const [isAuth,setIsAuth] = useState(false);


    const [authState,setIsAuthState] = useState({
        isAuth : false,
        token : false
    })


    // const loginUser = () =>{
    //     setIsAuthState ({
    //         isAuth : true,
    //         token : true
    //     })
    // }


    // const logoutUser = () =>{
    //     setIsAuthState({
    //         isAuth : false,
    //         token : false
    //     })
    //     }

    const logout = () =>{
        setIsAuth(false)
      }


    const [data,setData] = useState([]);



    //  const login = () =>{
    //     setIsAuth(true);
    // }

    // const logout = () => {
    //     setIsAuth(false);
    // }

    

    const [submittedData, setSubmittedData] = useState([]);




    return (
        <AuthContext.Provider value={{authState,logout,submittedData, setSubmittedData, isAuth, setIsAuth, data,setData}} >
            {children}
        </AuthContext.Provider>
    )


}

export default AuthContextProvider;