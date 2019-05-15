import React from 'react';
import './App.scss'

import BlockContent from './components/index'

function App() {
  return (
    <main className="App">
      <header className="header"></header>
      <section className="container content">
        <BlockContent />
      </section>
    </main>
  );
}

export default App;
