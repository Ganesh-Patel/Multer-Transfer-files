
import React, { createContext, useState } from 'react';

export const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [authToken,setauthToken]=useState(false);

  return (
    <UserContext.Provider value={{ user, setUser,authToken,setauthToken }}>
      {children}
    </UserContext.Provider>
  );
};
