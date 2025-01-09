const AHero = () => {
  return (
    <div className="mx-12 bg-gray-800 flex justify-between">
      <div className="w-[500px] ml-5 py-5">
        <div className="flex flex-col">
          <label>Task Title </label> 
            <input type="text" placeholder="Make a UI design" className="py-1 pl-3 bg-gray-800 border border-white rounded focus:outline-none focus:border-gray-300"/>
        </div>
        <div className="flex flex-col mt-5">
          <label>Date </label> 
            <input type="date" className="py-1 pl-3 bg-gray-800 border border-white rounded focus:outline-none focus:border-gray-300"/>
        </div>
        <div className="flex flex-col mt-5">
          <label>Asign To </label> 
            <input type="text" placeholder="Employee Name" className="py-1 pl-3 bg-gray-800 border border-white rounded focus:outline-none focus:border-gray-300"/>
        </div>
        <div className="flex flex-col mt-5">
          <label>Category</label> 
            <input type="text" placeholder="Design, Dev etc" className="py-1 pl-3 bg-gray-800 border border-white rounded focus:outline-none focus:border-gray-300"/>
        </div>
      </div>
      
      <div className="flex flex-col pt-5">
        <label>Description</label>
        <textarea className="w-[500px] h-[200px] p-2 rounded-md bg-gray-800 border border-white focus:outline-none focus:border-gray-300"></textarea>
        <button className="bg-green-700 rounded-md p-3 mt-6 hover:bg-green-800">Create Task</button>
      </div>
    </div>
  )
}

export default AHero