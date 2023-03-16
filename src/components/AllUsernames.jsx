function AllUsernames(props){
    // shows all usernames without their scores
    let { players, scores } = props
    return (
        <div>
            {
                players.map(id => {
                    let { username } = scores[id]
                    return (
                        <p className="create-lobby-text" key={username}>{username}</p>
                    )
                })
            }
        </div>
    )
}

export default AllUsernames