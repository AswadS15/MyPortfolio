export default function Header() {
  return (
    <>
      <header className="relative w-full border-b-2">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-10 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
              LOGO
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-6 sm:gap-10 lg:gap-16">
            {/* Menu links - hidden on small screens */}
            <div className="hidden md:flex items-center gap-6 lg:gap-10 font-semibold">
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

            {/* Button */}
            <button className="hidden md:flex lg:px-9 lg:py-4 px-6 py-3 rounded-full border-2  text-primary hover:bg-primary hover:text-secondary transition-all ">
              <span className="text-sm font-bold">Mulai Aplikasi</span>
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}
