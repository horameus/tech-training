import { Link, Outlet } from 'react-router-dom';
import { ToggleButton } from '@/components/ToggleButton';
import { useResizeObserver } from '@/utilities/useResizeObserver';

export function HomePage() {
    const { width, height } = useResizeObserver();

    return (
        <>
            <div className="homepage">
                <h1>Welcome to the React App</h1>
                <p>This is a simple React application.</p>
                <p>Current window size</p>
                <p>width : {width}</p>
                <p>height : {height}</p>
                <ul>
                    <li>
                        <Link to="/profiles">Profiles List</Link>
                    </li>
                </ul>
                <ToggleButton />
            </div>
            <Outlet />
        </>
    );
}
