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
    if (employeeFound) {
      setUser("employee");
      const name = data.employeeData.find((e) => {
        if (e.email === email) {
          return e;
        }
      });
      setUserName(name.name);
    }
  }

  return (
    <div>
      {/* {!user ? (
        <Login onlineUser={onlineUser} />
      ) : user === "employee" ? (
        <EmployeeName.Provider value={userName}>
          <EmployeeDashboard />
        </EmployeeName.Provider>
      ) : (
        <AdminDashboard />
      )} */}
     <EmployeeDashboard/>
    </div>
  );
}

export default App;
