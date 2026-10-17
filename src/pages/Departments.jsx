import { Brain, Activity, ScanLine } from "lucide-react";
import Reveal from "../components/Reveal";

const departments = [
  { icon: Brain, title: "Brain & Neurosurgery", text: "Information about brain-related specialist consultations." },
  { icon: Activity, title: "Spine Consultation", text: "Assessment and discussion of spine-related concerns." },
  { icon: ScanLine, title: "Nervous System", text: "Consultation for symptoms involving the nervous system." },
];

export default function Departments() {
  return (
    <>
      <section className="bg-[#edf7fa] py-20"><div className="container-wide"><span className="departments">DEPARTMENTS</span><h1 className="mt-5 text-5xl font-semibold text-[#09233b] md:text-7xl">Areas of focus.</h1><p className="mt-5 text-slate-600">Illustrative consultation categories; confirm availability with the clinic.</p></div></section>
      <section className="section-pad container-wide grid gap-6 md:grid-cols-3">
        {departments.map(({ icon: Icon, title, text }, index) => (
          <Reveal key={title} delay={index * 0.08} className="rounded-3xl border border-[#e0ebf0] bg-white p-8 shadow-sm">
            <Icon size={32} className="text-[#087ea5]" /><h2 className="mt-6 text-xl font-bold">{title}</h2><p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
          </Reveal>
        ))}
      </section>
    </>
  );
}
