import { createContext, useContext, useEffect, useState } from "react";
import "./App.css";
import AdminDashboard from "./components/admin/AdminDashboard";
import EmployeeDashboard from "./components/employee/EmployeeDashboard";
import Login from "./components/Login";
import { AuthContext } from "./context/credentials";

export const EmployeeName = createContext();

function App() {
  const [user, setUser] = useState();
  const [userName, setUserName] = useState();
  const data = useContext(AuthContext);

  function onlineUser(email, password) {
    console.log(email);
    console.log(password);
    const employeeFound = data.employeeData.find(
      (e) => email === e.email && password === e.password
    );
    
    if(data.employeeData.find((e) => email === e.email && password === e.password)){
      setUser("employee")
      const employeeFound = data.employeeData.find(
        (e) => email === e.email && password === e.password
      );
      setUserName(employeeFound.name);
    }else if(data.adminData.find((e) => email === e.email && password === e.password)){
      setUser("admin");
      const adminFound = data.adminData.find(
        (e) => email === e.email && password === e.password
      );
      setUserName(adminFound.name);
    }else{
      alert("Bhaii email and password sahi se barr");
    }
    }

  return (
    <div>
      {!user ? (
        <Login onlineUser={onlineUser} />
      ) : user === "employee" ? (
        <EmployeeName.Provider value={userName}>
          <EmployeeDashboard />
        </EmployeeName.Provider>
      ) : (
        <EmployeeName.Provider value={userName}>
          <AdminDashboard />
        </EmployeeName.Provider>
      )}
    </div>
  );
}

export default App;
