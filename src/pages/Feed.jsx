import MultipleQuizView from '../components/MultipleQuizView'

function Feed(){
    return(
        <div id="feed">
            <h1>Discover quizzes</h1>
            {/* maybe add a search bar here */}
            <MultipleQuizView nextRoute={'/quiz'}></MultipleQuizView>
        </div>
    )
}

export default Feed