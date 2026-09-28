"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Send, Calendar, Mail, RotateCcw, ChevronRight, CheckCircle2, Phone } from "lucide-react";
import { processUserQuery, ChatMessage } from "@/lib/chatbot/chatEngine";
import { companyData } from "@/lib/data/company";

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: "welcome-1",
    sender: "bot",
    text: "Hi there! 👋 I'm Sarah, Virtual Stack's virtual assistant. Ask me about our services, pricing or onboarding, or reach our Calgary team directly anytime.",
    timestamp: "Just now",
  },
];

const SUGGESTED_QUESTIONS = [
  "How much does it cost?",
  "How fast can we onboard?",
  "Can I hire just 1 person?",
  "24/7 fleet dispatch details",
  "Do you serve Canada?",
];

function buildEmailHref(question: string) {
  const subject = encodeURIComponent("Question from the Virtual Stack website");
  const body = encodeURIComponent(`Hi Virtual Stack team,\n\n${question}\n\nThanks,`);
  return `mailto:${companyData.contacts.email}?subject=${subject}&body=${body}`;
}

export default function ChatbotWidget({ initialOpen = false }: { initialOpen?: boolean } = {}) {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Keep the latest message in view
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [isOpen, messages, isTyping]);

  // Focus the input when the panel opens, but not on touch devices (avoids popping the keyboard)
  useEffect(() => {
    if (!isOpen || !window.matchMedia("(pointer: fine)").matches) return;
    const timer = setTimeout(() => inputRef.current?.focus(), 250);
    return () => clearTimeout(timer);
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isTyping) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = processUserQuery(query);
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 450);
  };

  const handleResetChat = () => {
    setMessages(INITIAL_MESSAGES);
    setInput("");
    setIsTyping(false);
  };

  return (
    <aside aria-label="Virtual Stack assistant" className="fixed bottom-20 lg:bottom-6 right-4 lg:right-6 z-50 pointer-events-none flex flex-col items-end">
      {/* Chat panel */}
      {isOpen && (
        <div
          id="vs-chat-panel"
          role="dialog"
          aria-label="Chat with Virtual Stack's virtual assistant"
          className="pointer-events-auto mb-3 w-[calc(100vw-2rem)] sm:w-[380px] h-[520px] max-h-[calc(100dvh-130px)] bg-white rounded-2xl shadow-[0_20px_50px_rgba(7,26,42,0.35)] border border-[#DDE6ED] flex flex-col overflow-hidden animate-in"
        >
          {/* Header */}
          <div className="bg-[#071A2A] px-4 py-3.5 border-b border-[#08A9E6]/30 text-white shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="relative w-9 h-9 rounded-xl bg-[#0D253C] flex items-center justify-center p-1.5 border border-[#08A9E6]/30 shrink-0">
                  <Image
                    src="/icon.png"
                    alt=""
                    width={26}
                    height={26}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h2 className="text-sm font-bold tracking-tight text-white truncate">Sarah</h2>
                    <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded bg-[#08A9E6]/20 text-[#08A9E6] border border-[#08A9E6]/30 whitespace-nowrap">
                      Virtual Assistant
                    </span>
                  </div>
                  <p className="text-[11px] text-[#94A3B8] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#12C98A]" />
                    Instant answers • Team available 24/7
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={handleResetChat}
                  title="Restart conversation"
                  aria-label="Restart conversation"
                  className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/10 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  title="Close chat"
                  aria-label="Close chat"
                  className="p-1.5 rounded-lg text-[#94A3B8] hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Quick actions */}
            <div className="mt-3 pt-2.5 border-t border-white/10 grid grid-cols-2 gap-2">
              <Link
                href="/book-a-consultation"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-lg bg-[#08A9E6] hover:bg-[#078FCC] text-white text-[11px] font-semibold transition-colors text-center"
              >
                <Calendar className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">Book a Call</span>
              </Link>
              <a
                href={`tel:${companyData.contacts.tollFreePhone}`}
                className="flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-white text-[11px] font-semibold transition-colors text-center"
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{companyData.contacts.tollFreeDisplay}</span>
              </a>
            </div>
          </div>

          {/* Messages */}
          <div
            role="log"
            aria-live="polite"
            aria-label="Conversation"
            className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#F7FAFC]"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                {msg.sender === "user" ? (
                  <div className="max-w-[85%] bg-[#08A9E6] text-white text-[13px] leading-relaxed rounded-2xl rounded-tr-xs px-3.5 py-2.5 shadow-sm">
                    <span className="sr-only">You: </span>
                    {msg.text}
                  </div>
                ) : (
                  <div className="max-w-[90%] bg-white border border-[#DDE6ED] rounded-2xl rounded-tl-xs p-3.5 text-[13px] text-[#0B1724] shadow-sm space-y-2.5">
                    <div className="leading-relaxed whitespace-pre-line">
                      <span className="sr-only">Sarah: </span>
                      {msg.text}
                    </div>

                    {msg.bullets && msg.bullets.length > 0 && (
                      <ul className="space-y-1.5 pt-1 border-t border-[#DDE6ED]">
                        {msg.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 text-[12px] text-[#5F7183]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#08A9E6] shrink-0 mt-0.5" />
                            <span className="leading-snug">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {msg.linkUrl && msg.linkText && (
                      <div className="pt-1">
                        <Link
                          href={msg.linkUrl}
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#08A9E6] hover:text-[#078FCC] hover:underline"
                        >
                          <span>{msg.linkText}</span>
                          <ChevronRight className="w-3 h-3" />
                        </Link>
                      </div>
                    )}

                    {msg.emailQuery && (
                      <div className="pt-2 border-t border-[#DDE6ED] flex flex-wrap gap-1.5">
                        <a
                          href={buildEmailHref(msg.emailQuery)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#08A9E6] text-white hover:bg-[#078FCC] text-[11px] font-semibold transition-colors"
                        >
                          <Mail className="w-3 h-3" />
                          <span>Email this question to our team</span>
                        </a>
                      </div>
                    )}
                  </div>
                )}
                <span className="text-[10px] text-[#5F7183] mt-1 px-1">{msg.timestamp}</span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 bg-white border border-[#DDE6ED] rounded-2xl rounded-tl-xs px-3.5 py-2.5 w-fit shadow-sm">
                <span className="sr-only">Sarah is typing</span>
                <span className="w-2 h-2 rounded-full bg-[#08A9E6] animate-bounce [animation-delay:-0.3s]" />
                <span className="w-2 h-2 rounded-full bg-[#08A9E6] animate-bounce [animation-delay:-0.15s]" />
                <span className="w-2 h-2 rounded-full bg-[#08A9E6] animate-bounce" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested questions */}
          <div className="bg-[#F7FAFC] px-3 pb-2 pt-1 border-t border-[#DDE6ED] overflow-x-auto flex items-center gap-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {SUGGESTED_QUESTIONS.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => handleSendMessage(q)}
                className="shrink-0 text-[11px] font-medium bg-white hover:bg-[#EBF7FD] text-[#5F7183] hover:text-[#08A9E6] border border-[#DDE6ED] hover:border-[#08A9E6]/50 rounded-full px-2.5 py-1 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-[#DDE6ED]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <label htmlFor="vs-chat-input" className="sr-only">
                Type your question
              </label>
              <input
                id="vs-chat-input"
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                autoComplete="off"
                className="flex-1 bg-[#F7FAFC] border border-[#DDE6ED] focus:border-[#08A9E6] focus:outline-none rounded-xl px-3.5 py-2 text-sm text-[#0B1724] placeholder:text-[#8E9FAA] transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                aria-label="Send message"
                className="w-9 h-9 rounded-xl bg-[#08A9E6] hover:bg-[#078FCC] disabled:bg-[#DDE6ED] disabled:cursor-not-allowed text-white flex items-center justify-center transition-colors shadow-sm shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
            <p className="mt-2 px-1 text-[10px] text-[#5F7183]">
              Automated assistant. For anything specific, call {companyData.contacts.tollFreeDisplay} (24/7).
            </p>
          </div>
        </div>
      )}

      {/* Launcher (matches ChatLauncher's closed state) */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close chat" : "Open chat with Virtual Stack's virtual assistant"}
        aria-expanded={isOpen}
        aria-controls="vs-chat-panel"
        className="pointer-events-auto relative w-14 h-14 rounded-full bg-[#08A9E6] hover:bg-[#0698D0] shadow-[0_4px_24px_rgba(8,169,230,0.45)] hover:scale-105 transition-all duration-200 flex items-center justify-center text-white"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
            aria-hidden="true"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>
    </aside>
  );
}
