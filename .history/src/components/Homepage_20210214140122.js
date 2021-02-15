import React from 'react'
import GoogleLogin from 'react-google-login'

const Homepage = () => {
    return (
        <div className="home_page">
            <div className="login_message">
                <h2>📚</h2>
                <h1>A Readers favorite place!</h1>
                <p>
                    We provide high quality online resources for reading blogs. Just sign up and start reading some quality blogs.
                </p>

                <GoogleLogin
                clientId=""
                render={(renderProps) => (
                    <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="login_button"
                    >
                        Login with Google
                    </button>
                )} 
                onSuccess={login}
                onFailure={login}
                isSignedIn={true}
                cookiePolicy={"single_host_origin"}
                />
            </div>
        </div>
    )
}

export default Homepage;