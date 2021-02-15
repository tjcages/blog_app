import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectSignedIn, selectUserData, setInput, setUserData, setSignedIn } from '../features/userSlice'

import { Avatar } from '@material-ui/core'
import { GoogleLogout } from 'react-google-login'

const Navbar = () => {
    const [inputValue, setInputValue] = useState("tech")
    const isSignedIn = useSelector(selectSignedIn)
    const userData = useSelector(selectUserData)
    const dispatch = useDispatch()

    const logout = (response) => {
        dispatch(setSignedIn(false))
        dispatch(setUserData(null))
    }

    const handleClick = (response) => {
        console.log('on click')
    }

    return (
        <div className="navbar">
            <div className="navbar_header">BlogMania 💬</div>
            {isSignedIn && (
                <div className="blog_search">
                    <input 
                    className="search"
                    placeholder="Search for a blog"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button className="submit" onClick={handleClick}>Search</button>
                </div>
                )}

                {isSignedIn && (
                    <div className="navbar_user_data">
                        <Avatar src={userData?.imageUrl} alt={userData?.name} />
                        <h1 className="signedIn">{userData?.givenName}</h1>
                        <GoogleLogout
                        clientId="699620956557-821i2pm3rfan358gd1cl0psts5cg2d36.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <button
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            className="logout_button"
                            >
                                Logout 🙃
                            </button>
                        )}
                        onLogoutSuccess={logout}
                        />
                    </div>
                )}
        </div>
    )
}

export default Navbar
