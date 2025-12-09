import { useEffect, useState } from "react";


export function useDebounce<T>(value: T, delay = 300): T {
    const [debouncedValue, setDebauncedValue] = useState<T>(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebauncedValue(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])
    return debouncedValue
}