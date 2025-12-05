import React from "react";
function Story() {
  return (
    <section className="h-screen flex justify-around pt-8 bg-zinc-900 text-white text-center relative ">
      <img
        src="/shape-3.png
        "
        alt=""
        className="absolute top-64 left-0"
      />

      <img
        src="/img-pattern.svg"
        alt=""
        class="absolute  w-28 h-96 z-10  right-[585px] bottom-4 "
      />
      <img
        src="/about-abs-image.jpg"
        class=" duration-300  left-1/2 bottom-20 z-20 absolute w-[250px] h-[250px]"
        alt="logo"
      />
      <img src="/badge-2.png" alt="" className="absolute -top-8 right-18" />
      <img
        src="/badge-2-bg.png"
        alt="logo"
        className="absolute -top-8 right-18 animate-rotate"
      />
      <div className=" flex flex-col justify-center items-center gap-4 animate-left1 pl-32 ">
        <p className="text-xl text-gold-50 uppercase">Our Story</p>
        <img src="/separator.svg" alt="logo" className="h-7 w-32 -mt-3 mb-5" />
        <h3 className="text-6xl">
          Every Fla vor <br />
          Tells a Story
        </h3>
        <p className="text-xl">
          Lorem Ipsum is simply dummy text <br /> of the printingand typesetting{" "}
          <br />
          industry lorem Ipsum has been the <br /> industrys standard dummy text
          ever <br />
          since the when an unknown printer <br /> took a galley of type and
          scrambled <br />
          it to make a type specimen book It <br /> has survived not only five
          centuries, but <br /> also the leap into.
        </p>
        <p className="text-xl font-bold mt-4">Book Through Call</p>
        <p className="text-3xl mb-4 -mt-3 text-gold-50">09014994115</p>
        <button class="inline-flex items-center justify-center px-6 py-3 rounded-md transition duration-300 ease-in-out border border-gold-50 text-gold-50 bg-transparent hover:bg-gold-50 hover:text-black text-base font-bold cursor-pointer">
          READ MORE
        </button>
      </div>
      <div>
        <img src="/about-banner.jpg" alt="" />
      </div>
    </section>
  );
}

export default Story;
