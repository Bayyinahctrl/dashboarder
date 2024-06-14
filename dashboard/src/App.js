import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import ChartsSection from './ChartsSection';
import './App.css';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="main-content">
        <Header />
        <ChartsSection />
      </main>
    </div>
  );
}

export default App;
