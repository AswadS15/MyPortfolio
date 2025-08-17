import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  return (
    <>
      <div className="md:w-7xl w-full h-screen mx-auto overflow-x-hidden text-primary">
        <Header />
        <div className="w-full justify-between gap-6 relative">
          <div className=" inline-flex min-w-max relative gap-9">
            <a
              href=""
              className="relative flex items-center text-secondary text-sm gap-3"
            >
              <span className="py-3 p-7  bg-primary">Halo saya adalah</span>
              <span className="py-3 p-7 bg-amber-300">nice</span>
            </a>
            <a
              href=""
              className="relative flex items-center text-secondary text-sm gap-3"
            >
              <span className="py-3 p-7 bg-amber-200">Halo</span>
              <span className="py-3 p-7 bg-amber-300">nice</span>
            </a>
            <a
              href=""
              className="relative flex items-center text-secondary text-sm gap-3"
            >
              <span className="py-3 p-7 bg-amber-200">Halo</span>
              <span className="py-3 p-7 bg-amber-300">nice</span>
            </a>
          </div>
        </div>

        <ThemeToggle />
      </div>
    </>
  );
}
