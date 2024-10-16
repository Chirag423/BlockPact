import React, { useState } from 'react';

const BuyerPage: React.FC = () => {
  const [textAreaValue, setTextAreaValue] = useState('');

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(event.target.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
        <textarea
          value={textAreaValue}
          onChange={handleTextAreaChange}
          placeholder="Write here..."
          style={{ width: '100%', height: '100%', resize: 'none' }}
        />
      </div>
      <div style={{ padding: '20px', borderTop: '1px solid #ccc', backgroundColor: '#f9f9f9' }}>
        <h3 style={{ color: '#333' }}>Questions</h3>
        <ul style={{ color: '#333' }}>
          <li>1. Duration Of Contract</li>
          <li>2. Frequency of Delivery</li>
          <li>3. Product Name</li>
          <li>4. Product Number</li>
          <li>5. Futures Price Per Unit</li>
          <li>6. Number of Units per Delivery</li>
        </ul>
      </div>
    </div>
  );
};

export default BuyerPage;
