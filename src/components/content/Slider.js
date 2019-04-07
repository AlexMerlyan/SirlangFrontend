import React from 'react';
import { Carousel } from 'react-bootstrap'

function Slider() {
  return (
      <div>
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://cs6.pikabu.ru/post_img/big/2014/08/07/2/1407372313_1777995650.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 style={{color:'white'}}>Сударь лучше!</h3>
                <p style={{color:'white'}}>Сударь, это язык с низким порогом вхождения, без пугающих неочевидных синтаксических знаков, которые распространены в других языках</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://www.meme-arsenal.com/memes/76c8c80c9ef825020a820b2171559aaf.jpg"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Сударь, это просто!</h3>
                <p>Попробуй и ты поймешь!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://besplatka.ua/aws/42/03/56/93/programmist-srochno-photo-fd7e.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3 style={{color:'white'}}>Начни прямо сейчас</h3>
                <p style={{color:'white'}}>Попробуй запустить свою первую программу на языке программирования Сударь!</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
      </div>
  )
}

export default Slider