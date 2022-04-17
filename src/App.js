import React, { useState } from 'react';
import './App.css';

function App() {
  const [pages] = useState([
    { name: "about me" },
    { name: "portfolio" },
    { name: "contact" },
    { name: "resume" }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <header>
        <Nav 
            pages={pages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}></Nav>
      </header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
    
  );
}

export default App;
