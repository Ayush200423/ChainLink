import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';

function QRScanner() {
  const [result, setResult] = useState(null);
  const [scanning, setScanning] = useState(false);

  const handleScan = (data) => {
    if (data) {
      setResult(data);
      setScanning(false);
    }
  }

  return (
    <div>
      {scanning ? (
        <QrScanner
          onError={console.error}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
      ) : (
        <div>
          <button onClick={() => setScanning(true)}>Scan QR</button>
          {result && <p>Scanned QR Code: {result}</p>}
        </div>
      )}
    </div>
  );
}

export default QRScanner;
