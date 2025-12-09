
import { useTheme } from "../../hooks/useTheme";

function Logo() {
      const { theme, toggleTheme } = useTheme()
    return <img src={theme === 'dark' ? 'лого2.png' : 'logo1.png'} alt="Gigacha" className="h-30 w-auto" />
}

export default Logo