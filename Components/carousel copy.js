"use client"
// import Carousel from 'react-spring-3d-carousel';
let image1 = "https://random.imagecdn.app/500/150";
let image2 = "https://random.imagecdn.app/500/150";
let image3 = "https://random.imagecdn.app/500/150";
import loadable from "@loadable/component";
const Carousel = loadable(() => import("react-spring-3d-carousel"))

const Demo = () => {
  let a=0
  function uuidv4(){
    return a++
  }
  const slides = [
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/800/?random" alt="1" />
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/800/?random" alt="2" />
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/600/800/?random" alt="3" />
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/500/?random" alt="4" />
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/800/?random" alt="5" />
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/500/800/?random" alt="6" />
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/600/?random" alt="7" />
    },
    {
      key: uuidv4(),
      content: <img src="https://picsum.photos/800/800/?random" alt="8" />
    }
  ];
  return (
    <>

      <Carousel slides={slides} />
    </>
  )
}

export default Demo