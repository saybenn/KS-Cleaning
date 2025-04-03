import Image from "next/image";
import React from "react";

const Sigue = () => {
  return (
    <section className="relative text-center w-full mx-auto text-3xl text-gray-500 py-32 leading-10 my-28 bg-blue-100  ">
      <div className="absolute right-[-0px] top-[-50px] w-10/12 h-35 z-10  lg:h-45 lg:top-[-100px]">
        <Image
          src="/images/disappointed-cleaning.png"
          alt="Woman in need of cleaning"
          layout="fill"
          objectFit="cover"
          className="clip-angled z-20"
        />
        <div className="absolute bg-blue-400/15 z-20   h-full w-full clip-angled"></div>
      </div>
      <h2 className="relative z-30 text-gray-600 w-10/12 mx-auto lg:leading-16 italic">
        Dirty spaces don&rsquo;t just clutter our home—they clutter our mind.
        Let a professional restore the clean, fresh feeling you deserve!
      </h2>
      <div className="absolute  bottom-[-50px] w-3/4 h-35 lg:h-45 lg:bottom-[-100px]">
        <Image
          src="/images/happy-cleaning.png"
          alt="Woman cleaning"
          layout="fill"
          objectFit="cover"
          className="clip-angled2"
        />
        <div className="absolute bg-blue-400/15 z-20 top-0 left-0 h-full w-full clip-angled2"></div>
      </div>
    </section>
  );
};

export default Sigue;
