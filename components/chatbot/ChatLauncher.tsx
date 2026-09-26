"use client";

import React, { useState } from "react";
import Image from "next/image";
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
      className="fixed bottom-20 lg:bottom-6 right-4 lg:right-6 z-50 pointer-events-none flex flex-col items-end"
    >
      <button
        type="button"
        onClick={() => setIsLoaded(true)}
        aria-label="Open Virtual Stack Assistant"
        className="pointer-events-auto flex items-center gap-2.5 bg-[#071A2A] hover:bg-[#0C1E30] text-white border border-[#08A9E6]/40 hover:border-[#08A9E6] rounded-full p-2.5 sm:px-4 sm:py-2.5 shadow-[0_10px_25px_rgba(7,26,42,0.35)] hover:shadow-[0_10px_30px_rgba(8,169,230,0.3)] transition-all duration-200 group"
      >
        <div className="relative w-8 h-8 rounded-full bg-white flex items-center justify-center p-1.5 shrink-0 shadow-sm border border-[#08A9E6]/30">
          <Image
            src="/icon.png"
            alt="Virtual Stack"
            width={20}
            height={20}
            className="w-full h-full object-contain"
          />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#12C98A] border-2 border-[#071A2A]" />
        </div>

        <div className="hidden sm:flex flex-col text-left">
          <span className="text-xs font-bold leading-tight tracking-tight text-white group-hover:text-[#08A9E6] transition-colors">
            Chat with Operations
          </span>
          <span className="text-[10px] text-[#8E9FAA] leading-tight flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#12C98A]" />
            Sarah • Online (Calgary)
          </span>
        </div>

        <span className="sm:hidden absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#08A9E6] text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
          1
        </span>
      </button>
    </aside>
  );
}
