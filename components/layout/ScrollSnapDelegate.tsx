"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollSnapDelegate() {
  const pathname = usePathname();

  // Reset scroll container position on route change
  useEffect(() => {
    const container = document.querySelector<HTMLElement>('[id$="-scroll-container"]');
    if (container) {
      container.scrollTop = 0;
    }
  }, [pathname]);

  // Delegate Back-to-Top and in-page anchor links
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      // Handle Back to Top button
      const backToTopBtn = target.closest<HTMLElement>('[aria-label="Back to top"], [data-back-to-top]');
      if (backToTopBtn) {
        e.preventDefault();
        const container = document.querySelector<HTMLElement>('[id$="-scroll-container"]');
        if (container) {
          container.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        return;
      }

      // Handle in-page anchor jumps (e.g. href="#pillar-customer-support")
      const anchor = target.closest<HTMLAnchorElement>('a[href^="#"]');
      if (anchor) {
        const hash = anchor.getAttribute("href");
        if (hash && hash.length > 1) {
          const container = document.querySelector<HTMLElement>('[id$="-scroll-container"]');
          if (container) {
            const targetEl = container.querySelector<HTMLElement>(hash);
            if (targetEl) {
              e.preventDefault();
              targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
