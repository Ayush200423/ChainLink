import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './hashtoqr.css';

const HashToQR = () => {
  const [hash, setHash] = useState('');

  return (
    <div>
      <div class="textBox">
        <input
          type="text"
          placeholder="Enter Hash"
          onChange={e => setHash(e.target.value)}
          value={hash}
        />
      </div>
      <div class="qr">
        <QRCode value={hash} />
      </div>
    </div>
  );
};

export default HashToQR;
