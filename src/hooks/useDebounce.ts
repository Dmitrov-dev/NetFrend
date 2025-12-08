import { useEffect, useState } from "react";


export function useDebounce<T>(value: T, delay = 300): T {
    const [debouncedValue, serDebauncedValue] = useState<T>(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            serDebauncedValue(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])
    return debouncedValue
}