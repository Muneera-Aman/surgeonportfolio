
import Reveal from "../components/Reveal";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";

export default function Services() {
  return (
    <>
      <section className="bg-[#edf7fa] py-24">
        <div className="container-wide">
          <span className="whatoffer">
            OUR SERVICES
          </span>

          <h1 className="mt-5 max-w-3xl text-5xl font-semibold text-[#09233b] md:text-7xl">
            Specialist consultations, centered on you.
          </h1>

          <p className="mt-6 max-w-xl leading-7 text-slate-600">
            Explore the areas of neurosurgical consultation
            offered in this project overview.
          </p>
        </div>
      </section>

      <section className="section-pad container-wide">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal
              key={service.num}
              delay={index * 0.08}
            >
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <p className="mt-10 rounded-xl bg-[#edf7fa] p-5 text-sm leading-7 text-slate-600">
          Services are presented for informational purposes.
          Availability, procedures, and treatment suitability
          must be confirmed directly with the clinic.
        </p>
      </section>
    </>
  );
}
