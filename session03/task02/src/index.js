import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from './Profile';

function App() {
  return (
      <Profile name="Ilhaan" bio="I am a future software developer" />
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(<App/>);

