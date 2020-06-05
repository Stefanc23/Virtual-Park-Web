import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

function SlickCarousel(props) {
  const [items, setItems] = useState([]);
  const onClick = props.onClick;
  const target = props.target;

  useEffect(() => {
    setItems(props.items);
  }, [props.items])

  var settings = {
    dots: true,
    infinite: false,
    lazyLoad: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className="carousel">
      <div className="slick-carousel">
        <Slider {...settings}>
            {items.map(item => (
                <div id={item._id} className="d-flex flex-column justify-content-center align-items-center px-2" onClick={onClick}>
                  <Link to={{pathname: `/${target}/${item.name}`, state: {item: item, target: target}}} className="btn p-0">
                    <img id={item._id} data-src={item.image} alt="" className="w-100 lazyload"/>
                    <h6 className="m-0 mt-3">{item.name}</h6>
                  </Link>
                </div>
            ))}
        </Slider>
      </div>
    </div>
  );
}

export default SlickCarousel;