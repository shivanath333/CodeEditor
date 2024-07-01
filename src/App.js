import React, { useState } from 'react';
import CodeEditor from './CodeEditor';
import './App.css'; // Import scoped CSS for App component

const App = () => {
  const [language, setLanguage] = useState('javascript'); // Default language

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="app-container">
      <h1>Simple Code Editor</h1>
      <select
        value={language}
        onChange={handleLanguageChange}
        className="language-select"
      >
        <option value="javascript">JavaScript</option>
        <option value="java">Java</option>
        <option value="c">C</option>
        <option value="cpp">C++</option>
        <option value="python">Python</option>
      </select>
      <CodeEditor language={language} />
    </div>
  );
};

export default App;
