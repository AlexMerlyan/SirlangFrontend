import React from 'react';
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';

var appStyle = {
  backgroundImage: "url('http://loveopium.ru/content/2013/02/space_feb2013/01s.jpg')"
};

function App() {
  return (
      <div style={appStyle}>
          <Header />
          <Content />
          <Footer />
      </div>
  )
}

export default App
