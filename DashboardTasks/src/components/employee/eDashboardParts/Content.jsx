import { useContext } from "react"
import { AuthContext } from "../../../context/credentials"

const Content = () => {
  const dataa = useContext(AuthContext)
  const activeTasks = dataa.task.filter(elem => elem.active);
  const inactiveTasks = dataa.task.filter(elem => !elem.active);
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
          elem.newTask
            ? "bg-yellow-500"
            : elem.completed
            ? "bg-red-500"
            : elem.accepted
            ? "bg-green-500"
            : "bg-blue-500" 
  } h-[360px] rounded-lg w-[300px] hide-scrollbar`}>
    <div className="flex justify-between items-center p-3">
      <span className="bg-red-700 rounded-md px-3 py-1">{elem.active ? 
      "Active" : "Time Over"}</span>
      <p>{elem.date}</p>
    </div>
    <div className="bg-red-700 rounded-md px-3 py-1 ml-3 w-[240px] h-[34px] overflow-auto">
<span className="font-bold">Catogary :</span> {elem.Catogary}
    </div>
    <div className="p-3 h-[260px] overflow-auto ">
      <h1  className=" font-bold text-[27px] mb-2">{elem.heading}</h1>
      <p>
      {elem.description}
      </p>
    </div>
    {elem.active ? (
    elem.newTask ? (
      <div>
        <button className="bg-red-700 rounded-md px-3 py-1 ml-2 absolute bottom-2">Accept Task</button>
      </div>
    ) : elem.accepted ? (
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