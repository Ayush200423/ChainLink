import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const HashToQR = () => {
  const [hash, setHash] = useState('');

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter Hash" 
        onChange={e => setHash(e.target.value)}
        value={hash}
      />
      <QRCode value={hash} />
    </div>
  );
};

export default HashToQR;
