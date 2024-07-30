
import React, { createContext, useState } from 'react';


const MyContext = createContext(null);


export const MyProvider = ({ children }) => {
  const [isLogin,setIsLogin] = useState(false);
  const[userName, setUserName] = useState('')

  return (
    <MyContext.Provider value={{ isLogin, setIsLogin, userName, setUserName}}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;