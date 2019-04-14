import React from 'react';

var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

function Footer() {
    var imgUrl = "footerImg.jpg";
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
            <p><img  src={imgUrl}></img>Все права защищены, а может быть и нет<img  src={imgUrl}></img></p>
            <img  src={imgUrl}></img>
            </div>
        </div>
    )
}

export default Footer