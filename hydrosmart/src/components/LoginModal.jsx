import React, { useState } from 'react';

const LoginModal = ({ isOpen, onClose, onLogin }) => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API delay
        setTimeout(() => {
            onLogin(email.split('@')[0]); // Use the part before @ as the username
            onClose();
        }, 800);
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative overflow-hidden">

                {/* Close Button */}
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl">✕</button>

                {/* Header */}
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-2">
                    {isSignUp ? "Join HydroSmart" : "Welcome Back"}
                </h2>
                <p className="text-center text-gray-500 mb-6">
                    {isSignUp ? "Create an account to track your savings." : "Sign in to access your dashboard."}
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="user@example.com"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg mt-4"
                    >
                        {isSignUp ? "Create Account" : "Sign In"}
                    </button>
                </form>

                {/* Toggle Sign Up / Login */}
                <div className="mt-6 text-center text-sm text-gray-600">
                    {isSignUp ? "Already have an account?" : "Don't have an account?"}
                    <button
                        onClick={() => setIsSignUp(!isSignUp)}
                        className="text-blue-600 font-bold ml-1 hover:underline"
                    >
                        {isSignUp ? "Log In" : "Sign Up"}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default LoginModal;