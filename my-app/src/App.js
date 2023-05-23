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
        <header style={{ marginBottom: '80px', marginTop: '50px', color: '#3fcbd1' }}>
    <h1>Sophie McNally</h1>
    <h2>Front-End Web Developer</h2>
    <p>I am a newly graduated bootcamp student looking for a junior or internship role</p>
  </header>
        {/* (left side) */}
      </div>
      <div
        style={{
          flex: 1,
          backgroundColor: '#fff',
          overflowY: 'scroll',
        }}
      >
        
        <div style={{ padding: '15px' }}>
          {/* (right side) */}
        </div>
      </div>
    </div>
  );
};

export default App;
