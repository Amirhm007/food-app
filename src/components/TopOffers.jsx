import React from "react";
function TopOffers() {
  return (
    <section className="pb-10 grid grid-cols-3 overflow-hidden relative grid-rows-2  items-center place-items-center h-[125vh] bg-silver-350">
      <img
        src="/shape-1.png"
        alt=""
        className="absolute bottom-0 left-0 animate-Floating1"
      />
      <img
        src="/shape-2.png"
        alt=""
        className="absolute top-0 right-0 animate-Floating1"
      />

      <div className="flex flex-col items-center gap-5 animate-top1 text-center col-start-2">
        <p className="text-3xl text-gold-50 uppercase">Tradational & Hygine</p>
        <img src="/separator.svg" alt="logo" className="h-7 w-32 mt-2 mb-2" />
        <h2 className="text-white text-5xl">We Offer Top Notch</h2>
        <p className="text-xl text-white">
          Lorem Ipsum is simply dummy text of the printing and <br />
          typesetting industry lorem Ipsum has been the industrys <br />
          standard dummy text ever.
        </p>
      </div>
      <div class="group relative z-10 col-start-1 row-start-1 row-end-3 m-10 text-center">
        <img
          src="/img-pattern.svg"
          alt=""
          class="absolute -top-8 left-[70px] -z-10 w-2/4 duration-300 group-hover:-scale-50"
        />
        <img
          src="/service-1.jpg"
          class="h-full w-full duration-300 group-hover:scale-105"
          alt=""
        />
        <h4 class="mt-10 text-2xl uppercase text-white">breakfast</h4>
        <a
          href=""
          class="relative py-3 text-gold-50 duration-150 after:absolute after:bottom-0 after:right-9 after:w-0 after:border-y-2 after:border-gold-50 after:p-[2px] after:opacity-0 after:duration-300 after:content-[''] hover:text-white hover:after:scale-x-[19] hover:after:opacity-100"
        >
          view menu
        </a>
      </div>

      <div class="group  z-10  row-end-3 m-10 text-center col-start-3 row-start-1 row-span-2 relative">
        <img
          src="/img-pattern.svg"
          alt=""
          class="absolute -top-8 left-[70px] -z-10 w-2/4 duration-300 group-hover:-scale-50"
        />
        <img
          src="/service-2.jpg"
          class="h-full w-full duration-300 group-hover:scale-105"
          alt=""
        />
        <h4 class="mt-10 text-2xl uppercase text-white">appetizers</h4>
        <a
          href=""
          class="relative py-3 text-gold-50 duration-150 after:absolute after:bottom-0 after:right-9 after:w-0 after:border-y-2 after:border-gold-50 after:p-[2px] after:opacity-0 after:duration-300 after:content-[''] hover:text-white hover:after:scale-x-[19] hover:after:opacity-100"
        >
          view menu
        </a>
      </div>

      <div class="group  z-10  row-end-3 m-10 text-center row-span-2  col-start-2 row-start-2  relative">
        <img
          src="/img-pattern.svg"
          alt=""
          class="absolute -top-8 left-[70px] -z-10 w-2/4 duration-300 group-hover:-scale-50"
        />
        <img
          src="/service-3.jpg"
          class="h-full w-full duration-300 group-hover:scale-105"
          alt=""
        />
        <h4 class="mt-10 text-2xl uppercase text-white">drink</h4>
        <a
          href=""
          class="relative py-3 text-gold-50 duration-150 after:absolute after:bottom-0 after:right-9 after:w-0 after:border-y-2 after:border-gold-50 after:p-[2px] after:opacity-0 after:duration-300 after:content-[''] hover:text-white hover:after:scale-x-[19] hover:after:opacity-100"
        >
          view menu
        </a>
      </div>
    </section>
  );
}

export default TopOffers;
