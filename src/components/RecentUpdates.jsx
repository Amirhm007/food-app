import React from "react";
function RecentUpdates() {
  return (
    <section className="h-[120vh] py-10 bg-silver-350 flex flex-col space-y-6 items-center ">
      <div className="flex flex-col items-center  mt-6  mb-24">
        <p className="text-xl text-gold-50 uppercase">Recent Updates</p>
        <img src="/separator.svg" alt="logo" className="h-7 w-32 mt-2 mb-2" />
        <h4 className="uppercase text-6xl text-white">Upcoming Event</h4>
      </div>
      <div className="flex justify-center items-center z-10 space-x-20 mb-16">
        <div className="relative  h-[430px] w-[335px] group overflow-hidden">
          <img
            src="/event-1.jpg"
            alt=""
            className="object-cover absolute h-[430px] w-[335px] group-hover:scale-110 duration-300"
          />
          <h5 className="text-gold-50 bg-black p-2 absolute top-0 left-0 rounded-md">
            08/09/2022
          </h5>

          <p className="absolute bottom-0 right-5 text-center z-20 text-white">
            <span className="text-gold-50 text-[20px]">Food, Flavour</span>{" "}
            <br />
            Flavour so good you’ll try to eat with your <br /> eyes.
          </p>
        </div>
        <div className="relative h-[430px] w-[335px] group overflow-hidden">
          <img
            src="/event-2.jpg"
            alt=""
            className="object-cover absolute h-[430px] w-[335px] group-hover:scale-110 duration-300"
          />
          <h5 className="text-gold-50 bg-black p-2 absolute top-0 left-0 rounded-md">
            08/09/2022
          </h5>
          <p className="absolute bottom-0 right-5 text-center z-20 text-white">
            <span className="text-gold-50 text-[20px]">Healthy Food</span>{" "}
            <br />
            Flavour so good you’ll try to eat with your <br /> eyes.
          </p>
        </div>
        <div className="relative h-[430px] w-[335px] group overflow-hidden">
          <img
            src="/event-3.jpg"
            alt=""
            className="object-cover absolute h-[430px] w-[335px] group-hover:scale-110 duration-300"
          />
          <h5 className="text-gold-50 bg-black p-2 absolute top-0 left-0 rounded-md">
            08/09/2022
          </h5>
          <p className="absolute bottom-0 right-5 text-center z-20 text-white">
            <span className="text-gold-50 text-[20px]">Recipie</span> <br />
            Flavour so good you’ll try to eat with your <br /> eyes.
          </p>
        </div>
      </div>
      <button class="inline-flex items-center justify-center px-6 py-3 rounded-md transition duration-300 ease-in-out border border-gold-50 text-gold-50 bg-transparent hover:bg-gold-50 hover:text-black text-base font-bold cursor-pointer">
        View Our Blog
      </button>
    </section>
  );
}

export default RecentUpdates;
