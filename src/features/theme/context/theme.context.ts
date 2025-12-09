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

export type ThemeType = 'light' | 'dark'

export interface IThemeContext { 
    theme: ThemeType
    toggleTheme: () => void
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext)

