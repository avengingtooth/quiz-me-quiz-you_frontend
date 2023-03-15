import MultipleQuizView from '../components/MultipleQuizView'

function Feed() {
    return (
        <div id="feed">
            <h1 className='quizzes-title'>DISCOVER QUIZZES</h1>
            {/* maybe add a search bar here */}
            <MultipleQuizView nextRoute={'/quiz'}></MultipleQuizView>
        </div>
    )
}

export default Feed