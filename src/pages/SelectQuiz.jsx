import MultipleQuizView from "../components/MultipleQuizView"

function SelectQuiz(){
    // displays a feed of quizzes
    // passes the route to go to after a quiz is clicked on

    return(
        <div id="multiplay-quizzes-view">
            <h1>Discover quizzes</h1>
            <MultipleQuizView nextRoute={'/multiplayer/createLobby'}></MultipleQuizView>
        </div>
    )
}

export default SelectQuiz