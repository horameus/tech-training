import { useEffect, useState } from 'react';

export function useResizeObserver() {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const observer = new ResizeObserver(() => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        });

        observer.observe(document.body);

        return () => {
            observer.disconnect();
        };
    }, []);

    return size;
}
