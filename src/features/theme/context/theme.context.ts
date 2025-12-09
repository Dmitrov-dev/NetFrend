import { createContext } from "react";

export const Themes = {
  Light: 'light',
  Dark: 'dark'
} as const;

export type ThemeTypes = typeof Themes[keyof typeof Themes];

export interface IThemeContext {
  theme: ThemeTypes;
  toggleTheme: () => void;
}
export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);