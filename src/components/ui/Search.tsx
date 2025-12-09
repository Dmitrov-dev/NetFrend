import { useState } from "react"
import { useTheme } from "../../hooks/useTheme"

export function Search() {
      const [searchTerm, setSearchTerm] = useState('')
        const { theme } = useTheme()
    return  <input
              type="search"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className={`border px-2 py-1 rounded outline-0 ${theme === 'dark'
                ? 'bg-black text-white border-white/15'
                : 'bg-white text-black border-black/15'}`}
            />
}
