const Hero = () => {
  return (
    <div className="flex justify-between mx-12 mt-[50px]">
      <div className="bg-yellow-500 p-7 w-[300px] rounded-lg">
        <p className="text-3xl font-bold">1</p>
        <p className="font-bold text-[20px]">New Task</p>
      </div>
      <div className="bg-red-500 p-7 w-[300px] rounded-lg">
        <p className="text-3xl font-bold">3</p>
        <p className="font-bold text-[20px]">Completed Task</p>
      </div>
      <div className="bg-green-500 p-7 w-[300px] rounded-lg text-black">
        <p className="text-3xl font-bold">0</p>
        <p className="font-bold text-[20px]">Accepted Task</p>
      </div>
      <div className="bg-blue-500 p-7 w-[300px] rounded-lg">
        <p className="text-3xl font-bold">0</p>
        <p className="font-bold text-[20px]">Failed Task</p>
      </div>
    </div>
  )
}

export default Hero