"use client";

import React, { useState, useEffect } from "react";

const rotatingUseCases = [
  "24/7 Taxi & Fleet Dispatch",
  "B2B Lead Generation & Telesales",
  "Omnichannel Customer Support",
  "Back-Office Processing & KYC",
  "Dedicated Remote Virtual Assistants",
];

export default function RotatingText() {
  const [currentCaseIndex, setCurrentCaseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCaseIndex((prev) => (prev + 1) % rotatingUseCases.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#08A9E6] min-h-[1.5rem]">
      <span className="text-[#94A3B8] font-normal">Active Operations:</span>
      <span className="key-rotating transition-all duration-300 bg-[#0A2238] px-2 py-0.5 rounded-md border border-[#08A9E6]/30 text-[#08A9E6] font-bold">
        {rotatingUseCases[currentCaseIndex]}
      </span>
    </div>
  );
}
