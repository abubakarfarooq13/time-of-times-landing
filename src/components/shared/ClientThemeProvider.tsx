"use client";

import { ThemeProvider } from "@/contexts/ThemeContext";
// import ThemeToggleWrapper from "./ThemeToggleWrapper";

export default function ClientThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      {children}
      {/* <ThemeToggleWrapper /> */}
    </ThemeProvider>
  );
}
