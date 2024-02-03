"use client"
import React, { useEffect, useState } from "react";
import loadable from "@loadable/component";
const Carousel = loadable(() => import("react-spring-3d-carousel"))

const MyCarousel = ({ itemList,targetDiv="carousel" }) => {
  // keep track of the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);
  const [xDown, setxDown] = useState(0);
  const [yDown, setyDown] = useState(0);

  
  // convert the itemList to slides format
  
  const HandleOnClick = (item,index) => {
    let carousel = document.getElementById(targetDiv)
    setCurrentSlide(index);
    carousel.style.backgroundImage = `url('${item.image}')`
  }

  const slides = itemList.map((item, index) => ({
    key: index,
    content: <img src={item.image} alt={item.title} />,
    // onclick:()=>alert("akjsbdka")
    onClick: ()=>{HandleOnClick(item,index)}
  }));

  const handleReadMore = () => {
    // open a card with the image description
    alert(itemList[currentSlide].description);
  };
  const getTouches = (evt) => {
    return (
      evt.touches || evt.originalEvent.touches // browser API
    );
  };

  // handle the read more button click

  let handleTouchStart = (evt) => {
    console.log("askjdbaksjdbajsdhsjdvdjhsaj djasdvhasjdahdsajkdhvsadkh")
    const firstTouch = getTouches(evt)[0];
    setxDown(firstTouch.clientX)
    setyDown(firstTouch.clientY)
  };



  let handleTouchMove = (evt) => {
    console.log("askjdnakjsdbaskb")
    if ((!xDown && !yDown)) {
      return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        /* left swipe */
        setCurrentSlide(currentSlide + 1)
        setxDown(null)
        setyDown(null)
      } else {
        /* right swipe */
        setCurrentSlide(currentSlide - 1)
        setxDown(null)
        setyDown(null)
      }
    }
  };

  useEffect(() => {
    document.getElementById(targetDiv).style.backgroundImage = `url('${itemList[0].image}')`
    console.log(slides[0].image)
  }, [])


  return (
    <div id="carousel" className="w-5/5 h-full" >

      <Carousel
        slides={slides}
        goToSlide={currentSlide}
        showNavigation={false}
        offsetRadius={2}
        animationConfig={{ tension: 120, friction: 14 }}
        onChange={(index) => console.log(index)}
      />
    </div>
  );
};

export default MyCarousel;
