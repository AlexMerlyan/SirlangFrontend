import React from 'react';
import { Carousel } from 'react-bootstrap';
import sirSlide1 from '../../assets/img/sir-slide-1.jpg';
import sirSlide2 from '../../assets/img/sir-slide-2.jpg';
import sirSlide3 from '../../assets/img/sir-slide-3.jpg';

const textStyle = {
    color: 'white',
    textShadow: '0 0 5px rgba(0, 0, 0, 0.5)'
}

function Slider() {
  return (
      <div>
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={sirSlide1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 style={textStyle}>Сударь лучше!</h3>
                <p style={textStyle}>Сударь, это язык с низким порогом вхождения, без пугающих неочевидных синтаксических знаков, которые распространены в других языках</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={sirSlide2}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3 style={textStyle}>Сударь, это просто!</h3>
                <p style={textStyle}>Попробуй и ты поймешь!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={sirSlide3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3 style={textStyle}>Начни прямо сейчас</h3>
                <p style={textStyle}>Попробуй запустить свою первую программу на языке программирования Сударь!</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
      </div>
  )
}

export default Slider
