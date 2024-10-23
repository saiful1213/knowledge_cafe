import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = (props) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} {...props}></Blog>)
            }
        </div>
    )
}

export default Blogs;