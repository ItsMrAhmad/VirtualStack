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
        className="relative w-14 h-14 rounded-full bg-[#071A2A] hover:bg-[#0C1E30] border border-[#08A9E6]/40 hover:border-[#08A9E6] shadow-[0_4px_20px_rgba(7,26,42,0.4)] hover:shadow-[0_4px_24px_rgba(8,169,230,0.35)] transition-all duration-200 flex items-center justify-center"
      >
        <Image
          src="/logo.png"
          alt="Virtual Stack"
          width={28}
          height={28}
          className="w-7 h-7 object-contain"
        />
        <span className="absolute top-1 right-1 w-3 h-3 rounded-full bg-[#12C98A] border-2 border-[#071A2A]" />
      </button>
    </aside>
  );
}
