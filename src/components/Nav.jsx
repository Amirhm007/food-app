import React from "react";
import { useState, useEffect } from "react";

function Nav() {
  const [currentSlide, setcurrentSlide] = useState(1);
  function nextSlide() {
    setcurrentSlide((prev) => {
      return prev === 3 ? 1 : prev + 1;
    });
  }
  function prevSlide() {
    setcurrentSlide((prev) => {
      return prev === 1 ? 3 : prev - 1;
    });
  }
  useEffect(function () {
    const timer = setInterval(() => {
      setcurrentSlide((prev) => {
        return (prev % 3) + 1;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <button
        class="
    flex items-center justify-center 
    p-2.5  duration-300 
     text-gold-50 hover:bg-gold-50
     hover:text-black
    shadow-lg absolute right-15 top-1/2 rotate-45 border-2
    border-gold-50 z-10 cursor-pointer
"
        onClick={nextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="currentColor"
          className="w-6 h-6 -rotate-45"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
      <button
        class="
   flex items-center justify-center 
    p-2.5   duration-300 
     text-gold-50 hover:bg-gold-50
     hover:text-black
    shadow-lg absolute left-15 top-1/2 rotate-45 border-2
    border-gold-50 cursor-pointer z-10 cursor-pointesr
    "
        onClick={prevSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2.5"
          stroke="currentColor"
          className="w-6 h-6 -rotate-45"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </button>
      <img
        src={`/hero-slider-${currentSlide}.jpg`}
        alt=""
        className="-z-40 absolute animate-scale object-cover h-full w-full "
      />
      <div className="text-black w-[110px] h-[110px] py-1 px-4 absolute top-9/12 right-20 m bg-gold-50">
        <img
          src="/features-icon-2.png"
          alt="Features Icon"
          className=" filter invert sepia-0 saturate-0 brightness-0"
        />
        <p className="text-black font-bold text-[12px] p-1 text-center">
          BOOK A <br />
          TABLE
        </p>
      </div>
      <div className="-z-10 w-[110px] h-[110px] absolute top-9/12 right-20 py-1 px-4  border-2 border-gold-50 animate-rotate"></div>
      <div className=" flex px-5 py-2 justify-between border-b-2 border-gold-400 text-white">
        <div className="flex">
          <div className="  mr-8 flex animate-down">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#fff"
              >
                <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
              </svg>
            </span>
            <p className="">Restaurant St, Delicious City, London 9578, UK</p>
          </div>
          <div className="h-2 w-2 m-3 rotate-45 border-2 border-gold-50"></div>

          <div className=" ml-8 flex animate-down">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#fff"
              >
                <path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-800q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Zm0-360Zm112 168 56-56-128-128v-184h-80v216l152 152ZM224-866l56 56-170 170-56-56 170-170Zm512 0 170 170-56 56-170-170 56-56ZM480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720q-117 0-198.5 81.5T200-440q0 117 81.5 198.5T480-160Z" />
              </svg>
            </span>
            <p>Daily : 8.00 am to 10.00 pm</p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-8 flex animate-down">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#fff"
              >
                <path d=" M162-120q-18 0-30-12t-12-30v-162q0-13 9-23.5t23-14.5l138-28q14-2 28.5 2.5T342-374l94 94q38-22 72-48.5t65-57.5q33-32 60.5-66.5T681-524l-97-98q-8-8-11-19t-1-27l26-140q2-13 13-22.5t25-9.5h162q18 0 30 12t12 30q0 125-54.5 247T631-329Q531-229 409-174.5T162-120Zm556-480q17-39 26-79t14-81h-88l-18 94 66 66ZM360-244l-66-66-94 20v88q41-3 81-14t79-28Zm358-356ZM360-244Z" />
              </svg>
            </span>
            <div>09014994115</div>
          </div>

          <div className="h-2 w-2 m-3 rotate-45 border-2 border-gold-50 "></div>

          <div className="ml-8 flex animate-down">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#fff"
              >
                <path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
              </svg>
            </span>
            <p>seyedamirmosavi2005@gmail.com</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex p-5 justify-between">
          <img src="/logo.svg" alt="event" className="animate-left1" />
          <ul className="flex text-white pt-7 space-x-3 animate-down">
            <li
              className="text-[19px] relative p-2 duration-150 after:absolute after:bottom-0 after:right-8 after:border-y-2 after:border-gold-50 after:p-[2px]  
        after:w-0 after:opacity-0 after:duration-300 after:content-[''] hover:after:scale-x-[13] hover:after:opacity-100 hover:after:text-gold-50"
            >
              Home
            </li>
            <li
              className="text-[19px] relative p-2 duration-150 after:absolute after:bottom-0 after:right-9 after:border-y-2 after:border-gold-50 after:p-[2px]  
        after:w-0 after:opacity-0 after:duration-300 after:content-[''] hover:after:scale-x-[14.5] hover:after:opacity-100 hover:after:text-gold-50"
            >
              Menus
            </li>
            <li
              className="text-[19px] relative p-2 duration-150 after:absolute after:bottom-0 after:right-12 after:border-y-2 after:border-gold-50 after:p-[2px]  
        after:w-0 after:opacity-0 after:duration-300 after:content-[''] hover:after:scale-x-[19] hover:after:opacity-100 hover:after:text-gold-50"
            >
              About Us
            </li>
            <li
              className="text-[19px] relative p-2 duration-150 after:absolute after:bottom-0 after:right-11 after:border-y-2 after:border-gold-50 after:p-[2px]  
        after:w-0 after:opacity-0 after:duration-300 after:content-[''] hover:after:scale-x-[20] hover:after:opacity-100 hover:after:text-gold-50"
            >
              Our chefs
            </li>
            <li
              className="text-[19px] relative p-2 duration-150 after:absolute after:bottom-0 after:right-9 after:border-y-2 after:border-gold-50 after:p-[2px]  
        after:w-0 after:opacity-0 after:duration-300 after:content-[''] hover:after:scale-x-[17] hover:after:opacity-100 hover:after:text-gold-50"
            >
              Contact
            </li>
          </ul>
          <button class="animate-right1 btnclick group relative z-10 hidden h-12 w-32 cursor-pointer overflow-hidden rounded-md border-none bg-gold-50 p-2 text-xs font-bold text-black sm:block">
            Find a Table!
            <span class="absolute -left-2 -top-8 h-32 w-36 origin-left rotate-12 scale-x-0 transform bg-black transition-transform duration-1000 group-hover:scale-x-100 group-hover:duration-500"></span>
            <span class="absolute -left-2 -top-8 h-32 w-36 origin-left rotate-12 scale-x-0 transform bg-black transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-700"></span>
            <span class="absolute -left-2 -top-8 h-32 w-36 origin-left rotate-12 scale-x-0 transform bg-gold-50 transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-1000"></span>
            <span class="absolute left-6 top-2.5 z-10 pl-2 text-center text-xl text-black opacity-0 duration-100 group-hover:opacity-100 group-hover:duration-1000">
              Click!
            </span>
          </button>
        </div>
        <div className="flex flex-col items-center  mt-6  animate-top1">
          <p className="text-xl text-gold-50 uppercase">Tradational & Hygine</p>
          <img src="/separator.svg" alt="logo" className="h-7 w-32 mt-2 mb-2" />
        </div>

        {currentSlide === 1 && (
          <div className="animate-top1 flex flex-col items-center space-y-14 mt-6 mb-20">
            <p className="text-8xl text-white font-bold text-center">
              For the love of <br />
              delicious food
            </p>

            <p className="text-3xl text-white font-bold mt-4 mb-8">
              Come with family & feel the joy of mouthwatering food
            </p>
            <button class="inline-flex items-center justify-center px-6 py-3 rounded-md transition duration-300 ease-in-out border border-gold-50 text-gold-50 bg-transparent hover:bg-gold-50 hover:text-black text-base font-bold cursor-pointer">
              View Our Menu
            </button>
          </div>
        )}

        {currentSlide === 2 && (
          <div className="animate-top1 flex flex-col items-center space-y-14 mt-6 mb-20">
            <p className="text-8xl text-white font-bold text-center">
              Flavors Inspired by <br />
              the Seasons
            </p>

            <p className="text-3xl text-white font-bold mt-4 mb-8">
              Come with family & feel the joy of mouthwatering food
            </p>
            <button class="inline-flex items-center justify-center px-6 py-3 rounded-md transition duration-300 ease-in-out border border-gold-50 text-gold-50 bg-transparent hover:bg-gold-50 hover:text-black text-base font-bold cursor-pointer">
              View Our Menu
            </button>
          </div>
        )}

        {currentSlide === 3 && (
          <div className="animate-top1 flex flex-col items-center space-y-14 mt-6 mb-20">
            <p className="text-8xl text-white font-bold text-center">
              Where every flavor <br />
              tells a story
            </p>

            <p className="text-3xl text-white font-bold mt-4 mb-8">
              Come with family & feel the joy of mouthwatering food
            </p>
            <button class="inline-flex items-center justify-center px-6 py-3 rounded-md transition duration-300 ease-in-out border border-gold-50 text-gold-50 bg-transparent hover:bg-gold-50 hover:text-black text-base font-bold cursor-pointer">
              View Our Menu
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Nav;
