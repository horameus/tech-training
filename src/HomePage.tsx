import { Link } from 'react-router-dom';

export function HomePage() {
    return (
        <div>
            <h1>Welcome to the React App</h1>
            <p>This is a simple React application.</p>
            <ul>
                <li>
                    <Link to="/profiles">Profiles List</Link>
                </li>
            </ul>
        </div>
    );
}
