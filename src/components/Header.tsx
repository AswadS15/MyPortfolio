export default function Header() {
  return (
    <>
      <header className="relative w-full border-b-2">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-10 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1C352D]">
              LOGO
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-6 sm:gap-10 lg:gap-16">
            {/* Menu links - hidden on small screens */}
            <div className="hidden lg:flex items-center gap-6 lg:gap-10 font-semibold">
              <a
                href="#"
                className="text-base sm:text-lg lg:text-xl hover:text-[#A6B28B] transition"
              >
                Home
              </a>
              <a
                href="#"
                className="text-base sm:text-lg lg:text-xl hover:text-[#A6B28B] transition"
              >
                About
              </a>
              <a
                href="#"
                className="text-base sm:text-lg lg:text-xl hover:text-[#A6B28B] transition"
              >
                Details
              </a>
            </div>

            {/* Button */}
            <button className="px-4 py-2 rounded-full border-2  text-primary hover:bg-[#1C352D] hover:text-[#A6B28B] transition-all">
              <span className="text-xs font-bold">Mulai Aplikasi</span>
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}
