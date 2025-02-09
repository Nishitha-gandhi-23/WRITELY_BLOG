import React from 'react';

const AboutPage = () => {
    return (
        <div className="p-6 text-center bg-gray-800 text-white">
            <h2 className="text-3xl font-bold mb-6">About Us</h2>
            <p className="text-xl mb-6">
                We are a group of passionate bloggers who believe in the power of storytelling. Our goal is to create a platform where everyone can share their ideas, experiences, and creativity with the world.
            </p>

            <div className="mb-8">
                <h3 className="text-2xl font-semibold">Our Mission</h3>
                <p>
                    Our mission is to provide a safe, welcoming, and creative space for individuals to express themselves and connect with like-minded people. Whether you're a writer, artist, or just someone with a story to tell, we welcome you to join our community.
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-2xl font-semibold">What We Offer</h3>
                <ul className="list-disc list-inside space-y-2">
                    <li>Easy-to-use blog creation tools.</li>
                    <li>Seamless publishing experience with a focus on creativity.</li>
                    <li>A platform for building a personal brand and audience.</li>
                    <li>Opportunities to connect and collaborate with other bloggers.</li>
                </ul>
            </div>

            <div className="mb-8">
                <h3 className="text-2xl font-semibold">Our Story</h3>
                <p>
                    What started as a small group of friends sharing their thoughts online has evolved into a vibrant community of creators. Over the years, we’ve helped hundreds of bloggers get their voice heard and build a lasting digital presence. We’re excited for what the future holds and can’t wait to see where the power of storytelling takes us next!
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-2xl font-semibold">Contact Us</h3>
                <p>If you have any questions or want to get in touch, feel free to email us at:</p>
                <p className="text-blue-500">contact@myblog.com</p>
            </div>

            <div>
                <h3 className="text-2xl font-semibold">Follow Us</h3>
                <p>Stay connected with us on social media for the latest updates:</p>
                <div className="space-x-4 mt-4">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400">Twitter</a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">Facebook</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500">Instagram</a>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
