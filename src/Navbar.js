import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
            <Link to="/"> Home</Link>
            <Link to="/hook"> Hook</Link>
            <Link to="/fetch"> Fetch</Link>
        </div>
    );
}