import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col">
            <section className="flex-grow flex items-center justify-center text-center bg-gradient-to-r from-gray-800 via-gray-900 to-black py-16">
                <div>
                    <h1 className="text-5xl  font-extrabold mb-6 leading-tight">
                        Welcome to <span className="text-blue-400">Writely</span>
                    </h1>
                    <p className="text-xl italic mb-8">Your Stories, Writely Told.</p>
                    <div className="flex justify-center space-x-6">
                        <Link to="/add-blog" className="bg-gray-800 text-blue-200 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
                            Start Writing
                        </Link>
                        <Link to="/blogs" className="bg-gray-800 text-blue-200 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
                            Explore Stories
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Writely Section */}
            <section className="py-16 bg-gray-850 text-center">
                <h2 className="text-4xl font-bold mb-10 text-blue-800">Why Writely?</h2>
                <div className="space-y-6 max-w-4xl mx-auto">
                    <p className="text-xl">✨ Simple & Intuitive: Write and publish with ease.</p>
                    <p className="text-xl">🌍 Reach the World: Share your stories with a growing community.</p>
                    <p className="text-xl">📸 Add Visuals: Bring your stories to life with beautiful images.</p>
                    <p className="text-xl">🔐 Secure & Private: Your words, your control.</p>
                    <p className="text-xl">🖊️ For Everyone: Whether you're a poet, blogger, or storyteller.</p>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-12 bg-gray-950 text-center">
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">Find out who we are and why we do what we do.</h3>
                <Link to="/about" className="bg-blue-100 font-semibold text-gray-900 px-8 py-3 rounded-lg shadow-lg hover:bg-blue-100 transition duration-300">
                    Discover
                </Link>
            </section>



        </div>
    );
}
