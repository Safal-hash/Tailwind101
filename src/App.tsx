
import "./App.css";
import Container from "./components/Container";
import Navbar from "./components/navbar";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div className="flex flex-col items-center relative  h-screen [background:radial-gradient(125%_100%_at_50%_0%,#FFF_6.32%,#E0F0FF_29.28%,#E7EFFD_68.68%,#FFF_100%)]">
        <div className="max-w-5xl mx-auto absolute inset-0 w-full h-full pointer-events-none">
          <div className=" absolute inset-y-0 left-0 h-full w-px bg-linear-to-b from-neutral-300 to-neutral-100 " />
          <div className=" absolute inset-y-0 right-0 h-full w-[.5px] bg-linear-to-b from-neutral-300 to-neutral-100" />
        </div>

        <Container>
          <Navbar />
          <Home />
        </Container>
        <div className="relative w-full  ">
          <div className="absolute inset-x-0 h-px w-full top-0 bg-linear-to-r from-neutral-200 to-neutral-100" />
          <div className="max-w-5xl mx-auto py-4">
            <img
              src="hero.webp"
              alt=""
            
              className=" w-full rounded-2xl object-cover object-top-left border border-neutral-200 shadow-md mask-b-from-0% to-50%  ] "
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
