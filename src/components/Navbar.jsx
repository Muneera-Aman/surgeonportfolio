import { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, Activity, ChevronDown } from "lucide-react";

const mainLinks = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  { label: "Services", url: "/services" },
  { label: "Contact", url: "/contact" },
];

const moreLinks = [
  { label: "Appointments", url: "/appointment" },
  { label: "Departments", url: "/departments" },
  { label: "Gallery", url: "/gallery" },
  { label: "News", url: "/news" },
];

const navStyle = ({ isActive }) =>
  `block rounded-lg px-3 py-2 text-sm font-semibold transition-colors ${
    isActive
      ? "bg-sky-50 text-[#087ea5]"
      : "text-slate-600 hover:bg-slate-50 hover:text-[#087ea5]"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const { pathname } = useLocation();
  const dropdownRef = useRef(null);
  const moreActive = moreLinks.some((item) => item.url === pathname);

  useEffect(() => {
    setOpen(false);
    setMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMoreOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setOpen(false);
        setMoreOpen(false);
      }
    }

    document.addEventListener("pointerdown", handleOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("pointerdown", handleOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between gap-3 px-4 sm:h-20 sm:px-6 xl:px-8">
        <Link to="/" className="flex min-w-0 shrink items-center gap-2 sm:gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#087ea5] text-white sm:h-11 sm:w-11">
            <Activity size={22} />
          </span>
          <span className="min-w-0 leading-tight">
            <strong className="block text-[11px] font-extrabold tracking-tight sm:text-[13px]">DR. KHALID KHAN ZADRAN</strong>
            <span className="block text-[9px] tracking-wide text-slate-500 sm:text-[10px] sm:tracking-[.12em]">NEUROSURGEON · BRAIN & SPINE</span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 xl:flex">
          {mainLinks.map((item) => (
            <NavLink key={item.url} to={item.url} end={item.url === "/"} className={navStyle}>{item.label}</NavLink>
          ))}
          <div ref={dropdownRef} className="relative">
            <button type="button" aria-haspopup="true" aria-expanded={moreOpen} aria-controls="more-navigation" onClick={() => setMoreOpen((prev) => !prev)}
              className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-semibold transition hover:bg-slate-50 hover:text-[#087ea5] ${moreActive ? "text-[#087ea5]" : "text-slate-600"}`}>
              More <ChevronDown size={15} className={`transition-transform ${moreOpen ? "rotate-180" : ""}`} />
            </button>
            {moreOpen && (
              <div id="more-navigation" className="absolute right-0 top-full z-50 mt-3 w-52 rounded-2xl border border-slate-100 bg-white p-2 shadow-xl">
                {moreLinks.map((item) => (
                  <NavLink key={item.url} to={item.url} onClick={() => setMoreOpen(false)} className={navStyle}>{item.label}</NavLink>
                ))}
              </div>
            )}
          </div>
        </nav>

        <Link to="/appointment" className="hidden shrink-0 items-center justify-center gap-2 rounded-full bg-[#087ea5] px-4 py-3 text-xs font-bold text-white transition hover:bg-[#066789] 2xl:inline-flex">
          Request Appointment <ArrowUpRight size={16} />
        </Link>

        <button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-controls="mobile-navigation" aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-50 xl:hidden">
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-slate-100 bg-white px-4 py-4 shadow-lg sm:px-6 xl:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {mainLinks.map((item) => (
              <NavLink key={item.url} to={item.url} end={item.url === "/"} onClick={() => setOpen(false)} className={navStyle}>{item.label}</NavLink>
            ))}
            <div className="mt-2 border-t border-slate-100 pt-3">
              <p className="px-3 pb-2 text-xs font-bold uppercase tracking-widest text-slate-400">More Pages</p>
              {moreLinks.map((item) => (
                <NavLink key={item.url} to={item.url} onClick={() => setOpen(false)} className={navStyle}>{item.label}</NavLink>
              ))}
            </div>
            <Link to="/appointment" onClick={() => setOpen(false)} className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#087ea5] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#066789]">
              Request Appointment <ArrowUpRight size={17} />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
