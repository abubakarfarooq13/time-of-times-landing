"use client";

import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeDebug() {
  try {
    const { theme } = useTheme();
    return <div>Theme: {theme}</div>;
  } catch (error) {
    return <div>Theme Error: {error.message}</div>;
  }
}
