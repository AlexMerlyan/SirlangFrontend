import React from 'react';
import CodeEditor from './CodeEditor.js';

var contentStyle = {
  width: "100%",
  height: "100%",
  backgroundSize: 'cover',
  overflow: 'hidden',
  backgroundImage: "url('http://fanoboi.com/space/128/space-wallpaper-1366x768.jpg')"
};

var textStyle = {
  margin: "5%",
  marginLeft: "40%"
}

function Content() {
  var backendUrl = 'http://localhost:8080';
  return (
      <div style={contentStyle}>
          <h2>Сударь, это язык с низким порогом вхождения, без пугающих неочевидных синтаксических знаков, которые распространены в других языках</h2>
          <h3 style={textStyle}>Сударь, это просто!</h3>
          <h1>Попробуй запустить свою первую программу на языке программирования Сударь!</h1>
          <CodeEditor url={backendUrl}></CodeEditor>
      </div>
  )
}

export default Content