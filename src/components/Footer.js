import React from 'react';

// var footerStyle = {
//     marginLeft: "40%"
// };

// function Footer() {
//     var imgUrl = "http://news4auto.ru/wp-content/uploads/2018/04/4619175dca0a0033efd0b49124d78bd8.jpg";
//     return (
//         <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
//             <p>Все права защищены, а может быть и нет</p>
//             <img src={imgUrl}></img>
//         </div>
//     );
// }

// export default Footer

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