import { NavLink, Outlet } from "react-router-dom";

function Navbar(){
    console.log('nav')
    
    return(
        <>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <div>
                    <NavLink to='/quiz/all'>Feed</NavLink>


                    <NavLink to='/quiz/create'>Create</NavLink>
                    

                    <NavLink to='/login'>Log In</NavLink>
                    <NavLink to='/signup'>Sign Up</NavLink>
                </div>
            </nav>
            <Outlet></Outlet>
        </>
    )
}

export default Navbar