import React from "react";
function FooterSection() {
  return (
    <section className="text-center text-white flex justify-center items-center h-screen w-full bg-black space-x-28 relative ">
      <img
        src="/footer-bg.jpg"
        alt=""
        className="object-cover absolute z-10 right-0 top-0 w-full h-screen"
      />
      <ul className="flex flex-col space-y-16 text-xl z-20">
        <li className=" relative p-2 duration-150 after:absolute after:bottom-0 after:right-11 after:border-y-2 after:border-gold-50 after:p-[2px]  after:w-0 after:opacity-0 after:duration-300 after:content-[''] hover:after:scale-x-[13] hover:after:opacity-100 hover:after:text-gold-50">
          Home
        </li>
        <li
          className="relative p-2 duration-150 after:absolute after:bottom-0 after:right-13 after:border-y-2 after:border-gold-50 after:p-[2px]  
        after:w-0 after:opacity-0 after:duration-300 after:content-[''] hover:after:scale-x-[14] hover:after:opacity-100 hover:after:text-gold-50"
        >
          Menus
        </li>
        <li
          className="relative p-2 duration-150 after:absolute after:bottom-0 after:right-13 after:border-y-2 after:border-gold-50 after:p-[2px]  
        after:w-0 after:opacity-0 after:duration-300 after:content-[''] hover:after:scale-x-[20] hover:after:opacity-100 hover:after:text-gold-50"
        >
          About Us
        </li>
        <li
          className="relative p-2 duration-150 after:absolute after:bottom-0 after:right-12 after:border-y-2 after:border-gold-50 after:p-[2px]  
        after:w-0 after:opacity-0 after:duration-300 after:content-[''] hover:after:scale-x-[21] hover:after:opacity-100 hover:after:text-gold-50"
        >
          Our Chefs
        </li>
        <li
          className="relative p-2 duration-150 after:absolute after:bottom-0 after:right-13 after:border-y-2 after:border-gold-50 after:p-[2px]  
        after:w-0 after:opacity-0 after:duration-300 after:content-[''] hover:after:scale-x-[17] hover:after:opacity-100 hover:after:text-gold-50"
        >
          Contact
        </li>
      </ul>
      <div className="flex flex-col items-center z-20 relative p-20 h-[35rem] w-[30rem] bg-black">
        <img
          src="/footer-form-bg.png"
          alt=""
          className="absolute object-cover top-0 left-0 z-20 h-[35rem] w-[30rem]"
        />
        <img
          src="/footer-form-pattern.svg"
          alt=""
          className="absolute top-0 left-0 h-[35rem]"
        />
        <img
          src="/footer-form-pattern.svg"
          alt=""
          className="absolute bottom-0 right-0 h-[35rem]"
        />

        <div className="flex flex-col items-center z-30 space-y-10">
          <img src="/logo.svg " alt="" className="" />

          <div className="space-y-3">
            <p className="text-[15px]">
              Restaurant St, Delicious City, London 9578, UK
            </p>
            <p>134512348test@gmail.com</p>
            <p>
              Number <span className="text-gold-50">09014994115</span>
            </p>
            <p> Open : 09:00 am - 01:00 pm</p>
          </div>
          <div>
            <p className="text-4xl pb-3"> Get News & Offers</p>
            <p>
              Subscribe us & Get <span className="text-gold-50">25%</span> Off
            </p>
          </div>
          <div className="flex justify-center items-center">
            <textarea
              name=""
              placeholder="Your email"
              id=""
              className="resize-none text-2xl focus:appearance-none appearance-none outline-none h-14 w-60 focus:outline-none bg-white focus:border-gold-50 text-black"
            ></textarea>
            <button class="inline-flex items-center justify-center px-6 w-40 h-14 py-3 rounded-r-md transition duration-300 ease-in-out border border-gold-50 text-gold-50 bg-transparent hover:bg-gold-50 hover:text-black text-base font-bold cursor-pointer">
              View Our Blog
            </button>
          </div>
        </div>
      </div>
      <ul className="flex flex-col space-y-16 text-xl z-20">
        <li
          className="relative p-2 duration-150 after:absolute after:bottom-0 after:right-15 after:border-y-2 after:border-gold-50 after:p-[2px]  
        after:w-0 after:opacity-0 after:duration-300 after:content-[''] hover:after:scale-x-[20] hover:after:opacity-100 hover:after:text-gold-50"
        >
          telegram
        </li>
        <li
          className="relative p-2 duration-150 after:absolute after:bottom-0 after:right-15 after:border-y-2 after:border-gold-50 after:p-[2px]  
        after:w-0 after:opacity-0 after:duration-300 after:content-[''] hover:after:scale-x-[21] hover:after:opacity-100 hover:after:text-gold-50"
        >
          Instagram
        </li>
        <li
          className="relative p-2 duration-150 after:absolute after:bottom-0 after:right-15 after:border-y-2 after:border-gold-50 after:p-[2px]  
        after:w-0 after:opacity-0 after:duration-300 after:content-[''] hover:after:scale-x-[11] hover:after:opacity-100 hover:after:text-gold-50"
        >
          eitaa
        </li>
        <li
          className="relative p-2 duration-150 after:absolute after:bottom-0 after:right-15 after:border-y-2 after:border-gold-50 after:p-[2px]  
        after:w-0 after:opacity-0 after:duration-300 after:content-[''] hover:after:scale-x-[17] hover:after:opacity-100 hover:after:text-gold-50"
        >
          Youtube
        </li>
        <li
          className="relative p-2 duration-150 after:absolute after:bottom-0 after:right-15 after:border-y-2 after:border-gold-50 after:p-[2px]  
        after:w-0 after:opacity-0 after:duration-300 after:content-[''] hover:after:scale-x-[27] hover:after:opacity-100 hover:after:text-gold-50"
        >
          Google Map
        </li>
      </ul>
    </section>
  );
}

export default FooterSection;
