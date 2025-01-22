import { useContext } from "react"
import { AuthContext } from "../../../context/credentials"

const Content = () => {
  const dataa = useContext(AuthContext)
  const activeTasks = dataa.employeeData.filter(elem => elem.task.active);
  const inactiveTasks = dataa.employeeData.filter(elem => !elem.task.active);
  return (
    <div className="flex mx-12 justify-between overflow-auto gap-12 scroll">
       {activeTasks.map((elem, idx) => (
        <BodyContent key={idx} elem={elem} />
      ))}

      {inactiveTasks.map((elem, idx) => (
        <BodyContent key={idx} elem={elem} />
      ))}
    </div>
  )
}

function BodyContent({elem}){
 return <div className="mt-10 relative">
  <div className={` ${
          elem.task.newTask
            ? "bg-yellow-500"
            : elem.task.completed
            ? "bg-red-500"
            : elem.task.accepted
            ? "bg-green-500"
            : "bg-blue-500" 
  } h-[360px] rounded-lg w-[300px] hide-scrollbar`}>
    <div className="flex justify-between items-center p-3">
      <span className="bg-red-700 rounded-md px-3 py-1">{elem.task.active ? 
      "Active" : "Time Over"}</span>
      <p>{elem.task.date}</p>
    </div>
    <div className="p-3 h-[260px] overflow-auto ">
      <h1  className=" font-bold text-[27px] mb-2">{elem.task.heading}</h1>
      <p>
      {elem.task.description}
      </p>
    </div>
    {elem.task.active ? (
    elem.task.newTask ? (
      <div>
        <button className="bg-red-700 rounded-md px-3 py-1 ml-2 absolute bottom-2">Accept Task</button>
      </div>
    ) : elem.task.accepted ? (
      <div>
        <button className="bg-red-700 rounded-md px-3 py-1 ml-2 absolute bottom-2">Completed ?</button>
        <button className="bg-red-700 rounded-md px-3 py-1 ml-2 absolute bottom-2 ml-[125px]">Failed ?</button>
      </div>
    ) : null
  ) : null}
  </div>
 </div>
}
export default Content