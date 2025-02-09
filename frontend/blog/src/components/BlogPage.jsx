// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// const BlogPage = () => {
//     const [blogs, setBlogs] = useState([]);
//     const [selectedBlog, setSelectedBlog] = useState(null); // For storing the blog to view in modal
//     const [isModalOpen, setIsModalOpen] = useState(false); // To control the modal visibility

//     // Load blogs from local storage
//     useEffect(() => {
//         const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
//         setBlogs(storedBlogs);
//     }, []);

//     // Delete a blog
//     const deleteBlog = (index) => {
//         const updatedBlogs = blogs.filter((_, i) => i !== index);
//         setBlogs(updatedBlogs);
//         localStorage.setItem('blogs', JSON.stringify(updatedBlogs));
//     };

//     // Handle blog click to increase views and open modal
//     const viewBlog = (index) => {
//         const updatedBlogs = [...blogs];
//         updatedBlogs[index].views = (updatedBlogs[index].views || 0) + 1; // Ensure views is initialized to 0 if not present
//         setBlogs(updatedBlogs);
//         localStorage.setItem('blogs', JSON.stringify(updatedBlogs)); // Save the updated blogs to localStorage

//         setSelectedBlog(updatedBlogs[index]);
//         setIsModalOpen(true);
//     };

//     // Close the modal
//     const closeModal = () => {
//         setIsModalOpen(false);
//         setSelectedBlog(null);
//     };

//     return (
//         <div className="p-6">
//             <h2 className="text-3xl italic font-bold mb-6 text-center text-white">Explore the world of blogs</h2>

//             <div className="space-y-6">
//                 {blogs.length === 0 ? (
//                     <p className='text-l m-40 text-center'>No blogs available. Be the first to share your stories</p>
//                 ) : (
//                     blogs.map((blog, index) => (
//                         <div
//                             key={index}
//                             className="flex items-center space-x-4 p-4 rounded-lg shadow-md bg-gray-100 hover:shadow-lg transition duration-300 ease-in-out"
//                         >
//                             <img
//                                 src={blog.image}
//                                 alt={blog.title}
//                                 className="w-16 h-16 object-cover rounded-full transition-transform duration-300 transform hover:scale-110"
//                             />
//                             <div className="flex-1">
//                                 <h3 className="text-lg font-semibold text-gray-900">{blog.title}</h3>
//                                 <p className="text-sm text-gray-600">{blog.author}</p>
//                                 <p className="text-sm text-gray-700">{blog.content.slice(0, 100)}...</p>
//                                 <div className="mt-2 flex items-center space-x-4">
//                                     <button
//                                         onClick={() => deleteBlog(index)}
//                                         className="text-red-500 hover:underline transition duration-300"
//                                     >
//                                         Delete
//                                     </button>
//                                     <button
//                                         onClick={() => viewBlog(index)}
//                                         className="text-blue-500 hover:underline transition duration-300"
//                                     >
//                                         Read More
//                                     </button>
//                                     <span className="text-sm text-gray-500">Views: {blog.views || 0}</span>
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 )}
//             </div>

//             {/* Modal for Blog Content */}
//             {isModalOpen && selectedBlog && (
//                 <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50 transition duration-300">
//                     <div className="bg-white p-6 rounded-lg shadow-lg w-4/5 h-4/5 overflow-y-auto transform scale-100 transition-transform duration-500 ease-in-out">
//                         <h2 className="text-3xl font-bold text-gray-900 text-center">{selectedBlog.title}</h2>
//                         <div className="flex justify-center mb-4">
//                             <img
//                                 src={selectedBlog.image}
//                                 alt={selectedBlog.title}
//                                 className="w-1/2 h-auto object-cover rounded-lg"
//                             />
//                         </div>
//                         <p className="text-sm text-gray-600 mb-4">By {selectedBlog.author}</p>
//                         <p className="text-lg text-gray-800 mb-6">{selectedBlog.content}</p>
//                         <div className="flex justify-end">
//                             <button
//                                 onClick={closeModal}
//                                 className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-300"
//                             >
//                                 Close
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default BlogPage;
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