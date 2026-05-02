"use client";

import { useState } from "react";

/**
 * ContactForm — split-layout contact section.
 * Left: heading + contact details + optional map.
 * Right: name / email / phone / message form.
 */
export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire to backend / email service
    setSubmitted(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

      {/* ── Left — Info ── */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-brand-blue" />
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-brand-blue">
            Contact Us
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-gray-900 leading-tight mb-5">
          Get in Touch
        </h2>
        <p className="text-gray-500 text-base lg:text-lg leading-relaxed mb-10">
          Contact us to discuss your project requirements or request a consultation.
          Our team is ready to support your next project.
        </p>

        {/* Contact details */}
        <div className="space-y-6 mb-10">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-sm bg-section-alt border border-gray-100 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-bold tracking-wider uppercase text-gray-400 mb-1">Phone</div>
              <a href="tel:+966123456789" className="text-gray-800 font-semibold hover:text-brand-blue transition-colors">
                +966 123 456 789
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-sm bg-section-alt border border-gray-100 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-bold tracking-wider uppercase text-gray-400 mb-1">Email</div>
              <a href="mailto:info@gulfsolidarity.com" className="text-gray-800 font-semibold hover:text-brand-blue transition-colors">
                info@gulfsolidarity.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-sm bg-section-alt border border-gray-100 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <div className="text-xs font-bold tracking-wider uppercase text-gray-400 mb-1">Address</div>
              <address className="not-italic text-gray-800 font-semibold leading-relaxed">
                Gulf Solidarity Contracting<br />
                Industrial Area, Dammam<br />
                Saudi Arabia
              </address>
            </div>
          </div>
        </div>

        {/* Google Maps embed */}
        <div className="rounded-sm overflow-hidden border border-gray-100 shadow-sm h-52">
          <iframe
            title="Gulf Solidarity Contracting Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.5!2d50.1!3d26.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zRGFtbWFtIEluZHVzdHJpYWwgQXJlYQ!5e0!3m2!1sen!2ssa!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* ── Right — Form ── */}
      <div className="bg-section-alt rounded-sm border border-gray-100 p-8 lg:p-10">
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-14 h-14 rounded-full bg-green-50 border border-green-100 flex items-center justify-center mb-5">
              <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent</h3>
            <p className="text-gray-500 text-sm">
              Thank you for reaching out. Our team will contact you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-xs font-bold tracking-wider uppercase text-gray-500 mb-2">
                  Full Name <span className="text-brand-red">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Ahmed Al-Rashid"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold tracking-wider uppercase text-gray-500 mb-2">
                  Email <span className="text-brand-red">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="ahmed@company.com"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-bold tracking-wider uppercase text-gray-500 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+966 5XX XXX XXXX"
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold tracking-wider uppercase text-gray-500 mb-2">
                  Message <span className="text-brand-red">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Describe your project requirements or inquiry..."
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue/30 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-red text-white font-semibold text-sm tracking-wide rounded-sm hover:bg-red-700 active:bg-red-800 transition-colors"
            >
              Send Message
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>

            <p className="text-xs text-gray-400 text-center leading-relaxed">
              By submitting, you agree to be contacted by our team. We do not share your information with third parties.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
