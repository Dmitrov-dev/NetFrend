import { useContext } from "react"
import { ThemeContext } from "../features/theme/context/theme.context"

export function useTheme() {
    return useContext(ThemeContext)
}