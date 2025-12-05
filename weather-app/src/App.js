import MainLayout from "./component/layout/MainLayout";

export default function App() {
  return (
    <div className="min-h-screen bg-[#e2dc88]">
      {/*<header>header</header>*/}
      <main className="flex justify-center items-center h-screen">
        <MainLayout />
      </main>
    </div>
  );
}
