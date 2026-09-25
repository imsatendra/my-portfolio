import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/projects", "Projects"],
  ["/resume", "Resume"],
  ["/contact", "Contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-extrabold"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-cyan-400 text-slate-950">
            <Code2 size={20} />
          </span>
          Satendra<span className="text-cyan-300">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm font-medium transition ${isActive ? "text-cyan-300" : "text-slate-300 hover:text-white"}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          className="rounded-xl border border-white/10 p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 md:hidden"
          >
            <div className="container-page flex flex-col gap-2 py-4">
              {links.map(([to, label]) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-slate-300 hover:bg-white/5 hover:text-cyan-300"
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
