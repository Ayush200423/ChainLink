import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

const NewHash = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [details, setDetails] = useState('');
  const [hash, setHash] = useState('');

  const handleGenerate = () => {
    const data = `${name}-${location}-${date}-${details}`;
    const hash = CryptoJS.SHA256(data).toString(CryptoJS.enc.Hex);
    setHash(hash);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Name" 
        onChange={e => setName(e.target.value)}
        value={name}
      />
      <input 
        type="text" 
        placeholder="Location" 
        onChange={e => setLocation(e.target.value)}
        value={location}
      />
      <input 
        type="text" 
        placeholder="Date" 
        onChange={e => setDate(e.target.value)}
        value={date}
      />
      <input 
        type="text" 
        placeholder="Details" 
        onChange={e => setDetails(e.target.value)}
        value={details}
      />
      <button onClick={handleGenerate}>Generate</button>
      <p>Hash: {hash}</p>
    </div>
  );
};

export default NewHash;
