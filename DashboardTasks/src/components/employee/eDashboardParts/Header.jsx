const Header = () => {
  return<div className="flex justify-between mx-12 my-5 items-center">
    <div>
    <p className="text-3xl">Hello</p>
      <span className="font-bold text-4xl">Sumit</span>
      <span className="text-4xl relative  top-[-4px]">&#x1F44B;</span>
    </div>
    <div>
      <button className="bg-red-500 px-4 text-xl py-1 rounded-sm hover:bg-red-700">Log Out</button>
    </div>
  </div>
}

export default Header