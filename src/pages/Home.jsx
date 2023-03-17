import { NavLink } from "react-router-dom"


function Home() {

    return (
        <>
            <div className="title-first-part">
                <h1 class="animate__animated animate__zoomInDown">Quizzing me</h1>
            </div>
            <div className="title-second-part">
                <h1 class="animate__animated animate__zoomInUp animate__delay-1s">Quizzing you</h1>
            </div>
            <NavLink className="all-quizzes-btn" to='/quiz/all'>CHOOSE A QUIZ</NavLink>
            <NavLink className="home-link-btn" to='/login'>LOG IN TO UPDATE OR CREATE A QUIZ</NavLink>
            <NavLink className="home-link-btn" to='/signup'>SIGN UP TO CREATE YOUR OWN QUIZZES</NavLink>
            <NavLink className="home-link-btn" to='/multiplayer/join'>JOIN A MULTIPLAYER GAME</NavLink>
        </>
    )
}

export default Home