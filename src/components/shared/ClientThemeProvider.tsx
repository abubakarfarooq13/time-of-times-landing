"use client";

import { ThemeProvider } from "@/contexts/ThemeContext";
// import ThemeToggleWrapper from "./ThemeToggleWrapper";
// import ThemeDebug from "./ThemeDebug";

export default function ClientThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      {children}
      {/* <ThemeDebug /> */}
      {/* <ThemeToggleWrapper /> */}
    </ThemeProvider>
  );
}
