import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";

export default function News() {
  return (
    <>
      <section className="bg-[#edf7fa] py-20"><div className="container-wide"><span className="eyebrow">NEWS & UPDATES</span><h1 className="mt-5 text-5xl font-semibold text-[#09233b] md:text-7xl">Latest updates.</h1><p className="mt-5 text-slate-600">Clinic announcements can be added here once verified.</p></div></section>
      <section className="section-pad container-wide"><Reveal className="max-w-2xl rounded-3xl border border-[#e0ebf0] bg-white p-9"><h2 className="text-2xl font-bold">No announcements published yet</h2><p className="mt-4 leading-7 text-slate-600">This demonstration does not publish unverified medical news or clinic announcements. Contact the clinic for current information.</p><Link to="/contact" className="btn-primary mt-7">Contact the clinic <ArrowUpRight size={16} /></Link></Reveal></section>
    </>
  );
}
