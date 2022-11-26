import React, { useState, useEffect, createContext } from "react";
import jwtDecode from "jwt-decode";
import { getAccessToken, logout} from "../api/auth";

export const AuthContext = createContext();

export default function AuthProvider(props) {

    const { children } = props;
    let [user, setUser] = useState({
        user: 'null',
        isLoading: true,
        isadmin: false
    });

    useEffect(() => {
        checkUserLogin(setUser);
      }, []);

    console.log(user)

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
    
function checkUserLogin(setUser) {
        const accessToken = getAccessToken();
      
        if (!accessToken) {
            logout();
            setUser({
              user: null,
              isLoading: false,
              isadmin: false
            });
        } else {
            const user = jwtDecode(accessToken).name
            const free = jwtDecode(accessToken).isAdmin
            setUser({
                isLoading: false,
                user: user,
                isAdmin: free
          });
        }
    }
