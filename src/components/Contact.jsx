import { useState } from "react";

const Contact = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple email regex
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            setError("Please enter a valid email address.");
        } else {
            setError("");
            alert("Message sent successfully!");
            setEmail("");
        }
    };

    return (
        <section
            id="contact"
            className="mt-20 scroll-mt-20 h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
        >
            <div className="bg-gray-800 rounded-2xl p-10 w-[90%] sm:w-[70%] md:w-[50%] shadow-lg">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Contact Me
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div>
                        <label className="block text-sm text-gray-400 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border ${
                                error
                                    ? "border-red-500 focus:ring-red-500"
                                    : "border-gray-600 focus:ring-blue-500"
                            } focus:outline-none focus:ring-2 transition`}
                        />
                        {error && (
                            <p className="text-red-500 text-sm mt-2">{error}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm text-gray-400 mb-2">
                            Message
                        </label>
                        <textarea
                            placeholder="Drop a message..."
                            rows="4"
                            className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
