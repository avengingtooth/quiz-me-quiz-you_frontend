function ErrorPage(props) {
    let { error } = props
    return (
        <div>
            <h3 className="error-message-text">{error}</h3>
        </div>
    )
}

export default ErrorPage