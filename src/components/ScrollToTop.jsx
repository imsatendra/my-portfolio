import React ,{ useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  if (!visible) return null;
  return (
    <button onClick={() => window.scrollTo({top:0, behavior:"smooth"})} className="fixed bottom-6 right-6 z-40 rounded-full bg-cyan-400 p-3 text-slate-950 shadow-xl shadow-cyan-500/20">
      <ArrowUp size={20}/>
    </button>
  );
}