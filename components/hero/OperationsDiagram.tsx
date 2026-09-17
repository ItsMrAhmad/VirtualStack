"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Headphones, Layers, TrendingUp, Users, Activity, ArrowRight } from "lucide-react";

export default function OperationsDiagram() {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Background ambient glow */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-[#08A9E6]/15 via-[#071A2A]/40 to-[#08A9E6]/15 rounded-3xl blur-2xl -z-10" />

      {/* Main Container Card */}
      <div className="relative bg-[#091E31]/95 backdrop-blur-md rounded-2xl border border-[#1C354E] p-4 sm:p-5 shadow-2xl shadow-black/40">
        {/* Top Operational Status Header */}
        <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#1C354E]/70">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#12C98A] animate-pulse" />
            <span className="text-[11px] font-bold text-white uppercase tracking-wider">
              Live Operations Infrastructure
            </span>
          </div>
          <span className="text-[10px] font-semibold text-[#12C98A] bg-[#12C98A]/10 px-2 py-0.5 rounded-full border border-[#12C98A]/20 flex items-center gap-1">
            <Activity className="w-3 h-3 text-[#12C98A]" />
            24/7/365 Active
          </span>
        </div>

        {/* Central Core Dispatch Node */}
        <div className="relative mb-3">
          <Link
            href="/why-virtual-stack"
            className="block bg-[#0D253C] hover:bg-[#102E4A] text-white rounded-xl p-3 sm:p-3.5 shadow-md transition-all duration-200 group border border-[#1C354E] hover:border-[#08A9E6]/50"
            title="Learn about Virtual Stack infrastructure"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#071A2A] border border-[#1C354E] flex items-center justify-center p-1 shadow-sm shrink-0 group-hover:border-[#08A9E6]/60 transition-colors">
                  <Image
                    src="/icon.png"
                    alt="Virtual Stack Icon"
                    width={26}
                    height={26}
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <h4 className="text-xs sm:text-sm font-bold tracking-tight text-white font-heading group-hover:text-[#08A9E6] transition-colors">
                      Virtual Stack Operational Core
                    </h4>
                    <ArrowRight className="w-3 h-3 text-[#08A9E6] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <p className="text-[10px] text-[#94A3B8]">
                    SOP Workflows • VOIP Trunks • Dedicated Pods
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-[9px] font-bold text-[#12C98A] bg-[#12C98A]/10 px-1.5 py-0.5 rounded border border-[#12C98A]/30">
                  99.9% Uptime
                </span>
                <span className="text-[9px] text-[#94A3B8] mt-0.5">200+ Workstations</span>
              </div>
            </div>
          </Link>

          {/* Connecting Trunk Line (SVG) */}
          <div className="hidden sm:flex justify-around items-center h-2 -my-0.5">
            <div className="w-0.5 h-full bg-gradient-to-b from-[#0D253C] to-[#1C354E]" />
            <div className="w-0.5 h-full bg-gradient-to-b from-[#0D253C] to-[#1C354E]" />
            <div className="w-0.5 h-full bg-gradient-to-b from-[#0D253C] to-[#1C354E]" />
            <div className="w-0.5 h-full bg-gradient-to-b from-[#0D253C] to-[#1C354E]" />
          </div>
        </div>

        {/* 4 Pillars Routing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Pillar 1: Customer Support */}
          <Link
            href="/services#customer-experience"
            className="p-4 rounded-xl bg-[#071A2A]/70 border border-[#1C354E] hover:border-[#08A9E6] hover:bg-[#0B2238] transition-all duration-200 group block cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="p-1.5 rounded-md bg-[#08A9E6]/10 text-[#08A9E6] group-hover:bg-[#08A9E6] group-hover:text-white transition-colors">
                <Headphones className="w-3.5 h-3.5" />
              </div>
              {/* Metric Badge: Standardized metric badge */}
              <span className="text-[9px] font-semibold text-[#08A9E6] bg-[#08A9E6]/10 px-2 py-0.5 rounded border border-[#08A9E6]/20">
                {/* TODO: Connect to live helpdesk SLA metrics */}
                &lt;60s Response
              </span>
            </div>
            <div className="flex items-center justify-between">
              <h5 className="text-xs font-bold text-white font-heading group-hover:text-[#08A9E6] transition-colors">
                Customer Support
              </h5>
              <ArrowRight className="w-3 h-3 text-[#08A9E6] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </div>
            <p className="text-[11px] text-[#94A3B8] mt-1 line-clamp-2 leading-tight">
              Inbound voice, live chat, email helpdesk & 24/7 receptionists.
            </p>
          </Link>

          {/* Pillar 2: Back Office Operations */}
          <Link
            href="/services#back-office"
            className="p-4 rounded-xl bg-[#071A2A]/70 border border-[#1C354E] hover:border-[#08A9E6] hover:bg-[#0B2238] transition-all duration-200 group block cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="p-1.5 rounded-md bg-[#08A9E6]/10 text-[#08A9E6] group-hover:bg-[#08A9E6] group-hover:text-white transition-colors">
                <Layers className="w-3.5 h-3.5" />
              </div>
              {/* Metric Badge: Standardized metric badge */}
              <span className="text-[9px] font-semibold text-[#08A9E6] bg-[#08A9E6]/10 px-2 py-0.5 rounded border border-[#08A9E6]/20">
                {/* TODO: Connect to live back-office QA audit feed */}
                99.8% Accuracy
              </span>
            </div>
            <div className="flex items-center justify-between">
              <h5 className="text-xs font-bold text-white font-heading group-hover:text-[#08A9E6] transition-colors">
                Back Office Operations
              </h5>
              <ArrowRight className="w-3 h-3 text-[#08A9E6] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </div>
            <p className="text-[11px] text-[#94A3B8] mt-1 line-clamp-2 leading-tight">
              Data management, document indexing, KYC verification & admin support.
            </p>
          </Link>

          {/* Pillar 3: Sales & Growth */}
          <Link
            href="/services#sales-growth"
            className="p-4 rounded-xl bg-[#071A2A]/70 border border-[#1C354E] hover:border-[#08A9E6] hover:bg-[#0B2238] transition-all duration-200 group block cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="p-1.5 rounded-md bg-[#08A9E6]/10 text-[#08A9E6] group-hover:bg-[#08A9E6] group-hover:text-white transition-colors">
                <TrendingUp className="w-3.5 h-3.5" />
              </div>
              {/* Metric Badge: Standardized metric badge */}
              <span className="text-[9px] font-semibold text-[#08A9E6] bg-[#08A9E6]/10 px-2 py-0.5 rounded border border-[#08A9E6]/20">
                {/* TODO: Connect to live outbound booking analytics */}
                +35% Bookings
              </span>
            </div>
            <div className="flex items-center justify-between">
              <h5 className="text-xs font-bold text-white font-heading group-hover:text-[#08A9E6] transition-colors">
                Sales & Growth
              </h5>
              <ArrowRight className="w-3 h-3 text-[#08A9E6] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </div>
            <p className="text-[11px] text-[#94A3B8] mt-1 line-clamp-2 leading-tight">
              B2B lead generation, appointment booking, telesales & surveys.
            </p>
          </Link>

          {/* Pillar 4: Dedicated Remote Teams */}
          <Link
            href="/services#dedicated-teams"
            className="p-4 rounded-xl bg-[#071A2A]/70 border border-[#1C354E] hover:border-[#08A9E6] hover:bg-[#0B2238] transition-all duration-200 group block cursor-pointer"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="p-1.5 rounded-md bg-[#08A9E6]/10 text-[#08A9E6] group-hover:bg-[#08A9E6] group-hover:text-white transition-colors">
                <Users className="w-3.5 h-3.5" />
              </div>
              {/* Metric Badge: Standardized metric badge */}
              <span className="text-[9px] font-semibold text-[#08A9E6] bg-[#08A9E6]/10 px-2 py-0.5 rounded border border-[#08A9E6]/20">
                {/* TODO: Connect to annual talent pod retention data */}
                96% Retention
              </span>
            </div>
            <div className="flex items-center justify-between">
              <h5 className="text-xs font-bold text-white font-heading group-hover:text-[#08A9E6] transition-colors">
                Dedicated Remote Teams
              </h5>
              <ArrowRight className="w-3 h-3 text-[#08A9E6] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
            </div>
            <p className="text-[11px] text-[#94A3B8] mt-1 line-clamp-2 leading-tight">
              Exclusive full-time talent, executive virtual assistants & staff leasing.
            </p>
          </Link>
        </div>

        {/* Verification & Trust Footprint (Duplicated Calgary / Workstations Signal) */}
        <div className="mt-3.5 pt-2.5 border-t border-[#1C354E]/70 flex flex-wrap items-center justify-between text-[10.5px] text-[#94A3B8] gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#12C98A]" />
            <span>200+ Workstation Capacity</span>
          </div>
          <span className="text-[#1C354E] hidden sm:inline">•</span>
          <span>Calgary, AB • Est. 2011</span>
          <span className="text-[#1C354E] hidden sm:inline">•</span>
          <span>SOC-2 Aligned Facility</span>
        </div>
      </div>
    </div>
  );
}

