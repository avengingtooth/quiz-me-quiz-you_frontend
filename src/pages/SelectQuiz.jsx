import MultipleQuizView from "../components/MultipleQuizView"

function SelectQuiz(){
    return(
        <div>
            <MultipleQuizView nextRoute={'/multiplayer/createLobby'}></MultipleQuizView>
        </div>
    )
}

export default SelectQuiz