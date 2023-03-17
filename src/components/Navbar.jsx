import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useContext } from "react";

function Navbar(){
    
    const {
        isLoggedIn,
        user,
        logOutUser
    } = useContext(AuthContext);

    return (
        <>
            <nav className="navbar">
            <div className="navbar-links">
                <NavLink to='/'><svg className="home-logo" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M11 39h7.5V26.5h11V39H37V19.5L24 9.75 11 19.5Zm-3 3V18L24 6l16 12v24H26.5V29.5h-5V42Zm16-17.65Z" /></svg></NavLink>
               
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
                    <NavLink className={"nav-link"} to='/quiz/all'>Quizzes</NavLink>
                       
                    <NavLink className={"nav-link"} to='/multiplayer/join'>Join multiplayer game</NavLink>

                    <NavLink className={"nav-link"} to='/multiplayer/select'>Create multiplayer game</NavLink>

                </div>
            </nav>
            <header>
                <p className="header-top">Quizzing me</p>
                <p className="header-bottom">Quizzing you</p>
            </header>

            <Outlet></Outlet>
        </>
    )
}

export default Navbar