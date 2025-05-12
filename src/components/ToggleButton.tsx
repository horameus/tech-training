import { useTheme } from '@/providers/ThemeProvider';

export function ToggleButton() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div>
            <button onClick={toggleTheme}>{theme}</button>
        </div>
    );
}
