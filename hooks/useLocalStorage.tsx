import { useState } from 'react';

/**
 * Attempts to store information in the browser's local storage.
 * 
 * @param key the key to store under in local storage
 * @param initial the initial value to store for the specified key
 */
export function useLocalStorage <T>(key: string, initial: T): [T, (value: T) => void] {
    const [stored, setStored] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initial;
        } catch (_error) {
            return initial;
        }
    });

    const setValue = (value: T) => {
        try {
            const valueToStore = value instanceof Function
                ? value(stored)
                : value;

            setStored(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (_error) {}
    };
    
    return [stored, setValue];
};