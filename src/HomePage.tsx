import { Link, Outlet } from 'react-router-dom';
import { ToggleButton } from '@/components/ToggleButton';

export function HomePage() {
    return (
        <>
            <div className="homepage">
                <h1>Welcome to the React App</h1>
                <p>This is a simple React application.</p>
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
