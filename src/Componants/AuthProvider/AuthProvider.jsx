import React, {  createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({children}) {
  const correctPass = "neama215ali";
  const [isAuthticated, setIsAuthticated] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("auth") === correctPass) {
      setIsAuthticated(true);
    }
  }, []);
  const login = (password) => {
    if (password === correctPass) {
      sessionStorage.setItem("auth", password);
      setIsAuthticated(true);
      return true;
    }
    {
      return false;
    }
  };
  return <>
  <AuthContext.Provider  value={{isAuthticated , login}}>
  {children}
  </AuthContext.Provider>
  </>
}
