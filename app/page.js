"use client"
import MyCarousel from "@/Components/carousel";

// import { useEffect } from "react";
import "./globals.css"
import Demo from "@/Components/carousel copy";

export default function Home() {

  const carouselItems = [
    {
      title: 'Your Amazing...',
      description: "I was thinking about you today and couldn't help but smile. Your presence has a way of making everything better.",
      image: 'https://iili.io/J5Lmu4V.png',
    },
    {
      title: 'You are Magical',
      description: 'Are you a magician? Because whenever I look at you, everyone else disappears. ✨',
      image: 'https://iili.io/J5Lm7v1.png',
    },
    {
      title: 'You are Always in my mind',
      description: "You're like a fine wine – you get better with time. 😍",
      image: 'https://iili.io/J5Lm5YP.png',
    },
    {
      title: 'When I Lost I find You...',
      description: 'Do you have a map? Because I just keep getting lost in your eyes every time I see you. 🌟',
      image: 'https://iili.io/J5LmcTg.png',
    },
    {
      title: 'You are cute ..',
      description: 'If you were a cat, you\'d purr-fectly steal my heart.',
      image: 'https://iili.io/J5Lmlja.pngg',
    },
    
    // Add more objects for additional carousel items
  ];
  return (
    <>

      <div className=" border-red-600 w-[90vw] h-[90vh]">
        <MyCarousel itemList={carouselItems} />
        {/* <Demo /> */}
      </div>

    </>
  );
}
