import './App.css';
import React from 'react';



const App = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div
        style={{
          flex: 1,
          backgroundColor: '#f2f2f2',
          overflow: 'hidden',
        }}
      >
        {/* Content for the static column (left side) */}
      </div>
      <div
        style={{
          flex: 1,
          backgroundColor: '#fff',
          overflowY: 'scroll',
        }}
      >
        <div style={{ padding: '15px' }}>
          {/* Content for the scrollable column (right side) */}
        </div>
      </div>
    </div>
  );
};

export default App;
