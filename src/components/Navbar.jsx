// TEST SI BONNE BRANCH PUSHED

import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";

function Navbar() {
    console.log('nav')

    const {
        isLoggedIn,
        user,
        logOutUser
    } = useContext(AuthContext);

    return (
        <>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <div>
                    <NavLink to='/quiz/all'>Feed</NavLink>

                    {isLoggedIn && (
                        <>
                            <NavLink to='/quiz/create'>Create</NavLink>
                            <button onClick={logOutUser}>Logout</button>
                        </>
                    )}

                    {!isLoggedIn && (
                        <>
                            <NavLink to='/login'>Log In</NavLink>
                            <NavLink to='/signup'>Sign Up</NavLink>
                        </>
                    )}
                </div>
            </nav>
            <Outlet></Outlet>
        </>
    )
}

export default Navbar