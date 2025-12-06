import React from "react";
function FeaturedOffers() {
  return (
    <section
      className="
   bg-silver-250 h-screen  flex justify-between relative"
    >
      <img src="/shape-9.png" alt="" className="absolute right-0 -bottom-44"/>
      <img
        src="/badge-1.png"
        alt=""
        className="absolute top-[270px] right-[680px] animate-Floating2"
      />
      <img
        src="/special-dish-banner.jpg"
        alt=""
        className="h-full w-auto  object-cover"
      />

      <div className="pr-72 flex flex-col justify-start items-start self-center text-center space-y-12 text-white">
        <div className="flex flex-col items-center  mt-6">
          <p className="text-xl text-gold-50 uppercase">Tradational & Hygine</p>
          <img src="/separator.svg" alt="logo" className="h-7 w-32 mt-2 mb-2" />
        </div>
        <h2 className="text-6xl">
          lobster
          <br />
          totelini
        </h2>
        <p className="text-[15px]">
          Lorem Ipsum is simply dummy text of the printingand <br />
          typesetting industry lorem Ipsum has been the industrys <br />
          standard dummy text ever since the when an unknown <br />
          printer took a galley of type.
        </p>
        <div className="flex justify-center self-start gap-5 ">
          <p className="text-gray-600 line-through text-2xl">$40.00</p>
          <p className="text-gold-50 text-2xl">$20.00</p>
        </div>
        <button class="inline-flex items-center justify-center px-6 py-3 rounded-md transition duration-300 ease-in-out border border-gold-50 text-gold-50   hover:bg-gold-50 hover:text-black text-base font-bold uppercase cursor-pointer">
          View Menu
        </button>
      </div>
    </section>
  );
}

export default FeaturedOffers;
