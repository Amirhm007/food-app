import React from "react";
function Menu() {
  return (
    <section className=" bg-zinc-900 text-white ">
      <div className="h-[115vh] overflow-hidden w-full flex flex-col items-center relative py-10 space-y-7">
        <img
          src="/shape-5.png"
          alt=""
          className="absolute  top-0 left-0 animate-Floating1"
        />
        <img
          src="/shape-6.png"
          alt=""
          className="absolute  bottom-0 right-0 animate-Floating1"
        />
        <div className="flex flex-col items-center  mt-6  animate-top1">
          <p className="text-xl text-gold-50 uppercase">Special Selection</p>
          <img src="/separator.svg" alt="logo" className="h-7 w-32 mt-2 mb-2" />
        </div>
        <p className="text-6xl z-20">Delicious Menu</p>

        <div className=" flex z-20">
          <div className="border-r-2 border-silver-50 pr-6 mr-16 flex flex-col items-start justify-start space-y-12">
            <div className="flex justify-between space-x-5 items-center w-full">
              <div className="">
                <img src="/menu-1.png" alt="" />
              </div>
              <div className="flex flex-col justify-between flex-1">
                <div className="flex items-center justify-between space-x-5">
                  <p className="text-[18px] uppercase">greek salad</p>
                  <p className="bg-gold-50 px-4 text-[15px] py-0.5 text-gray-700">
                    Seasonal
                  </p>
                  <div className="flex-1 border-b border-t border-gray-700 w-17 mx-2 h-2"></div>
                  <p className="font-bold text-gold-50 text-[14px]">$25.50</p>
                </div>
                <div className="text-silver-50 text-[12px]">
                  Tomatoes, green bell pepper, sliced cucumber onion, <br />
                  olives, and feta cheese.
                </div>
              </div>
            </div>

            <div className="flex justify-between space-x-5 items-center w-full">
              <div className="">
                <img src="/menu-2.png" alt="" />
              </div>
              <div className="flex flex-col justify-between flex-1">
                <div className="flex items-center justify-between space-x-5">
                  <p className="text-[18px] uppercase">lasagne</p>

                  <div className="flex-1 border-b border-t border-gray-700 w-52 mx-2 h-2"></div>
                  <p className="font-bold text-gold-50 text-[14px]">$25.50</p>
                </div>
                <div className="text-silver-50 text-[12px]">
                  Vegetables, cheeses, ground meats, tomato sauce, <br />
                  seasonings and spices
                </div>
              </div>
            </div>

            <div className="flex justify-between space-x-5 items-center w-full">
              <div className="">
                <img src="/menu-3.png" alt="" />
              </div>
              <div className="flex flex-col justify-between flex-1">
                <div className="flex items-center justify-between space-x-5">
                  <p className="text-[18px] uppercase">butternut pumpkin</p>

                  <div className="flex-1 border-b border-t border-gray-700 w-23 mx-2 h-2"></div>
                  <p className="font-bold text-gold-50 text-[14px]">$25.50</p>
                </div>
                <div className="text-silver-50 text-[12px]">
                  Typesetting industry lorem Lorem Ipsum is simply <br />
                  dummy text of the priand.
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-12">
            <div className="flex justify-between space-x-5 items-center w-full">
              <div className="">
                <img src="/menu-4.png" alt="" />
              </div>
              <div className="flex flex-col justify-between flex-1">
                <div className="flex items-center justify-between space-x-5">
                  <p className="text-[18px] uppercase">tokusen wagyu</p>

                  <div className="flex-1 border-b border-t border-gray-700 w-36 mx-2 h-2"></div>
                  <p className="font-bold text-gold-50 text-[14px]">$25.50</p>
                </div>
                <div className="text-silver-50 text-[12px]">
                  Vegetables, cheeses, ground meats, tomato sauce, <br />
                  seasonings and spices.
                </div>
              </div>
            </div>

            <div className="flex justify-between space-x-5 items-center w-full">
              <div className="">
                <img src="/menu-5.png" alt="" />
              </div>
              <div className="flex flex-col justify-between flex-1">
                <div className="flex items-center justify-between space-x-5">
                  <p className="text-[18px] uppercase">olivas rellenas</p>
                  <p className="bg-gold-50 px-4 text-[15px] py-0.5 text-gray-700">
                    NEW
                  </p>
                  <div className="flex-1 border-b border-t border-gray-700 w-16 mx-2 h-2"></div>
                  <p className="font-bold text-gold-50 text-[14px]">$25.50</p>
                </div>
                <div className="text-silver-50 text-[12px]">
                  Avocados with crab meat, red onion, crab salad <br />
                  stuffed red bell pepper and green bell pepper.
                </div>
              </div>
            </div>

            <div className="flex justify-between space-x-5 items-center w-full">
              <div className="">
                <img src="/menu-6.png" alt="" />
              </div>
              <div className="flex flex-col justify-between flex-1">
                <div className="flex items-center justify-between space-x-5">
                  <p className="text-[18px]">opu fish</p>

                  <div className="flex-1 border-b border-t border-gray-700 w-52 mx-2 h-2"></div>
                  <p className="font-bold text-gold-50 text-[14px]">$25.50</p>
                </div>
                <div className="text-silver-50 text-[12px]">
                  Vegetables, cheeses, ground meats, tomato sauce, <br />
                  seasonings and spices
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>
          During winter daily from <span className="text-gold-50">7:00</span> pm
          to <span className="text-gold-50">9:00 pm</span>{" "}
        </p>
        <button class="inline-flex uppercase items-center justify-center px-6 py-3 rounded-md transition duration-300 ease-in-out border border-gold-50 text-gold-50 bg-transparent hover:bg-gold-50 hover:text-black text-base font-bold cursor-pointer">
          View Menu
        </button>
      </div>
    </section>
  );
}

export default Menu;
