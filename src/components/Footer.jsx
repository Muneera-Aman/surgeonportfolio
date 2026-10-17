
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowUpRight,
  MapPin,
  Phone,
} from "lucide-react";

// ========================================
// Footer Navigation Links
// ========================================

const footerLinks = [
  { label: "Home", url: "/" },
  { label: "About the Doctor", url: "/about" },
  { label: "Medical Services", url: "/services" },
  { label: "Appointments", url: "/appointment" },
  { label: "Contact", url: "/contact" },
];

// ========================================
// Footer Component
// ========================================

export default function Footer() {
  return (
    <footer className="bg-[#071d35] text-white">

      {/* Main Footer Content */}
      <div className="container-wide grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr]">

        {/* Doctor Information */}
        <div>
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <Activity className="text-[#6cc7de]" />

            <strong>
              DR. KHALID KHAN ZADRAN
            </strong>
          </Link>

          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
            Consultant Neurosurgeon and Brain & Spine Specialist.
            Professional consultations in Kabul, Afghanistan.
          </p>
        </div>

        {/* Explore Links */}
        <div>
          <h4 className="mb-5 text-sm font-bold">
            Explore
          </h4>

          {footerLinks.map((item) => (
            <Link
              key={item.url}
              to={item.url}
              className="mb-3 block text-sm text-slate-400 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="mb-5 text-sm font-bold">
            Contact
          </h4>

          {/* Address */}
          <p className="mb-4 flex items-start gap-3 text-sm text-slate-400">
            <MapPin size={17} />
            Rifah Medical Complex, Kabul, Afghanistan
          </p>

          {/* Phone Number */}
          <a
            href="tel:+93787654751"
            className="flex gap-3 text-sm text-slate-400 hover:text-white"
          >
            <Phone size={17} />
            +93 78 765 4751
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      {/* ========================================
          Bottom Footer
      ======================================== */}

      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col justify-between gap-3 py-6 text-xs text-slate-500 sm:flex-row">

          {/* Copyright */}
          <span>
            © {new Date().getFullYear()} Demonstrated by Muneera Aman.
            Year 2026.
          </span>

          {/* Disclaimer */}
          <span>
            Not for emergencies · No patient data is stored
          </span>

        </div>
      </div>
    </footer>
  );
}
