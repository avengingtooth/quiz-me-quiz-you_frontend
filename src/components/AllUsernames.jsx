function AllUsernames(props){
    let { players, scores } = props
    return(
        <div>
            {
                players.map(id => {
                    let { username } = scores[id]
                    return(
                        <p key={username}>{username}</p>
                    )
                })
            }
        </div>
    )
}

export default AllUsernames