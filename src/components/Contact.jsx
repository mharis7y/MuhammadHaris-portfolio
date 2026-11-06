"use client";

import React, { useState } from "react";
import { contactData } from "../data/portfolioData";
import { SectionHeader } from "./SectionHeader";
import { Separator } from "./Separator";
import { BracketButton } from "./BracketButton";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    website: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ submitting: false, submitted: false, error: "Please fill out all required fields (*)." });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus({
          submitting: false,
          submitted: false,
          error: data.error || "Something went wrong. Please try again.",
        });
        return;
      }

      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: "", email: "", phone: "", message: "", website: "" });
    } catch {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Network error. Please check your connection and try again.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full py-16 md:py-24"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, rgba(26,21,21,0) 0%, rgba(1,1,1,.16) 100%), #FFFFFF",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col items-center">
        {/* Section Header */}
        <SectionHeader title={contactData.title} width="367px" />

        {/* Contact Paragraph */}
        <p className="font-body font-normal text-[15px] leading-[22px] md:leading-[25px] text-black text-center max-w-[763px] mt-2 mb-6">
          {contactData.paragraph}
        </p>

        {/* Direct Contact Info */}
        <div className="flex flex-wrap items-center justify-center gap-6 font-ui text-[14px] text-black font-semibold mb-2">
          <a
            href={`mailto:${contactData.email}`}
            className="hover:underline flex items-center gap-2"
          >
            <span>✉</span> {contactData.email}
          </a>
          <span>•</span>
          <a
            href={`tel:${contactData.phone}`}
            className="hover:underline flex items-center gap-2"
          >
            <span>📞</span> {contactData.phone}
          </a>
          <span>•</span>
          <span>📍 {contactData.location}</span>
        </div>

        {/* Separator */}
        <Separator color="black" />

        {/* Form Container (Field width ≈ 609px, centered) */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[609px] flex flex-col items-center mt-6 md:mt-10"
        >
          {/* Status Alert */}
          {status.error && (
            <div className="w-full p-4 mb-6 bg-red-100 border-l-4 border-red-500 text-red-700 font-ui text-[14px]">
              {status.error}
            </div>
          )}

          {status.submitted && (
            <div className="w-full p-4 mb-6 bg-green-100 border-l-4 border-green-500 text-green-800 font-ui text-[14px] text-center">
              Thank you! Your message has been received. I will get back to you promptly.
            </div>
          )}

          {/* Honeypot: hidden from humans, bots tend to fill it */}
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="absolute -left-[9999px] w-px h-px opacity-0"
          />

          {/* Field 1: Name */}
          <div className="w-full mb-10 md:mb-12">
            <input
              type="text"
              name="name"
              id="contact-name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="ENTER YOUR NAME*"
              className="w-full h-[48px] bg-transparent border-t-0 border-r-0 border-l-[5px] border-b-[5px] border-black pl-[15px] pr-3 font-ui font-bold text-[14px] leading-[17px] tracking-[0.04em] text-black placeholder-[#8B8B8B] uppercase focus:outline-none focus:border-black/70 transition-colors"
            />
          </div>

          {/* Field 2: Email */}
          <div className="w-full mb-10 md:mb-12">
            <input
              type="email"
              name="email"
              id="contact-email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="ENTER YOUR EMAIL*"
              className="w-full h-[48px] bg-transparent border-t-0 border-r-0 border-l-[5px] border-b-[5px] border-black pl-[15px] pr-3 font-ui font-bold text-[14px] leading-[17px] tracking-[0.04em] text-black placeholder-[#8B8B8B] uppercase focus:outline-none focus:border-black/70 transition-colors"
            />
          </div>

          {/* Field 3: Phone */}
          <div className="w-full mb-10 md:mb-12">
            <input
              type="tel"
              name="phone"
              id="contact-phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="PHONE NUMBER"
              className="w-full h-[48px] bg-transparent border-t-0 border-r-0 border-l-[5px] border-b-[5px] border-black pl-[15px] pr-3 font-ui font-bold text-[14px] leading-[17px] tracking-[0.04em] text-black placeholder-[#8B8B8B] uppercase focus:outline-none focus:border-black/70 transition-colors"
            />
          </div>

          {/* Field 4: Message (Textarea ≈ 184px high) */}
          <div className="w-full mb-12 md:mb-16">
            <textarea
              name="message"
              id="contact-message"
              required
              rows={6}
              value={formData.message}
              onChange={handleChange}
              placeholder="YOUR MESSAGE*"
              className="w-full min-h-[160px] md:min-h-[184px] bg-transparent border-t-0 border-r-0 border-l-[5px] border-b-[5px] border-black p-[15px] font-ui font-bold text-[14px] leading-[20px] tracking-[0.04em] text-black placeholder-[#8B8B8B] uppercase focus:outline-none focus:border-black/70 transition-colors resize-y"
            />
          </div>

          {/* SUBMIT Bracket Button (Bars 3px x 45px, black, 197px wide) */}
          <div>
            <BracketButton
              type="submit"
              variant="submit"
              theme="dark-text"
              disabled={status.submitting}
            >
              {status.submitting ? "SENDING..." : "SUBMIT"}
            </BracketButton>
          </div>
        </form>
      </div>
    </section>
  );
}
