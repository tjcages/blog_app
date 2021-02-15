import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectSignedIn } from '../features/userSlice'

const Navbar = () => {
    const [inputValue, setInputValue] = useState("tech")
    const isSignedIn = useSelector(selectSignedIn)

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
        </div>
    )
}

export default Navbar
