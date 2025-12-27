export type ThemeMode = "day" | "night" | "lochzilla";

export const THEME_STORAGE_KEY = "ls-theme";

export function getStoredTheme(): ThemeMode | null {
  if (typeof window === "undefined") return null;
  const v = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (v === "day" || v === "night" || v === "lochzilla") return v;
  return null;
}

export function applyTheme(theme: ThemeMode) {
  if (typeof document === "undefined") return;
  document.documentElement.setAttribute("data-theme", theme);
}
