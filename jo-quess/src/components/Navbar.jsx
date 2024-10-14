import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="fixed rounded-b-2xl top-0 left-0 right-0 w-full h-32 bg-[#323F32] flex items-center">
      <div className="flex justify-between items-center w-full px-8 py-4">
        <h3 className="font-mate text-[#F5F5F5]/90 text-3xl font-medium">Josianne Quessy | Ostéopathe</h3>
        <Button
          url="https://www.gorendezvous.com/en/josiannequessy"
          color="#be7a0e"
          text="Prendre un rendez-vous"
        />
      </div>
    </nav>
  );
};

export default Navbar;
