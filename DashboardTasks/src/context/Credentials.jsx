import { createContext, useEffect, useState } from "react"
import { getLocalStorage } from "../utils/LocalStorage";

export const AuthContext =  createContext();
const Credentials = ({children}) => {
  const [credentialData,setCredentialData] = useState(null);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
   const {employeeData,adminData,data,task} = getLocalStorage();
   setCredentialData({employeeData,adminData,data,task})
   setLoading(false);
  },[])

  if(loading){
    return <div>Loading...</div>
  }
  return (
    <AuthContext.Provider value={credentialData}>
      {children}
    </AuthContext.Provider>
  )
}

export default Credentials