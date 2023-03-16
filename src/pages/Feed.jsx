import MultipleQuizView from '../components/MultipleQuizView'

function Feed(){
    // displays a feed of quizzes
    // passes the route to go to after a quiz is clicked on

    return(
        <div id="feed">
            <h1>Discover quizzes</h1>
            <MultipleQuizView nextRoute={'/quiz'}></MultipleQuizView>
        </div>
    )
}

export default Feed