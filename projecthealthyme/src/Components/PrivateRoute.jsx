import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContextProvider";

export const PrivateRoute = ({ children }) => {
 

    const {isAuth} = useContext(AuthContext)

  console.log("auth", isAuth);

  if(!isAuth){
    return <Navigate to = "/signup" />
}
return children
};
