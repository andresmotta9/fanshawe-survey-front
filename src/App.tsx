import React from 'react';
import useFetch from './hooks/useFetch';

interface User {
  id: number;
  username: string;
  password_hash: string;
}

function App() {
  const { data: users, loading, error } = useFetch<User[]>('USERS');

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900 p-4">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">
        User List
      </h1>

      <div className="bg-white p-4 md:p-6 shadow-md rounded-lg w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl">
        {loading && <p className="text-gray-500">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {users && users.length === 0 ? (
          <p className="text-gray-500 text-center">No users found</p>
        ) : (
          <ul className="space-y-2 w-full">
            {users?.map((user) => (
              <li
                key={user.id}
                className="p-2 border rounded-md text-center text-sm sm:text-base break-words"
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
