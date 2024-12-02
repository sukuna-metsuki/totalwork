import { Outlet, Link } from 'react-router-dom';

export const Root = () => {
    return (
        <>
            <nav>
                <Link to={'/ToDO_List'}>ToDO_List</Link>
                <Link to={'/NoteBOOK'}>NoteBOOK</Link>
            </nav>
            <div>
                <Outlet />
            </div>
        </>
    )
};

