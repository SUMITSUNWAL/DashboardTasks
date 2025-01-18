import { useState } from "react";

const Login = ({onlineUser}) => {
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitHandler(e){
    e.preventDefault();
  }

  function submit(){
    console.log(email);
    console.log(password);
    onlineUser(email,password);
    setEmail("");
    setPassword("");
  }

  return (
  <div className="flex justify-center items-center h-screen">
    <div className="border border-green-600 p-10 rounded-md">
      <form onSubmit={(e)=>{
        submitHandler(e);
      }} className="flex flex-col">
        <input type="text" placeholder="Enter your email" className="text-[20px] border border-green-600 focus:outline-none focus:border-green-700 bg-transparent p-2 pl-5 rounded-3xl" required 
        value={email} onChange={(e)=>{
        setEmail(e.target.value);
        }}/>
        <input type="text" placeholder="Enter password" className="text-[20px] border border-green-600 focus:outline-none focus:border-green-700 bg-transparent p-2 pl-5 rounded-3xl mt-4" required 
        value={password} onChange={(e)=>{
        setPassword(e.target.value);
        }}/>
        <button className="font-bold text-[20px] bg-green-700 rounded-3xl p-1 mt-8 hover:bg-green-800" 
        onClick={submit}>Log in</button>
      </form>
    </div>
  </div>
  )
}

export default Login