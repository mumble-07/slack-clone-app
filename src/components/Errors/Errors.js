const Errors = (type) => {
    switch (type){
        case type === 'login':
            return (
                <div className="error-message">
                    <span>Incorrect username or password. Please try again.</span>
                </div>
            )
        case type === 'signup':
            return (
                <div className="error-message">
                    <span>Unable to create account. Please try again.</span>
                </div>    
            )
        case type === 'retrieveChannels':
            return (
                <div className="error-message">
                    <span>Unable to retrieve channels. Please try again.</span>
                </div>
            )
        case type === 'retrieveDM':
            return (
                <div className="error-message">
                    <span>Unable to retrieve DMs. Please try again.</span>
                </div>
            )
    }
}

export default Errors;