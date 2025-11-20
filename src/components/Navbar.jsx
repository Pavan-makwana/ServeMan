import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR  */}
      <header
        className="
        fixed top-0 left-0 w-full z-50 
        backdrop-blur-md bg-black 
        border-b border-white/10
        shadow-[0_4px_15px_rgba(0,0,0,0.45)]
      "
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* LOGO */}
          <div className="flex items-center gap-3 cursor-pointer select-none">
            <div
              className="
              w-10 h-10 flex items-center justify-center 
              rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 
              shadow-[0_0_20px_rgba(139,92,246,0.35)]
            "
            >
              <span className="text-white font-bold text-lg">S</span>
            </div>

            <span className="text-xl text-white font-semibold tracking-wide">
              ServeMan
            </span>
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-white/70">
            {["Home", "About", "Projects", "Team"].map((item) => (
              <a
                key={item}
                className="
      relative group font-medium tracking-wide 
      text-white/70 hover:text-white transition
    "
                href={`#${item.toLowerCase()}`} 
              >
                {item}
                <span
                  className="
      absolute left-0 -bottom-1 w-0 h-[2px] 
      bg-white rounded-full 
      transition-all duration-300 group-hover:w-full
    "
                ></span>
              </a>
            ))}

            <button
              className="
              px-5 py-2 rounded-lg 
              bg-white text-black font-medium
              shadow hover:shadow-xl transition
            "
            >
              Contact Us
            </button>
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            {/* Hamburger to X animation */}
            <div className="space-y-1.5">
              <span
                className={`
                block h-0.5 w-7 bg-white transition 
                ${open ? "rotate-45 translate-y-2" : ""}
              `}
              ></span>
              <span
                className={`
                block h-0.5 w-7 bg-white transition 
                ${open ? "opacity-0" : ""}
              `}
              ></span>
              <span
                className={`
                block h-0.5 w-7 bg-white transition 
                ${open ? "-rotate-45 -translate-y-2" : ""}
              `}
              ></span>
            </div>
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed top-0 right-0 h-full w-64 bg-gray-900/95 
          backdrop-blur-md border-l border-white/10 
          shadow-xl p-6 z-40 transform transition-all duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col gap-8 text-lg text-white/90 mt-12">
          {["Home", "About", "Projects", "Team"].map((item) => (
            <a
              key={item}
              className="hover:text-white transition"
              onClick={() => setOpen(false)}
              href={`#${item.toLowerCase()}`}
            >
              {item}
            </a>
          ))}

          <button
            className="
            mt-4 py-3 bg-white text-black 
            rounded-lg font-medium shadow 
            hover:shadow-xl transition
          "
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* MOBILE OVERLAY */}
      {open && (
        <div
          className="
            fixed inset-0 bg-black/50 backdrop-blur-sm 
            z-30 md:hidden
            animate-fadeIn
          "
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
