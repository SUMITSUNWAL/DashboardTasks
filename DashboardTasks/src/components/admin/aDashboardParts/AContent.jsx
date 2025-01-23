import { useContext } from "react"
import { AuthContext } from "../../../context/credentials"

const AContent = () => {
  const dataa = useContext(AuthContext);
  console.log(dataa);
  return (
    <div className="mx-12 mt-6 bg-gray-800 overflow-y-auto h-[200px] hide-scrollbar relative">
      <div className="flex justify-between bg-red-700 py-3 px-3 rounded-md text-[20px] sticky top-0">
        <div className="bg-red-500 p-2 rounded-md w-[200px]  flex justify-center">Employee Name</div>
        <div className="bg-red-500 p-2 rounded-md w-[200px]  flex justify-center">Working On</div>
        <div className="bg-red-500 p-2 rounded-md w-[200px]  flex justify-center">Completed</div>
        <div className="bg-red-500 p-2 rounded-md w-[200px] flex justify-center">Failed</div>
      </div>
      {dataa.employeeData.map((elem,idx)=>{
        return <EmployeeCards elem={elem} key={idx} />
      })}
    </div>
  )
}

export default AContent

function EmployeeCards({elem}){
  return <div className="p-2">
        <div className="flex justify-between border border-lime-400 bg-black py-3 px-3 rounded-md text-[20px]">
          <p className="w-[200px]  flex justify-center">{elem.name}</p>
          <p className="w-[200px]  flex justify-center">{elem.workSummary.currentlyWorkingOn} projects</p>
          <p className="w-[200px]  flex justify-center">{elem.workSummary.completed}</p>
          <p className="w-[200px]  flex justify-center">{elem.workSummary.failed}</p>
        </div> 
      </div>
}