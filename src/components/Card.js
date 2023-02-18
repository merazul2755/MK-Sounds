import React, { useEffect, useState } from "react";

export const Card = () => {
  return (
    <>
      <div class="block shadow-xl md:w-[713px] md:h-[330px] bg-white rounded-[10px] ">
        <div className="flex ">
          <div>
            <img
              src="https://s3-alpha-sig.figma.com/img/7e1d/bb3d/5a42ec6a97cf5053ea7b3beaca6e26c2?Expires=1677456000&Signature=BIQVDLhVhiDkuLVaVOqYb72VTaAJCmRFSRA2YFklK3cFBnmNYLHChsq7vjUYS18VvEFHpVEKHwH9G~P~EKaDKcxCxrK0ZSpDMzRxzSHJca8~VzEjGVropUmy-qsJ1ep~1~iGdoXD1AKLyjbU~cbypcLt5vKfg8wtm0VbhXFeP~B9hc8lEoqbO9KTU9INbqxYLnKIowwfmFbhdr0l6emQK3iHo7mDkP2n7Y0fqREvhnhx1gfyVlZMPMh3EcSF7Sp7WT6Iwm7Mz8NXDAm0SnvjvbxF6PMpH2JXACpigRyWJfogP8YZRIQ7Nk1WmUrEj1sBdIX6LyIOxjR7br8vXdJcFQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="h-64 w-[417px] mt-6 -ml-8"
            />
          </div>
          <div className="mt-6 -ml-8">
            <h1 className="font-podkova text-[22px] font-semibold">
              Beats Studio3 Wireless Headphone
            </h1>
          </div>
        </div>
      </div>

      <div className="flex justify-between flex-wrap">
        <div>Carousel</div>
        <div>
          <div className="flex flex-wrap justify-between items-center w-[334px]">
            <h1 className="font-podkova text-[26px] font-medium text-black">
              Daily Deals
            </h1>
            <p className="font-podkova text-[19px] font-normal text-black">
              View All
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
