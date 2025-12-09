import { useTheme } from "../../hooks/useTheme"

export function ButtonTheme() {
      const { theme, toggleTheme } = useTheme()
    return    <button
              onClick={toggleTheme}
              className={`text-sm px-3 py-1 rounded border transition w-30
                  ${theme === 'dark'
                ? 'border-white/10 hover:bg-white/10'
                : 'border-black/20 hover:bg-black hover:text-white'}`}>
              {theme === 'dark' ? '🧑🏻‍💻 Light' : '🧑🏿‍💻 Dark'}
            </button>
}
