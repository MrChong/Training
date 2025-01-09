import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 h-24 bg-[#323F32] shadow-[0_6px_10px_-3px_rgba(41,41,41,0.84)] flex items-center z-50">
      <div className="flex justify-between items-center w-full px-8 py-4">
        <h3 className="font-mate text-[#F5F5F5]/90 text-3xl font-medium md:hidden">J.Q.</h3>
        <h3 className="hidden md:block font-mate text-[#F5F5F5]/90 text-3xl font-medium">Josianne Quessy | Ostéopathe</h3>
        <Button
          url="https://www.gorendezvous.com/en/josiannequessy"
          text="Prendre rendez-vous"
          style="text-[#F5F5F5]/90 bg-[#be7a0e] hover:bg-[#ab6d0c] font-medium text-lg"
        />
      </div>
    </nav>
  );
};

export default Navbar;
