import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserInput, setBlogData } from '../features/userSlice'


const Blogs = () => {
    const searchInput = useSelector(selectUserInput)
    const blog_url = `https://gnews.io/api/v4/search?q=${searchInput}&token=739dfe21d0f8e7d512e07db06c15900a`
    const dispatch = useDispatch()
    const [blogs, setBlogs] = useState()
    const [loading, setLoading] = useState()

    useEffect(() => {
        axios
        .get(blog_url)
        .then((response) => {
            dispatch(setBlogData(response.data))
            setBlogs(response.data)
            setLoading(false)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [searchInput])

    return (
        <div className="blog_page">
            <h1 className="blog_page_header">Blogs</h1>
        </div>
    )
}

export default Blogs
