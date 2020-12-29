import { useState } from 'react';
import './App.css';
import Signin from './components/Signin';
import TwilioVideos from './components/TwilioVideos';

function App() {
  const [token, setToken] = useState();
  const [name, setName] = useState('');
  const [room, setRoom] = useState('room');
  return (
    <div className='App'>
      {!token ? (
        <Signin
          setToken={setToken}
          setName={setName}
          name={name}
          setRoom={setRoom}
          room={room}
        />
      ) : (
        <TwilioVideos token={token} room={room} />
      )}
    </div>
  );
}

export default App;
