import React from 'react'
import GoogleLogin from 'react-google-login'
import '../styling/home.css'

import { useSelector } from 'react-redux'
import { selectSignedIn } from '../features/userSlice'

const Homepage = () => {
    const login = (response) => {
        console.log(response)
    }

    const isSignedIn = useSelector(selectSignedIn)

    return (
        <div className="home_page" style={{display: isSignedIn ? "none" : ""}}>
            {!isSignedIn ? (
            <div className="login_message">
                <h2>📚</h2>
                <h1>A Readers favorite place!</h1>
                <p>
                    We provide high quality online resources for reading blogs. Just sign up and start reading some quality blogs.
                </p>

                <GoogleLogin
                clientId="699620956557-821i2pm3rfan358gd1cl0psts5cg2d36.apps.googleusercontent.com"
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
            ) : ""}
        </div>
    )
}

export default Homepage;