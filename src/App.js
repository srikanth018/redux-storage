
import './App.css';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setClientInfo } from './redux/actions';
import axios from 'axios';

function App() {
  const dispatch = useDispatch();
  const clientInfo = useSelector((state) => state);
  const [loading, setLoading] = useState(false);
  const [inputClientId, setInputClientId] = useState('');
  const [inputUserId, setInputUserId] = useState('');

  const handleLogin = async () => {
    // Check if both clientId and userId are provided
    if (!inputClientId || !inputUserId) {
      alert('Please enter both Client ID and User ID.');
      return;
    }

    setLoading(true);

    try {
      // Simulating a login API call using jsonplaceholder.typicode.com with the provided userId
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${inputUserId}`);

      // Extracting relevant data from the API response
      const { id: userId, username, email } = response.data;

      // Dispatch action to update the client information in the Redux store
      dispatch(setClientInfo(inputClientId, 'https://example.com/logo.png', userId, username));
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Redux State Storage</h1>
      {clientInfo.clientId ? (
        <div className="client-info-section">
          <p>Client ID: {clientInfo.clientId}</p>
          <p>Client Logo URL: {clientInfo.clientLogoUrl}</p>
          <p>User ID: {clientInfo.userId}</p>
          <p>Username: {clientInfo.username}</p>
        </div>
      ) : (
        <div>
          <label>
            Client ID:
            <input
              type="text"
              value={inputClientId}
              onChange={(e) => setInputClientId(e.target.value)}
            />
          </label>
          <br />
          <label>
            User ID:
            <input
              type="text"
              value={inputUserId}
              onChange={(e) => setInputUserId(e.target.value)}
            />
          </label>
          <br />
          <button onClick={handleLogin} disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
