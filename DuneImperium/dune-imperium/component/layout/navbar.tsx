function CurrentPlayer() {
  return (
    <div className="flex flex-row items-center font-bold">
      <h1>Current player to play : </h1>
      <h1>Mr Chong</h1>
    </div>
  );
}
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-16 z-10 flex items-center pl-4 pr-4 bg-[#1E1E1E]">
      <div className="w-full flex justify-between">
        <CurrentPlayer />
        <button className="h-auto rounded-xl px-4 py-2 font-mate bg-amber-800">Confirmation</button>
      </div>
    </nav>
  );
}
