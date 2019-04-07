import React from 'react';
import CodeEditor from './content/CodeEditor.js';
import Slider from './content/Slider.js'

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
};

function Content() {
  var backendUrl = 'https://calm-lake-11769.herokuapp.com';
  //var backendUrl = 'http://localhost:8080';

  return (
      <div>
          <Slider></Slider>
          <CodeEditor url={backendUrl}></CodeEditor>
      </div>
  )
}

export default Content