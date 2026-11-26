import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function Login() {
    const { setCurrentUser } = useApp();
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const endpoint = isLogin ? 'login' : 'register';

      const response = await fetch(
        `http://localhost:5000/api/auth/${endpoint}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(
            isLogin
              ? { email, password }
              : { name, email, password, phone }
          )
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        setMessage(data.message || 'Something went wrong.');
        return;
      }

      if (data.token) {
        localStorage.setItem('fixzoToken', data.token);
      }

      if (data.user) {
        localStorage.setItem('fixzoUser', JSON.stringify(data.user));

        if (isLogin) {
            setCurrentUser(data.user);
        }
        }

      setMessage(isLogin ? 'Login successful!' : 'Registration successful!');
    } catch (error) {
      setMessage('Could not connect to the server.');
    }
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-surface px-4 py-12">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-primary text-center">
          Welcome to Fixzo
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          {isLogin ? 'Login to your account' : 'Create your Fixzo account'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <>
              <input
                className="w-full border rounded-xl p-3"
                placeholder="Full name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />

              <input
                className="w-full border rounded-xl p-3"
                placeholder="Phone number"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                required
              />
            </>
          )}

          <input
            type="email"
            className="w-full border rounded-xl p-3"
            placeholder="Email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            className="w-full border rounded-xl p-3"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:opacity-90"
          >
            {isLogin ? 'Login' : 'Create Account'}
          </button>
        </form>

        {message && (
          <p className="text-center text-sm mt-4 text-primary">{message}</p>
        )}

        <p className="text-center text-sm mt-6 text-gray-600">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setMessage('');
            }}
            className="ml-2 text-primary font-bold"
          >
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
}