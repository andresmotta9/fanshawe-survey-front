import { useState } from 'react';
import useFetch from './hooks/useFetch';

function App() {
  const { data: users, loading, error } = useFetch('USERS');
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Admin Users</h1>

      <div className="bg-white p-4 md:p-6 shadow-md rounded-lg w-full max-w-md">
        {loading && <p className="text-gray-500">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {users && users.length === 0 ? (
          <p className="text-gray-500 text-center">No users found</p>
        ) : (
          <ul className="space-y-2">
            {users?.map((user) => (
              <li
                key={user.id}
                className="p-2 border rounded-md text-center text-sm sm:text-base"
              >
                <p>
                  <strong>Username:</strong> {user.username}
                </p>
                <p className="text-gray-500 text-xs sm:text-sm">
                  <strong>Password Hash:</strong> {user.password_hash}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
