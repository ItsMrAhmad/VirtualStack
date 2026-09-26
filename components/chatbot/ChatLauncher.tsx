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
      className="fixed bottom-20 lg:bottom-6 right-4 lg:right-6 z-50"
    >
      <button
        type="button"
        onClick={() => setIsLoaded(true)}
        aria-label="Open Virtual Stack Assistant"
        className="relative w-14 h-14 rounded-full bg-[#08A9E6] hover:bg-[#0698D0] shadow-[0_4px_24px_rgba(8,169,230,0.45)] hover:shadow-[0_4px_28px_rgba(8,169,230,0.6)] transition-all duration-200 flex items-center justify-center ring-2 ring-white/30"
      >
        <Image
          src="/logo-white.png"
          alt="Virtual Stack"
          width={28}
          height={28}
          className="w-7 h-7 object-contain"
        />
        <span className="absolute top-0.5 right-0.5 w-3 h-3 rounded-full bg-[#12C98A] border-2 border-[#08A9E6]" />
      </button>
    </aside>
  );
}
