import { useContext, useEffect, useState } from 'react'
import './App.css'
import AdminDashboard from './components/admin/AdminDashboard'
import EmployeeDashboard from './components/employee/EmployeeDashboard'
import Login from './components/Login'
import { AuthContext } from './context/credentials'

function App() {
  const [user,setUser] = useState();
  const data = useContext(AuthContext);

  function onlineUser(email,password){
    console.log(email);
    console.log(password);
     const employeeFound = data.employeeData.find((e) => email === e.email && password === e.password);
     if (employeeFound) {
       setUser("employee");
        }
     }

  return <div>
    {!user ? <Login onlineUser={onlineUser}/> : (user === "employee" ? <EmployeeDashboard/> : <AdminDashboard />)}
  </div>
}

export default App
