import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { footerData } from "@/data/rentalServices";

export default function Footer() {
  const { company, quickLinks, divisions, contact } = footerData;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-footer text-gray-300">
      {/* ── Main Grid ────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Company Overview */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-md bg-brand-blue flex items-center justify-center">
                <span className="text-white font-bold text-sm leading-none">GS</span>
              </div>
              <span className="text-white font-bold text-base tracking-wide">
                {company.name}
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {company.tagline}
            </p>
            <div className="mt-6 flex gap-3">
              {/* Social placeholders */}
              {["in", "tw", "fb"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-8 h-8 rounded-md bg-white/5 hover:bg-brand-blue flex items-center justify-center text-xs font-bold text-gray-400 hover:text-white transition-colors"
                  aria-label={s}
                >
                  {s.toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-150"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-blue shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Divisions */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Divisions
            </h4>
            <ul className="flex flex-col gap-2.5">
              {divisions.map((d) => (
                <li key={d.label}>
                  <Link
                    href={d.href}
                    className="text-sm text-gray-400 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-150"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-red shrink-0" />
                    {d.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-brand-blue shrink-0 mt-0.5" />
                {contact.address}
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-brand-blue shrink-0" />
                <a href={`tel:${contact.phone}`} className="hover:text-white transition-colors">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-brand-blue shrink-0" />
                <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={15} className="text-brand-blue shrink-0" />
                {contact.hours}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ───────────────────────────────────────── */}
      <div className="border-t border-white/8 max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
        <p>&copy; {year} GS Group. All rights reserved.</p>
        <div className="flex gap-5">
          <Link href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-gray-300 transition-colors">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}
