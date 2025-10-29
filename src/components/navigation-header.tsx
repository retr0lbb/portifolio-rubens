/** biome-ignore-all lint/a11y/noRedundantRoles: <no need> */
"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useCallback, useRef } from "react";

// Constantes de configuração centralizadas
const NAVIGATION_CONFIG = {
  TRIGGER_HEIGHT: 120,
  HIDE_OFFSET: -80,
  DEBOUNCE_DELAY: 10,
  ANIMATION: {
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
    hide: {
      y: -80,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  },
} as const;

export enum NAVIGATION_DESTINATIONS {
  HOME = "#home",
  ABOUT = "#about",
  PROJECTS = "#projects",
  CONTACT = "#contact",
}

interface NavigationHeaderProps {
  children: React.ReactNode;
  triggerHeight?: number;
}

function NavigationHeader({
  children,
  triggerHeight = NAVIGATION_CONFIG.TRIGGER_HEIGHT,
}: NavigationHeaderProps) {
  const controls = useAnimation();
  const isVisibleRef = useRef(false);
  const debounceTimerRef = useRef<NodeJS.Timeout>(null);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const shouldShow = e.clientY < triggerHeight;

      // Evita animações desnecessárias
      if (shouldShow === isVisibleRef.current) return;

      // Debounce para otimizar performance
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }

      debounceTimerRef.current = setTimeout(() => {
        isVisibleRef.current = shouldShow;
        controls.start(
          shouldShow
            ? NAVIGATION_CONFIG.ANIMATION.show
            : NAVIGATION_CONFIG.ANIMATION.hide,
        );
      }, NAVIGATION_CONFIG.DEBOUNCE_DELAY);
    },
    [controls, triggerHeight],
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [handleMouseMove]);

  return (
    <motion.div
      animate={controls}
      initial={NAVIGATION_CONFIG.ANIMATION.hide}
      className="fixed top-0 left-0 w-full flex justify-center pointer-events-none z-50"
      aria-hidden={!isVisibleRef.current}
    >
      {children}
    </motion.div>
  );
}

interface NavigationBodyProps extends React.ComponentProps<"div"> {
  className?: string;
}

function NavigationBody({ className = "", ...props }: NavigationBodyProps) {
  return (
    <div
      className={`mt-4 px-6 py-3 bg-mainRed rounded-3xl text-white text-center shadow-md pointer-events-auto ${className}`}
      {...props}
    />
  );
}

interface NavigationLinksWrapperProps {
  children: React.ReactNode;
  className?: string;
}

function NavigationLinksWrapper({
  children,
  className = "",
}: NavigationLinksWrapperProps) {
  return (
    // biome-ignore lint/a11y/useSemanticElements: <no need>
    <nav
      className={`flex flex-1 items-center justify-center group ${className}`}
      role="navigation"
      aria-label="Navegação principal"
    >
      {children}
    </nav>
  );
}

interface NavigationLinkProps {
  to: NAVIGATION_DESTINATIONS | string;
  text: string;
  className?: string;
}

function NavigationLink({ to, text, className = "" }: NavigationLinkProps) {
  return (
    <a
      className={`text-textLight px-1.5 font-normal cursor-pointer text-lg opacity-100 group-hover:opacity-10 hover:opacity-100! transition-all ${className}`}
      href={to}
    >
      {text}
    </a>
  );
}

export {
  NavigationHeader,
  NavigationBody,
  NavigationLinksWrapper,
  NavigationLink,
};
