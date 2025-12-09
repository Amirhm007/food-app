import React from "react";
function Section2Tike() {
  return (
    <section className="bg-silver-100  relative z-0">
      <img
        src="/testimonial-bg.jpg"
        alt=""
        className="absolute top-0 left-0 z-10"
      />
      <div className="text-white flex flex-col h-auto items-center py-10  space-y-7  z-20">
        <img
          src="/shape-8.png"
          alt=""
          className="absolute left-0 bottom-52 z-50"
        />
        <img
          src="/shape-7.png"
          alt=""
          className="absolute right-0 bottom-[500px] z-50"
        />
        <h3 className="text-5xl text-center z-20">
          <span>”</span> <br />
          I wanted to thank you for inviting me <br />
          down for that amazing dinner the <br />
          other night. The food was <br />
          extraordinary.
        </h3>
        <div className=" flex space-x-0.5 z-20">
          <div className="h-2 w-2 animate-rotate border-2 border-gold-50"></div>
          <div className="h-2 w-2 animate-rotate border-2 border-gold-50"></div>
          <div className="h-2 w-2 animate-rotate border-2 border-gold-50"></div>
        </div>
        <img src="/testi-avatar.jpg" alt="" className="rounded-full z-20" />
        <div className="flex justify-around z-20">
          <div className="bg-silver-250 py-24 px-14 flex flex-col items-center space-y-6 w-[70%]">
            <h3 className="text-6xl">Online Reservation</h3>
            <p className="mt-3">
              Booking request <span className="text-gold-50">09014994115 </span>
              or fill out the order form
            </p>
            <div className="flex items-center justify-around space-x-3">
              <input
                type="text"
                className="appearance-none border border-solid border-silver-200 bg-silver-150 p-3 outline-none duration-300 placeholder:text-white focus:border-gold-50 focus:outline-none w-80"
                placeholder="Your Name"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="appearance-none border border-solid border-silver-200 bg-silver-150 p-3 outline-none duration-300 placeholder:text-white focus:border-gold-50 focus:outline-none w-80"
              />
            </div>
            <div className="space-x-[15px] space-y-3">
              <select
                name=""
                className="appearance-none border border-solid border-silver-200 bg-silver-150 p-3 outline-none duration-300 placeholder:text-white focus:border-gold-50 focus:outline-none w-52"
                id=""
              >
                <option value="">1 Person</option>
                <option value="">2 Person</option>
                <option value="">3 Person</option>
                <option value="">4 Person</option>
                <option value="">5 Person</option>
                <option value="">6 Person</option>
                <option value="">7 Person</option>
              </select>
              <input
                type="date"
                className="mr-4 appearance-none border border-solid border-silver-200 bg-silver-150 p-3 outline-none duration-300 placeholder:text-white focus:border-gold-50 focus:outline-none w-52"
                name=""
                id=""
              />

              <select
                name=""
                id=""
                className="relative appearance-none border border-solid border-silver-200 bg-silver-150 p-3 outline-none duration-300 placeholder:text-white focus:border-gold-50 focus:outline-none w-52"
              >
                <option value="">08:00 am</option>
                <option value="">09:00 am</option>
                <option value="">10:00 am</option>
                <option value="">11:00 am</option>
                <option value="">12:00 am</option>
                <option value="">01:00 pm</option>
                <option value="">02:00 pm</option>
                <option value="">03:00 pm</option>
                <option value="">04:00 pm</option>
                <option value="">05:00 pm</option>
                <option value="">06:00 pm</option>
                <option value="">07:00 pm</option>
                <option value="">08:00 pm</option>
                <option value="">09:00 pm</option>
                <option value="">10:00 pm</option>
              </select>
            </div>

            <textarea
              type="text"
              placeholder={"Message"}
              className="border resize-none h-36  focus:border-gold-50 focus:appearance-none outline-none appearance-none border-silver-200 bg-silver-150 p-3 w-[652px]"
            ></textarea>
            <button className="w-full inline-flex items-center justify-center px-6 py-3 rounded-md transition duration-300 ease-in-out border border-gold-50 text-gold-50 bg-transparent hover:bg-gold-50 hover:text-black text-base font-bold cursor-pointer">
              BOOK A TABLE
            </button>
          </div>

          <div className="text-center pt-24 pb-24 px-28 text-[#a6a6a6] bg-silver-100 relative">
            <img
              src="/footer-form-bg.png"
              alt="تصویر پس‌زمینه فوتر"
              className="absolute h-full w-full top-0 left-0  object-cover z-30"
            />

            <div className="relative oklch(43.9% 0 0)  flex flex-col justify-between items-center text-xl z-40">
              <h3 className="text-5xl text-white">
                CONTACT <br />
                US
              </h3>
              <h4 className="mt-8 text-white">Booking request</h4>
              <p className="mt-2 text-gold-50">09014994115</p>
              <div className="h-2 mt-6 w-2 rotate-45 border-2 border-gold-50"></div>

              <h4 className="mt-5 text-white">Location</h4>
              <p>
                Restaurant St, Delicious City,
                <br />
                London 9578, UK
              </p>
              <h4 className="mt-5 text-white">Lunch Time</h4>
              <p>
                Monday to Sunday <br />
                11.00 am - 2.30pm
              </p>
              <h4 className="mt-5 text-white">Dinner Time</h4>
              <p>
                Monday to Sunday <br />
                05.00 pm - 10.00pm
              </p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-between z-20">
          <div className="flex flex-col items-center  mt-6  animate-top1">
            <p className="text-xl text-gold-50 uppercase">Special Selection</p>
            <img
              src="/separator.svg"
              alt="logo"
              className="h-7 w-32 mt-2 mb-2"
            />
          </div>
          <h2 className="text-6xl mb-20">Our Strength</h2>

          <div className="flex items-center justify-around space-x-10 relative">
            <div className="flex flex-col w-[297px] h-80 justify-between items-center group space-y-5 p-10 py-14 text-center bg-silver-300">
              <img
                src="/features-icon-1.png"
                alt=""
                className="w-[100px] h-20 group-hover:-scale-100 group-hover:rotate-180  duration-500 "
              />
              <h4 className="text-2xl">Hygienic Food</h4>
              <p>
                Lorem Ipsum is simply dummy <br />
                printing and typesetting.
              </p>
            </div>

            <div className="flex w-[297px] h-80 flex-col group justify-between items-center space-y-5  p-10 text-center py-14 bg-silver-350">
              <img
                src="/features-icon-2.png"
                alt=""
                className="w-[100px] h-20 group-hover:-scale-100 group-hover:rotate-180  duration-500"
              />

              <h4 className="text-2xl">Fresh Environment</h4>
              <p>
                Lorem Ipsum is simply dummy <br />
                printing and typesetting.
              </p>
            </div>

            <div className=" w-[297px] h-80 flex py-14 group flex-col justify-between items-center space-y-5 p-10 text-center bg-silver-300">
              <img
                src="/features-icon-3.png"
                alt=""
                className="w-[100px] h-20 group-hover:-scale-100 group-hover:rotate-180  duration-500"
              />
              <h4 className="text-2xl">Skilled Chefs</h4>
              <p>
                Lorem Ipsum is simply dummy <br />
                printing and typesetting.
              </p>
            </div>

            <div className="flex w-[297px] h-80  group py-14 flex-col justify-between items-center space-y-5 p-10 text-center bg-silver-350">
              <img
                src="/features-icon-4.png"
                alt=""
                className="w-[100px] h-20 group-hover:-scale-100 group-hover:rotate-180  duration-500"
              />
              <h4 className="text-2xl">Event & Party</h4>
              <p>
                Lorem Ipsum is simply dummy <br />
                printing and typesetting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2Tike;
