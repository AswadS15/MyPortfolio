import AllButton from "./AllButton";

export default function Header() {
  const handlerClick = () => {
    alert("hahahaa");
  };
  return (
    <>
      <header className="relative w-full border-b-2">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-10 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-secondary">
              LOGO
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-6 sm:gap-10 lg:gap-16">
            {/* Menu links - hidden on small screens */}
            <div className=" text-secondary hidden md:flex items-center gap-6 lg:gap-10 font-semibold">
              <a
                href="#"
                className="text-base sm:text-lg lg:text-xl  transition"
              >
                Home
              </a>
              <a
                href="#"
                className="text-base sm:text-lg lg:text-xl  transition"
              >
                About
              </a>
              <a
                href="#"
                className="text-base sm:text-lg lg:text-xl  transition"
              >
                Details
              </a>
            </div>
            <AllButton
              title="klik saya"
              className="px-9 py-4 rounded-full border border-secondary text-secondary font-bold text-sm"
              onClick={handlerClick}
            />
            <AllButton
              title="Tombol Saya Mah"
              className="px-9 py-4 rounded-full border border-secondary text-secondary font-bold text-sm"
              onClick={handlerClick}
            />
            <button className="text-5xl block lg:hidden">X</button>
          </nav>
        </div>
      </header>
    </>
  );
}
