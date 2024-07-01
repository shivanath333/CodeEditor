import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
//import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-javascript'; // JavaScript language support
import 'prismjs/components/prism-java'; // Java language support
import 'prismjs/components/prism-c'; // C language support
import 'prismjs/components/prism-cpp'; // C++ language support
import 'prismjs/components/prism-python'; // Python language support

const editorStyle = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
};

const textareaStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '600px',
  height: '300px',
  zIndex: 1,
  fontSize: '16px',
  lineHeight: '1.5',
  padding: '10px',
  boxSizing: 'border-box',
  color: '#ffffff',
  backgroundColor: 'transparent',
  caretColor: '#ffffff',
  border: 'none', 
};

const codeStyle = {
  margin: 0,
  fontSize: '16px',
  lineHeight: '1.5',
  whiteSpace: 'pre-wrap',
  wordWrap: 'break-word',
  padding: '10px',
  boxSizing: 'border-box',
  height: '300px',
  width: '600px',
  overflow: 'auto',
  pointerEvents: 'none',
};

const getInitialCode = (language) => {
  switch (language) {
    case 'javascript':
      return `console.log('Hello World!');`;
    case 'java':
      return `public class HelloWorld {
  public static void main(String[] args) {
    System.out.println("Hello World!");
  }
}`;
    case 'c':
      return `#include <stdio.h>

int main() {
  printf("Hello, World!\\n");
  return 0;
}`;
    case 'cpp':
      return `#include <iostream>

int main() {
  std::cout << "Hello, World!" << std::endl;
  return 0;
}`;
    case 'python':
      return `print("Hello, World!")`;
    default:
      return '';
  }
};

const CodeEditor = ({ language }) => {
  const [code, setCode] = useState('');

  useEffect(() => {
    Prism.highlightAll();
    const initialCode = getInitialCode(language);
    setCode(initialCode);
  }, [language]);

  return (
    <div style={editorStyle}>
      <textarea
        style={textareaStyle}
        value={code}
        onChange={(event) => setCode(event.target.value)}
      />
      <pre style={codeStyle} className={`language-${language}`}>
         <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeEditor;
