import MultipleQuizView from "../components/MultipleQuizView"

function SelectQuiz() {
    return (
        <div className="multiplay-quizzes-view">
            <MultipleQuizView nextRoute={'/multiplayer/createLobby'}></MultipleQuizView>
        </div>
    )
}

export default SelectQuiz