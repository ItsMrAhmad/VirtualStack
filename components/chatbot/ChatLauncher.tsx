"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

const ChatbotWidget = dynamic(() => import("@/components/chatbot/ChatbotWidget"), {
  ssr: false,
});

export default function ChatLauncher() {
  const [isLoaded, setIsLoaded] = useState(false);

  if (isLoaded) {
    return <ChatbotWidget initialOpen={true} />;
  }

  return (
    <aside
      aria-label="Customer Support Assistant"
      className="fixed bottom-20 lg:bottom-6 right-4 lg:right-6 z-50 flex flex-col items-end gap-2"
    >
      {/* Floating label */}
      <span className="bg-white text-[#071A2B] text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-[#DDE5EA] whitespace-nowrap animate-fade-in">
        Need Help? 💬
      </span>

      {/* Chat button */}
      <button
        type="button"
        onClick={() => setIsLoaded(true)}
        aria-label="Open Virtual Stack Assistant"
        className="group relative w-14 h-14 rounded-full bg-[#08A9E6] hover:bg-[#0698D0] shadow-[0_4px_24px_rgba(8,169,230,0.45)] hover:shadow-[0_4px_28px_rgba(8,169,230,0.6)] hover:scale-105 transition-all duration-200 flex items-center justify-center"
      >
        {/* Pulse ring animation */}
        <span className="absolute inset-0 rounded-full bg-[#08A9E6]/40 animate-ping-slow" />

        {/* Chat bubble icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 text-white relative z-10"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>

        {/* Online indicator */}
        <span className="absolute top-0.5 right-0.5 w-3 h-3 rounded-full bg-[#12C98A] border-2 border-[#08A9E6] z-10" />
      </button>
    </aside>
  );
}
