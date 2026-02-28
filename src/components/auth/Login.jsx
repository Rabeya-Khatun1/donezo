import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const navigate = useNavigate();

  const handleSubmit= async(e) => {
    e.preventDefault();
  try {                                                           
    const response = await fetch('https://task-api-eight-flax.vercel.app/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token);
      navigate("/");
    } 

  } catch (error) {
    console.error("Error:", error);
  }
    const token = "secret_token_1233214321";
    localStorage.setItem("token", token);
    navigate("/"); 
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f3f4f6] p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#0e3e2b]">Welcome Back</h1>
          <p className="text-gray-400 text-sm mt-1">Sign in to your account</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-[12px] font-bold text-gray-600 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:ring-1 focus:ring-green-800 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-[12px] font-bold text-gray-600 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:ring-1 focus:ring-green-800 outline-none"
              required
            />
          </div>

          <div className="flex justify-between items-center text-[12px] text-gray-500">
            <label>
              <input type="checkbox" className="mr-1" />
              Remember me
            </label>
            <a href="#" className="text-green-800 font-bold">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#0e3e2b] text-white py-3 rounded-2xl font-bold hover:bg-green-900 transition-colors"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-[12px] text-gray-400">
          Don’t have an account? <a href="#" className="text-green-800 font-bold">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;