"use client";

import { useEffect, useMemo, useState } from "react";
import { Moon, Sun, Siren } from "lucide-react";
import type { ThemeMode } from "@/lib/theme";
import { applyTheme, getStoredTheme, THEME_STORAGE_KEY } from "@/lib/theme";

const MODES: Array<{
  key: ThemeMode;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
}> = [
  { key: "day", label: "Day", Icon: Sun },
  { key: "night", label: "Night Tokyo", Icon: Moon },
  { key: "lochzilla", label: "Lochzilla", Icon: Siren },
];

export function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>("day");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = getStoredTheme() ?? "day";
    setMode(stored);
    applyTheme(stored);
    setMounted(true);
  }, []);

  const active = useMemo(() => MODES.find((m) => m.key === mode), [mode]);

  function pick(next: ThemeMode) {
    setMode(next);
    applyTheme(next);
    window.localStorage.setItem(THEME_STORAGE_KEY, next);
  }

  // avoid SSR mismatch for icon/labels
  if (!mounted) {
    return (
      <div className="h-9 w-[190px] rounded-full border border-app bg-surface shadow-soft opacity-70" />
    );
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-app bg-surface p-1 shadow-soft">
      {MODES.map(({ key, label, Icon }) => {
        const isActive = key === mode;
        return (
          <button
            key={key}
            type="button"
            onClick={() => pick(key)}
            className={[
              "ring-soft inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition",
              isActive
                ? "bg-[rgb(var(--accent))] text-black"
                : "hover:bg-black/5 dark:hover:bg-white/5",
            ].join(" ")}
            aria-pressed={isActive}
          >
            <Icon className="h-4 w-4" />
            <span className="hidden sm:inline">{label}</span>
          </button>
        );
      })}
      <span className="sr-only">Theme: {active?.label}</span>
    </div>
  );
}
