"use client";

import { useEffect } from "react";

export function AnimateOnScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;
    root.classList.add("animate-ready");

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const animatedElements = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-animate=\"fade-up\"], [data-animate=\"fade-up-initial\"]",
      ),
    );

    if (prefersReduced) {
      animatedElements.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      return () => {
        root.classList.remove("animate-ready");
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    animatedElements.forEach((el) => {
      const delay = el.dataset.animateDelay;
      if (delay) {
        const parsed = Number(delay);
        if (!Number.isNaN(parsed)) {
          el.style.transitionDelay = `${parsed}ms`;
        }
      }
      const triggerOnLoad = el.dataset.animate === "fade-up-initial";
      if (triggerOnLoad) {
        requestAnimationFrame(() => {
          el.classList.add("is-visible");
        });
      } else {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
      root.classList.remove("animate-ready");
    };
  }, []);

  return null;
}
