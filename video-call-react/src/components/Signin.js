import React from 'react';
import axios from 'axios';
function Signin({ setToken, setName, setRoom, name, room }) {
  //const handleSubmit = async (event) => {}
  async function handleSubmit(event) {
    event.preventDefault();
    const result = await axios.post(
      'https://video-call-2501-dev.twil.io/video-token',
      {
        identity: name,
        room,
      }
    );
    setToken(result.data);
    console.log('Got the token with value:', result.data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>
        Name
        <input
          type='text'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label htmlFor='room'>
        Room
        <input
          type='text'
          id='room'
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
      </label>
      <br />
      <button type='submit'>Join the chat</button>
    </form>
  );
}

export default Signin;
