import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenText } from 'lucide-react';



const Header = () => {
    return (
        <header className="w-screen bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 text-white p-4">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                <div flex space-x-2>
                    <ul className="flex space-x-1">
                        <li>
                            <BookOpenText className='w-8 h-8' />
                        </li>
                        <li>
                            <h1 className="text-2xl font-bold">Writely</h1>
                        </li>
                    </ul>

                </div>

                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link to="/" className="hover:text-gray-200 transition duration-300">Home</Link>
                        </li>
                        <li>
                            <Link to="/blogs" className="hover:text-gray-200 transition duration-300">Blogs</Link>
                        </li>
                        <li>
                            <Link to="/add-blog" className="hover:text-gray-200 transition duration-300">Add Blog</Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-gray-200 transition duration-300">About Us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
