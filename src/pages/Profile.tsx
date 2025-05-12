import { useParams } from 'react-router-dom';

export function Profile() {
    const params = useParams<{ id: string }>();

    return (
        <div>
            <h1>Profile Page</h1>
            <p>This is the profile page of the number {params.id}</p>
        </div>
    );
}
