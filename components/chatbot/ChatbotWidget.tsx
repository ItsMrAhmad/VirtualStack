"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  MessageSquare,
  X,
  Send,
  Video,
  Mail,
  Bot,
  RotateCcw,
  Sparkles,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { processUserQuery, ChatMessage } from "@/lib/chatbot/chatEngine";

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: "welcome-1",
    sender: "bot",
    text: "👋 Welcome to Virtual Stack! I'm your AI Operations Specialist. How can I assist your business today?",
    bullets: [
      "Dedicated Pods: 50–65% cost savings vs. onshore hiring",
      "24/7/365 Fleet Dispatch, Logistics & Customer Support",
      "Fast 1–2 Week Onboarding with dedicated Team Lead",
      "SOC 2, ISO 27001 & HIPAA Compliant Security",
    ],
    showActionButtons: true,
    timestamp: "Online now",
  },
];

const SUGGESTED_QUESTIONS = [
  "What services do you offer?",
  "How much do you charge?",
  "24/7 fleet dispatch details",
  "How fast can we onboard?",
  "Security & compliance info",
];

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom of message list
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
      // Auto focus input after open transition
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [isOpen, messages, isTyping]);

  // Handle escape key to close
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

    // Realistic typing delay
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
    <aside aria-label="Customer Support Assistant" className="fixed bottom-20 lg:bottom-6 right-4 lg:right-6 z-50 pointer-events-none flex flex-col items-end">
      {/* 1. Chatbot Window Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Virtual Stack AI Assistant"
          className="pointer-events-auto mb-3 w-[calc(100vw-2rem)] sm:w-[380px] h-[520px] max-h-[calc(100vh-130px)] bg-white rounded-2xl shadow-[0_20px_50px_rgba(7,26,42,0.35)] border border-[#DDE6ED] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 origin-bottom-right duration-200"
        >
          {/* Header */}
          <div className="bg-[#071A2A] px-4 py-3.5 border-b border-[#08A9E6]/30 text-white shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#08A9E6] to-[#071A2A] flex items-center justify-center p-0.5 shadow-sm">
                  <div className="w-full h-full bg-[#071A2A] rounded-[10px] flex items-center justify-center">
                    <Bot className="w-5 h-5 text-[#08A9E6]" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#12C98A] border-2 border-[#071A2A]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h2 className="text-sm font-bold tracking-tight text-white">Virtual Stack Assistant</h2>
                    <span className="text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded bg-[#08A9E6]/20 text-[#08A9E6] border border-[#08A9E6]/30">
                      AI
                    </span>
                  </div>
                  <p className="text-[11px] text-[#8E9FAA] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#12C98A]" />
                    Online • 24/7 Operations Hub
                  </p>
                </div>
              </div>

              {/* Header Action Buttons */}
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleResetChat}
                  title="Reset conversation"
                  aria-label="Reset conversation"
                  className="p-1.5 rounded-lg text-[#8E9FAA] hover:text-white hover:bg-white/10 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  title="Close assistant"
                  aria-label="Close assistant"
                  className="p-1.5 rounded-lg text-[#8E9FAA] hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Persistent Quick Action Buttons: Zoom Consultation & Contact Form */}
            <div className="mt-3 pt-2.5 border-t border-white/10 grid grid-cols-2 gap-2">
              <Link
                href="/book-a-consultation"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-lg bg-[#08A9E6] hover:bg-[#078FCC] text-white text-[11px] font-semibold shadow-sm transition-colors text-center"
              >
                <Video className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">Zoom Consultation</span>
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-white text-[11px] font-semibold transition-colors text-center"
              >
                <Mail className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">Contact Form</span>
              </Link>
            </div>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#F8FAFC]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === "user" ? "items-end" : "items-start"
                }`}
              >
                {msg.sender === "user" ? (
                  <div className="max-w-[85%] bg-[#071A2A] text-white text-[13px] leading-relaxed rounded-2xl rounded-tr-xs px-3.5 py-2.5 shadow-sm">
                    {msg.text}
                  </div>
                ) : (
                  <div className="max-w-[90%] bg-white border border-[#DDE6ED] rounded-2xl rounded-tl-xs p-3.5 text-[13px] text-[#0B1724] shadow-sm space-y-2.5">
                    <p className="leading-relaxed">{msg.text}</p>

                    {/* Bullet Points */}
                    {msg.bullets && msg.bullets.length > 0 && (
                      <ul className="space-y-1.5 pt-1 border-t border-[#F1F5F9]">
                        {msg.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 text-[12px] text-[#5F7183]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#08A9E6] shrink-0 mt-0.5" />
                            <span className="leading-snug">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Single Main Link */}
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

                    {/* Message Contextual Action Buttons */}
                    {msg.showActionButtons && (
                      <div className="pt-2 border-t border-[#F1F5F9] flex flex-wrap gap-1.5">
                        <Link
                          href="/book-a-consultation"
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#08A9E6]/10 text-[#08A9E6] hover:bg-[#08A9E6] hover:text-white text-[11px] font-medium transition-colors"
                        >
                          <Video className="w-3 h-3" />
                          <span>Book Scoping Call</span>
                        </Link>
                        <Link
                          href="/contact"
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#F1F5F9] text-[#5F7183] hover:bg-[#E2E8F0] hover:text-[#0B1724] text-[11px] font-medium transition-colors"
                        >
                          <Mail className="w-3 h-3" />
                          <span>Send Inquiry</span>
                        </Link>
                      </div>
                    )}
                  </div>
                )}
                <span className="text-[10px] text-[#8E9FAA] mt-1 px-1">{msg.timestamp}</span>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 bg-white border border-[#DDE6ED] rounded-2xl rounded-tl-xs px-3.5 py-2.5 w-fit shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#08A9E6] animate-bounce [animation-delay:-0.3s]" />
                <span className="w-2 h-2 rounded-full bg-[#08A9E6] animate-bounce [animation-delay:-0.15s]" />
                <span className="w-2 h-2 rounded-full bg-[#08A9E6] animate-bounce" />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="bg-[#F8FAFC] px-3 pb-2 pt-1 border-t border-[#F1F5F9] overflow-x-auto no-scrollbar flex items-center gap-1.5">
            {SUGGESTED_QUESTIONS.map((q, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendMessage(q)}
                className="shrink-0 text-[11px] font-medium bg-white hover:bg-[#EBF7FD] text-[#5F7183] hover:text-[#08A9E6] border border-[#DDE6ED] hover:border-[#08A9E6]/50 rounded-full px-2.5 py-1 transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-white border-t border-[#DDE6ED]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about services, dispatch, pricing..."
                className="flex-1 bg-[#F8FAFC] border border-[#DDE6ED] focus:border-[#08A9E6] focus:bg-white focus:outline-none rounded-xl px-3.5 py-2 text-xs text-[#0B1724] placeholder:text-[#8E9FAA] transition-all"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                aria-label="Send message"
                className="w-8 h-8 rounded-xl bg-[#08A9E6] hover:bg-[#078FCC] disabled:bg-[#DDE6ED] disabled:cursor-not-allowed text-white flex items-center justify-center transition-colors shadow-sm shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
            <div className="flex items-center justify-between mt-2 px-1 text-[10px] text-[#8E9FAA]">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#12C98A]" />
                Enterprise Confidential
              </span>
              <span>Virtual Stack Operations</span>
            </div>
          </div>
        </div>
      )}

      {/* 2. Floating Launcher Button (Always at bottom-right corner) */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Close Virtual Stack Assistant" : "Open Virtual Stack Assistant"}
        className="pointer-events-auto flex items-center gap-2.5 bg-[#071A2A] hover:bg-[#0C1E30] text-white border border-[#08A9E6]/40 hover:border-[#08A9E6] rounded-full p-2.5 sm:px-4 sm:py-2.5 shadow-[0_10px_25px_rgba(7,26,42,0.35)] hover:shadow-[0_10px_30px_rgba(8,169,230,0.3)] transition-all duration-200 group"
      >
        <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-[#08A9E6] to-[#071A2A] flex items-center justify-center p-0.5 shrink-0">
          <div className="w-full h-full bg-[#071A2A] rounded-full flex items-center justify-center">
            {isOpen ? (
              <X className="w-4 h-4 text-[#08A9E6]" />
            ) : (
              <MessageSquare className="w-4 h-4 text-[#08A9E6]" />
            )}
          </div>
          {!isOpen && (
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#12C98A] border-2 border-[#071A2A]" />
          )}
        </div>

        <div className="hidden sm:flex flex-col text-left">
          <span className="text-xs font-bold leading-tight tracking-tight text-white group-hover:text-[#08A9E6] transition-colors">
            Ask Virtual Stack
          </span>
          <span className="text-[10px] text-[#8E9FAA] leading-tight flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#12C98A]" />
            Online & Ready
          </span>
        </div>

        {/* Unread Indicator Badge when closed */}
        {!isOpen && hasUnread && (
          <span className="sm:hidden absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#08A9E6] text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
            1
          </span>
        )}
      </button>
    </aside>
  );
}
