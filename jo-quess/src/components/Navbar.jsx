import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 w-full h-24 bg-[#323F32] flex items-center z-50">
      <div className="flex justify-between items-center w-full px-8 py-4">
        <h3 className="font-mate text-[#F5F5F5]/90 text-3xl font-medium md:hidden">J.Q.</h3>
        <h3 className="hidden md:block font-mate text-[#F5F5F5]/90 text-3xl font-medium">Josianne Quessy | Ostéopathe</h3>
        <Button
          url="https://www.gorendezvous.com/en/josiannequessy"
          color="#be7a0e"
          text="Prendre rendez-vous"
        />
      </div>
    </nav>
  );
};

export default Navbar;
