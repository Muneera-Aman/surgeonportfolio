import Reveal from "../components/Reveal";

const images = [
  "checkingpatient.jpg", "skull.jpg", "skullteaching.jpg",
  "surgery.jpg", "teaching.jpg", "surgeryphoto.jfif",
];

export default function Gallery() {
  return (
    <>
      <section className="bg-[#edf7fa] py-20"><div className="container-wide"><span className="eyebrow">GALLERY</span><h1 className="mt-5 text-5xl font-semibold text-[#09233b] md:text-7xl">Medical photography.</h1><p className="mt-5 text-slate-600">Illustrative imagery for this student frontend demonstration.</p></div></section>
      <section className="section-pad container-wide grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((file, index) => (
          <Reveal key={file} delay={index * 0.06}>
            <img src={`/images/${file}`} alt={`Illustrative medical gallery image ${index + 1}`} loading="lazy" className="aspect-square w-full rounded-3xl bg-[#dceef3] object-cover" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = "/images/medical-placeholder.svg"; }} />
          </Reveal>
        ))}
      </section>
    </>
  );
}
