import React, { useEffect, useState } from "react";

export const Card = () => {
  return (
    <>
      <div class="block shadow-xl md:w-[713px] md:h-[330px] bg-white rounded-[10px] ">
        <div className="flex ">
          <div className="w-1/2">
            <img
              src="https://s3-alpha-sig.figma.com/img/7e1d/bb3d/5a42ec6a97cf5053ea7b3beaca6e26c2?Expires=1677456000&Signature=BIQVDLhVhiDkuLVaVOqYb72VTaAJCmRFSRA2YFklK3cFBnmNYLHChsq7vjUYS18VvEFHpVEKHwH9G~P~EKaDKcxCxrK0ZSpDMzRxzSHJca8~VzEjGVropUmy-qsJ1ep~1~iGdoXD1AKLyjbU~cbypcLt5vKfg8wtm0VbhXFeP~B9hc8lEoqbO9KTU9INbqxYLnKIowwfmFbhdr0l6emQK3iHo7mDkP2n7Y0fqREvhnhx1gfyVlZMPMh3EcSF7Sp7WT6Iwm7Mz8NXDAm0SnvjvbxF6PMpH2JXACpigRyWJfogP8YZRIQ7Nk1WmUrEj1sBdIX6LyIOxjR7br8vXdJcFQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              className="h-64 w-[417px] mt-6 "
            />
          </div>
          <div className="mt-6 -ml-8 w-1/2">
            <h1 className="font-podkova text-[22px] font-semibold">
              Beats Studio3 Wireless Headphone
            </h1>
            <div className="flex items-center space-x-[7px] mt-[6px]">
              <span>
                <img
                  src="https://s3-alpha-sig.figma.com/img/7b37/e5bd/e1422a4a32c1ac51603dcfc9de3816d9?Expires=1677456000&Signature=Cs8KQJVAbUttku36EiisImT0pEhJbIHm3HWUm9hN5vWLpo-p9rELxh2FKTx2KLZZaKfGMC7u9NFPnth0nR1739Xd9oKPuoz8mpzKJazIkOCiyhVOLqR-lcDCMHJh8hQryyNnlPZ5TG~jZoMUVOaELKV88JBs7LFiE3X6evozx3rOvcLaPl4NwqI-X~wd5B86x7YpFnQd1PXLtb33rRoPmEC3F2FBDrouGw8jp4-OXf6gWZp5RKettK-i9BbEwzpduJQmOCixoloNlwH7qg9C5fADBNH4YFu6Y9jvYb-5fw3xTGyMhcbIuwKPqaw2KH-DVU0a6In4aBHaN2fAzTCzHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  className="h-5 w-5"
                  alt=""
                />
              </span>
              <span>
                <img
                  src="https://s3-alpha-sig.figma.com/img/7b37/e5bd/e1422a4a32c1ac51603dcfc9de3816d9?Expires=1677456000&Signature=Cs8KQJVAbUttku36EiisImT0pEhJbIHm3HWUm9hN5vWLpo-p9rELxh2FKTx2KLZZaKfGMC7u9NFPnth0nR1739Xd9oKPuoz8mpzKJazIkOCiyhVOLqR-lcDCMHJh8hQryyNnlPZ5TG~jZoMUVOaELKV88JBs7LFiE3X6evozx3rOvcLaPl4NwqI-X~wd5B86x7YpFnQd1PXLtb33rRoPmEC3F2FBDrouGw8jp4-OXf6gWZp5RKettK-i9BbEwzpduJQmOCixoloNlwH7qg9C5fADBNH4YFu6Y9jvYb-5fw3xTGyMhcbIuwKPqaw2KH-DVU0a6In4aBHaN2fAzTCzHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  className="h-5 w-5"
                  alt=""
                />
              </span>
              <span>
                <img
                  src="https://s3-alpha-sig.figma.com/img/7b37/e5bd/e1422a4a32c1ac51603dcfc9de3816d9?Expires=1677456000&Signature=Cs8KQJVAbUttku36EiisImT0pEhJbIHm3HWUm9hN5vWLpo-p9rELxh2FKTx2KLZZaKfGMC7u9NFPnth0nR1739Xd9oKPuoz8mpzKJazIkOCiyhVOLqR-lcDCMHJh8hQryyNnlPZ5TG~jZoMUVOaELKV88JBs7LFiE3X6evozx3rOvcLaPl4NwqI-X~wd5B86x7YpFnQd1PXLtb33rRoPmEC3F2FBDrouGw8jp4-OXf6gWZp5RKettK-i9BbEwzpduJQmOCixoloNlwH7qg9C5fADBNH4YFu6Y9jvYb-5fw3xTGyMhcbIuwKPqaw2KH-DVU0a6In4aBHaN2fAzTCzHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  className="h-5 w-5"
                  alt=""
                />
              </span>
              <span>
                <img
                  src="https://s3-alpha-sig.figma.com/img/7b37/e5bd/e1422a4a32c1ac51603dcfc9de3816d9?Expires=1677456000&Signature=Cs8KQJVAbUttku36EiisImT0pEhJbIHm3HWUm9hN5vWLpo-p9rELxh2FKTx2KLZZaKfGMC7u9NFPnth0nR1739Xd9oKPuoz8mpzKJazIkOCiyhVOLqR-lcDCMHJh8hQryyNnlPZ5TG~jZoMUVOaELKV88JBs7LFiE3X6evozx3rOvcLaPl4NwqI-X~wd5B86x7YpFnQd1PXLtb33rRoPmEC3F2FBDrouGw8jp4-OXf6gWZp5RKettK-i9BbEwzpduJQmOCixoloNlwH7qg9C5fADBNH4YFu6Y9jvYb-5fw3xTGyMhcbIuwKPqaw2KH-DVU0a6In4aBHaN2fAzTCzHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  className="h-5 w-5"
                  alt=""
                />
              </span>
              <span>
                <img
                  src="https://s3-alpha-sig.figma.com/img/7b37/e5bd/e1422a4a32c1ac51603dcfc9de3816d9?Expires=1677456000&Signature=Cs8KQJVAbUttku36EiisImT0pEhJbIHm3HWUm9hN5vWLpo-p9rELxh2FKTx2KLZZaKfGMC7u9NFPnth0nR1739Xd9oKPuoz8mpzKJazIkOCiyhVOLqR-lcDCMHJh8hQryyNnlPZ5TG~jZoMUVOaELKV88JBs7LFiE3X6evozx3rOvcLaPl4NwqI-X~wd5B86x7YpFnQd1PXLtb33rRoPmEC3F2FBDrouGw8jp4-OXf6gWZp5RKettK-i9BbEwzpduJQmOCixoloNlwH7qg9C5fADBNH4YFu6Y9jvYb-5fw3xTGyMhcbIuwKPqaw2KH-DVU0a6In4aBHaN2fAzTCzHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  className="h-5 w-5"
                  alt=""
                />
              </span>
              <span>( 200+ Reviews )</span>
            </div>
            <p className="mt-[14px] mb-2 text-base font-podkova font-normal">
              Ergonomic or cupe with on-oor controls up to 22 hours of tening
              time. Apple Wi crip & Closs{" "}
            </p>
            <p className="text-lg font-podkova font-semibold text-[#07FFD2]">
              Price $ 450.55
            </p>
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
