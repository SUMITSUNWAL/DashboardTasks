import { createContext, useEffect, useState } from "react"
import { getLocalStorage } from "../utils/LocalStorage";

export const AuthContext =  createContext();
const Credentials = ({children}) => {
  const [credentialData,setCredentialData] = useState(null);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
   const {employeeData,adminData,data} = getLocalStorage();
   setCredentialData({employeeData,adminData,data})
   setLoading(false);
  },[])

  if(loading){
    return <div>Loading...</div>
  }
  console.log("This is my employee Data");
  console.log(credentialData.employeeData);
  return (
    <AuthContext.Provider value={credentialData}>
      {children}
    </AuthContext.Provider>
  )
}

export default Credentials