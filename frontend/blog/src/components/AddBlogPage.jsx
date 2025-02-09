import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBlogPage = () => {
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newBlog = { author, title, content, image };

        try {
            const response = await fetch('http://localhost:5000/api/blogs', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newBlog),
            });

            if (response.ok) {
                alert('Blog added successfully!');
                setAuthor('');
                setTitle('');
                setContent('');
                setImage('');
                navigate('/blogs');
            } else {
                alert('Failed to add blog.');
            }
        } catch (error) {
            console.error('Error adding blog:', error);
            alert('An error occurred while adding the blog.');
        }
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Add a New Blog</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Author Name"
                    className="p-2 border rounded-md w-full"
                    required
                />
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Blog Title"
                    className="p-2 border rounded-md w-full"
                    required
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Blog Content"
                    className="p-2 border rounded-md w-full"
                    required
                ></textarea>
                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="Image URL"
                    className="p-2 border rounded-md w-full"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    Add Blog
                </button>
            </form>
        </div>
    );
};

export default AddBlogPage;
