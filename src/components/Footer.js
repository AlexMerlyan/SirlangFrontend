import React from 'react';

var footerStyle = {
    marginLeft: "40%"
};

function Footer() {
    var imgUrl = "http://news4auto.ru/wp-content/uploads/2018/04/4619175dca0a0033efd0b49124d78bd8.jpg";
    return (
        <div style={footerStyle}>
            <p>Все права защищены, а может быть и нет</p>
            <img src={imgUrl}></img>
        </div>
    );
}

export default Footer