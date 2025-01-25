import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../context/credentials";

const AHero = () => {
  const localStorageData = useContext(AuthContext)

  const [title,setTitle] = useState("");
  const [date,setDate] = useState("");
  const [categary,setCategary] = useState("");
  const [description,setDescription] = useState("");

  function dataFlow(e){
    e.preventDefault();
    if(!title || !date || !categary || !description) {
      alert("All fields are required!");
      return;
    }
    localStorageData.task.push({
      "active": true,
      "Catogary": categary,
      "date": date,
      "heading": title,
      "description": description,
      "newTask": true,
      "completed": false,    
      "accepted": false,      
      "failed": false 
    })

    localStorage.setItem("task",JSON.stringify(localStorageData.task))

    setTitle("");
    setDate("");
    setCategary("");
    setDescription("");

    alert("Task Created matar basha chal chalke dikha")
  }
  return (
    <div className="mx-12 bg-gray-800">
    <form className=" flex justify-between" onSubmit={(e)=>{
      dataFlow(e);
    }}>
      <div className="w-[500px] ml-5 py-5">
        <div className="flex flex-col">
          <label>Task Title </label> 
            <input type="text" placeholder="Make a UI design" className="py-1 pl-3 bg-gray-800 border border-white rounded focus:outline-none focus:border-gray-300" value={title}
            onChange={(e)=>{
              setTitle(e.target.value);
            }}/>
        </div>
        <div className="flex flex-col mt-5">
          <label>Date </label> 
            <input type="date" className="py-1 pl-3 bg-gray-800 border border-white rounded focus:outline-none focus:border-gray-300" value={date}
            onChange={(e)=>{
              setDate(e.target.value);
            }}/>
        </div>
        <div className="flex flex-col mt-5">
          <label>Category</label> 
            <input type="text" placeholder="Design, Dev etc" className="py-1 pl-3 bg-gray-800 border border-white rounded focus:outline-none focus:border-gray-300" value={categary}
            onChange={(e)=>{
              setCategary(e.target.value);
            }}/>
        </div>
      </div>
      
      <div className="flex flex-col pt-5 pb-5">
        <label>Description</label>
        <textarea className="w-[500px] h-[200px] p-2 rounded-md bg-gray-800 border border-white focus:outline-none focus:border-gray-300" value={description}
        onChange={(e)=>{
          setDescription(e.target.value);
        }}></textarea>
        <button className="bg-green-700 rounded-md p-3 mt-6 hover:bg-green-800">Create Task</button>
      </div>
      </form>
  </div>
  )
}

export default AHero