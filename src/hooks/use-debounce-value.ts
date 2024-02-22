import { useEffect, useState } from 'react'

/* Function strategy to cause one delay */

export default function useDebounceValue<T = unknown>(value: T, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState(value)


    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    return debouncedValue
}