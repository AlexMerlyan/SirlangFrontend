import React from 'react';
import imgUrl from '../assets/img/i-dont-know.jpg';

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
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
            <p>
                <img src={imgUrl} alt="" />
                <span style={{ margin: '0 10px' }}>Все права защищены, а может быть и нет</span>
                <img  src={imgUrl} alt="" />
            </p>
            </div>
        </div>
    )
}

export default Footer
