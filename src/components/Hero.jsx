"use client";

import React from "react";
import Image from "next/image";
import { heroData } from "../data/portfolioData";
import { Icon } from "./Icons";

export function Hero() {
  return (
    <section
      id="top"
      className="relative w-full min-h-[640px] md:h-[1022px] bg-black overflow-hidden flex flex-col justify-end md:justify-center"
    >
      {/* ================= DESKTOP VIEW ================= */}
      {/* Grey diagonal panel */}
      <div className="hidden md:block absolute inset-0 w-full h-full pointer-events-none">
        <div
          className="absolute inset-0 bg-[#D7D7D7]"
          style={{
            clipPath: "polygon(0 0, 50% 0, 40% 100%, 0 100%)",
          }}
        />
      </div>

      <div className="hidden md:flex relative z-10 w-full h-full items-center justify-between">
        {/* Left Content Area (Centered over the grey panel) */}
        <div className="w-[46%] h-full flex flex-col items-center justify-center text-center select-none pl-8 lg:pl-16 pr-4">
          <div className="flex flex-col items-center">
            {/* Greeting */}
            <span className="font-hero font-bold text-[36px] lg:text-[40px] leading-[47px] text-black">
              {heroData.greeting}
            </span>

            {/* Name */}
            <h1 className="font-hero font-bold text-[56px] lg:text-[72px] xl:text-[80px] leading-[1.1] text-black my-2 tracking-tight">
              {heroData.name}
            </h1>

            {/* Role */}
            <p className="font-hero font-extrabold text-[20px] lg:text-[25px] leading-[29px] text-[#919191] tracking-wide">
              {heroData.role}
            </p>
          </div>

          {/* Social Tiles Row */}
          <div className="flex items-center gap-[31px] mt-12">
            {heroData.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target={social.url.startsWith("http") ? "_blank" : undefined}
                rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-[61px] h-[56px] bg-[#C4C4C4] rounded-[2px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center transition-all duration-200 hover:bg-black hover:text-white text-black hover:-translate-y-1"
                aria-label={social.name}
              >
                <Icon name={social.icon} size={28} color="currentColor" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Portrait: transparent cutout, anchored to the bottom edge of the hero */}
        <div className="relative w-[54%] h-full flex items-end justify-center">
          {/* Soft backlight so the dark suit separates from the black background */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[88%] aspect-square rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(closest-side, rgba(120,140,190,0.28) 0%, rgba(120,140,190,0.10) 55%, rgba(0,0,0,0) 100%)",
            }}
          />
          <div className="relative w-[92%] max-w-[760px] aspect-[1379/1614]">
            <Image
              src={heroData.photo}
              alt="Muhammad Haris - React Native Developer"
              fill
              preload
              unoptimized
              className="object-contain object-bottom select-none"
            />
          </div>
        </div>
      </div>

      {/* ================= MOBILE VIEW (matches 'mobile landing.png') ================= */}
      <div className="block md:hidden relative w-full h-[100dvh] bg-black overflow-hidden">
        {/* Portrait anchored to the bottom, sitting behind the slanted band */}
        <div className="absolute bottom-0 left-0 right-0 h-[80%] flex items-end justify-center">
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] aspect-square rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(closest-side, rgba(120,140,190,0.28) 0%, rgba(0,0,0,0) 100%)",
            }}
          />
          <div className="relative h-full w-full max-w-[520px]">
            <Image
              src={heroData.photo}
              alt="Muhammad Haris"
              fill
              loading="eager"
              unoptimized
              className="object-contain object-bottom select-none"
            />
          </div>
        </div>

        {/* Slanted translucent bottom band */}
        <div
          className="absolute bottom-0 left-0 right-0 z-20 bg-[#5F6368]/90 backdrop-blur-md px-6 py-6"
          style={{
            clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0 100%)",
          }}
        >
          <div className="flex items-center justify-between pt-4">
            {/* Left text */}
            <div className="flex flex-col select-none pr-4">
              <span className="font-hero font-bold text-[18px] text-white leading-tight">
                {heroData.greeting}
              </span>
              <span className="font-hero font-bold text-[26px] sm:text-[30px] text-white leading-tight mt-1">
                {heroData.name}
              </span>
              <span className="font-hero font-extrabold text-[12px] sm:text-[14px] text-white/90 uppercase tracking-wider mt-1">
                {heroData.role}
              </span>
            </div>

            {/* Right stacked white social icons (no grey tiles) */}
            <div className="flex flex-col gap-4 items-center">
              {heroData.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith("http") ? "_blank" : undefined}
                  rel={social.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-white hover:text-white/70 transition-colors p-1"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={24} color="#FFFFFF" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
