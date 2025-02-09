import React, { useState, useEffect } from 'react';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/blogs')
            .then(response => response.json())
            .then(data => setBlogs(data))
            .catch(error => console.error('Error fetching blogs:', error));
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Blogs</h2>
            {blogs.map(blog => (
                <div key={blog.id} className="p-4 border rounded mb-4">
                    <h3 className="text-xl font-semibold">{blog.title}</h3>
                    <p className="text-gray-600">By {blog.author}</p>
                    <p>{blog.content}</p>
                    {blog.image && <img src={blog.image} alt="Blog" className="mt-2 w-full max-w-md" />}
                </div>
            ))}
        </div>
    );
};

export default BlogPage;