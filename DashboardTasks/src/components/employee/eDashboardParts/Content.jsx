const Content = () => {
  return (
    <div className="flex mx-12 justify-between overflow-auto gap-12 scroll">
      <BodyContent />
      <BodyContent />
      <BodyContent />
      <BodyContent />
      <BodyContent />
      <BodyContent />
      <BodyContent />
    </div>
  )
}

function BodyContent(){
 return <div className="mt-10">
  <div className="bg-blue-400 h-[400px] rounded-lg w-[300px] overflow-auto hide-scrollbar">
    <div className="flex justify-between items-center p-3">
      <span className="bg-red-700 rounded-md px-3 py-1">High</span>
      <p>9 Jan 2025</p>
    </div>
    <div className="p-3">
      <h1  className=" font-bold text-[27px] mb-2">Making the Project</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nihil eos, doloribus iusto sed facere maxime libero exercitationem. Maxime sequi nisi, et accusamus totam cum nostrum quo aliquam veniam cumque.
      </p>
    </div>
  </div>
 </div>
}
export default Content