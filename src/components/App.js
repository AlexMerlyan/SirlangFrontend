import React from 'react';
import CodeEditor from './CodeEditor.js';

function App() {
  var backendUrl = 'http://localhost:8080';
  return (
      <div>
          <h1>SirLang</h1>
          <CodeEditor url={backendUrl}></CodeEditor>
      </div>
  )
}

export default App