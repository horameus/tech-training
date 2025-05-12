import { Link } from 'react-router-dom';

export function ProfilesList() {
    const profiles = [1, 2, 3, 4, 5];

    return (
        <div
            style={{
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
            }}>
            <h1>Profiles List</h1>
            <p>This is the profiles list page.</p>
            {profiles.map(profile => (
                <Link key={profile} to={`/profiles/${profile}`}>
                    Profile number {profile}
                </Link>
            ))}
        </div>
    );
}
