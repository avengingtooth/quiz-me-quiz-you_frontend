function ErrorPage(props) {
    // If no error is present is displays unknown error
    // #TODO no way to leave page
    let { error, redirection, actionText } = props
    return (
        <div>
            <h3 className="error-message-text">{error ? error : 'Unknown Error'}</h3>
            <button onClick={() => { window.location.href = redirection }}>{actionText}</button>
        </div>
    )
}

export default ErrorPage