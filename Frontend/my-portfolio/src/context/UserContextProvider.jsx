import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";


const UserContextProvider = ({ children }) => {
 
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  const [isDarkMode, setIsDarkMode] = useState(false);
     const [activeTab, setActiveTab] = useState('Home');
 
     useEffect(() => {
         if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
             setIsDarkMode(true);
             document.documentElement.classList.add('dark');
         }
     }, []);
 
     const toggleDarkMode = () => {
         setIsDarkMode(!isDarkMode);
         if (!isDarkMode) {
             document.documentElement.classList.add('dark');
         } else {
             document.documentElement.classList.remove('dark');
         }
     };

  return (
    <UserContext.Provider
      value={{
        
        token,
        setToken,
        activeTab, setActiveTab,isDarkMode,setIsDarkMode,toggleDarkMode
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;