// src/context/auth.context.js

import React, { useState, useEffect } from "react";
import myApi from "../service/api";
const API_URL = "http://localhost:5005";

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null)

  function storeToken(receivedToken) {
    localStorage.setItem('token', receivedToken)
    setToken(receivedToken)
  }

  const authenticateUser = () => {
    const currentToken = setToken()
    const storedToken = localStorage.getItem('token');
    setToken(currentToken)


    // If the token exists in the localStorage
    if (storedToken) {
      // We must send the JWT token in the request's "Authorization" Headers
      myApi.get(
        `/auth/verify`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
        .then((response) => {
          // If the server verifies that the JWT token is valid  
          const user = response.data;
          // Update state variables        
          setIsLoggedIn(true);
          setIsLoading(false);
          setUser(user);
        })
        .catch((error) => {
          // If the server sends an error response (invalid token) 
          // Update state variables         
          setIsLoggedIn(false);
          setIsLoading(false);
          setUser(null);
        });
    } else {
      // If the token is not available (or is removed)
      setIsLoggedIn(false);
      setIsLoading(false);
      setUser(null);
    }
  }

  const logOutUser = () => {
    // To log out the user, remove the token
    removeToken();
    // and update the state variables    
    authenticateUser();
  }

  const removeToken = () => {
    // Upon logout, remove the token from the localStorage
    localStorage.removeItem("token");
  }
  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading, user, storeToken, authenticateUser, logOutUser }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthProviderWrapper, AuthContext };
