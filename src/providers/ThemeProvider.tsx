import React, { createContext, useState, useContext, PropsWithChildren } from 'react';

export type ThemeProviderTypes = {
    theme: string;
    toggleTheme: () => void;
};

export interface ThemeProviderProps extends PropsWithChildren {}

const ThemeContext = createContext<ThemeProviderTypes | undefined>(undefined);

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`theme-${theme}`}>{children}</div>
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
