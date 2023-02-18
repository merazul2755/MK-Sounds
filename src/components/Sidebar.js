import React from "react";
import Nav from "./Nav";
import logo from "../image/logo.png";
import { Card } from "./Card";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="max-w-[1440px] m-auto">
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm  rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 shadow-2xl z-40 w-[271px] h-[1024px] transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto ">
          <button className="text-center m-7 flex items-center">
            <img src={logo} alt="" className="w-10 h-10 mr-4" />
            <span className="text-[28px] font-normal font-podkova">
              MK Sounds
            </span>
          </button>
          <ul className="space-y-4 ">
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-xl font-medium  rounded-lg text-black hover:bg-gray-200 font-podkova ml-10 "
              >
                <img
                  src="https://s3-alpha-sig.figma.com/img/83b1/7194/e6b7e1447f851d33215a954d539150a7?Expires=1677456000&Signature=HeCl0-UmweiMi1OSIjR~s0JONFoFnjG6L94UlS2GfyHyeXiBqgBC3CEob~idRasuoQWazmwKCVVntdno5brOIR5VUAmxgHKnjr7izWVZfhNmIjkmebNv~zaMp8U3yNVWHg2NXBEObB6Zq0R7sZLHe~VaqX5esZhIw75k0wC5KSvNxpcGC-nuL28PU3N8sXyFihpAV1e5RP3HEax2q6Yr56hIMjKkkJpRcFaEB4k5hxPp1xEvsebdlyjw8-CzJyCrIka~-2BWJibvhwa1n4-3G8W5YBlG2PtOtBJgS488PXIC1h2vSKcCmFifEeZsSoGDyRl1tvx17abW5MZ5-j29Cg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                  className="w-[25px] h-[25px]"
                />

                <span className="ml-8">Home</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-xl font-medium  rounded-lg text-black hover:bg-gray-200 font-podkova ml-10"
              >
                <img
                  src="https://s3-alpha-sig.figma.com/img/3db4/c2f5/d46cf14bf5d5d0cd6197791ad1718915?Expires=1677456000&Signature=hMVPkzQMHjC5gjd7~Hers1SuWuILykt8GAlvMRT36HLOCe80JAIIeSiNB-xi41c-URviCREzOiYIYR3p-kpz7WfdEQ-az31IWX~l32R9X6btHw1j2F1Vwq79OtaVBmQ900qQu-g2qyVO6mo-8OUU2b0tIs8N5mnwRWTbPvARn5ymq236GeSSaKxfjLZ8elOD1yD0AnRDWDYSe0vwe~MM~LPRxpX86R66r8HZHFAhcfjcF2AucF0r4zJP~7eBjYCq-c~XAVDJ~fKmnMmiPz8mZtvSltI2KVzQwTkRlU~PrdboP599fon57cN49y4FCaJmHAnefCWb-sQEweUs2TRd7g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                  className="w-[25px] h-[25px]"
                />

                <span className="ml-8">Explore</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-xl font-medium  rounded-lg text-black hover:bg-gray-200 font-podkova ml-10"
              >
                <img
                  src="https://s3-alpha-sig.figma.com/img/e985/1a28/9a5c539391a991b16e151c4a5f1584cd?Expires=1677456000&Signature=W8c0o6IGHqSF9aVQvl-r6G-C39~NBZNi8T24TfRBsjFBYwA-aTJlyaLI1wdI-vOBqqDJZPfLqOQmmLleEXNNE2nTjDNTbCYbZ3pQdR8Vsj71nk3nqrWe7WNK5HnEGlk1PsOqkzF3v02SSih6SSpufZSKlzbuhmaZV5gTA2qAhjlwi-RjWIi4SIBbnRQ1DCas4E4cMKWx6QI9WGWsvqIjMAmISWzviKVhKY6Q3UylzluGQXk2sjM-wAB68mpMPOCmmmIKsLIrXtCvc1Ci5zgyvD15xHal6GI65poPtx3xCHGQZ2yZXe~-BkSjSd7b42lPqtOgf3wLZf~s4uMbuhY9RQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                  className="w-[25px] h-[25px]"
                />

                <span className="ml-8">Saved</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-xl font-medium  rounded-lg text-black hover:bg-gray-200 font-podkova ml-10"
              >
                <img
                  src="https://s3-alpha-sig.figma.com/img/d4c5/1c30/14733d70f9d790b046277d59acdeaece?Expires=1677456000&Signature=qgCi6ePB72mXTXTbBdrhG~jlZSHP8i4s8zVdLWzcIdUD0XYKPPQoXvNq3M1gWge~DF2NxfHdw2FTxWwdKoDzmikc0vakvjcEluKfaMCPqzFZJp8-i3SoKpAoTgDvKGmsf20zNTyL-6A-Jz6n8lRQcnVM4jgmxdKm1IQOZr1ekaROU8PEkbIRIEp-fWOOp2FrvY3lV6tjQt9g1DgmM1x1pGgTLK6wtjcF7NzGtw7ir6VKQAXU3PVG~eN74rvvpu-nMOGoPLzgmkHkjJp~Xa5~DUk0Ydc50c5vi6ADxudAJ47JYs52rTdaYkSeubIfW3J7FTemZcjzer61O11koVeSlw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                  className="w-[25px] h-[25px]"
                />
                <span className="ml-8">Cart</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-xl font-medium  rounded-lg text-black hover:bg-gray-200 font-podkova ml-10"
              >
                <img
                  src="https://s3-alpha-sig.figma.com/img/b159/a93c/e64f517a5de0f4dc7a795f601933211b?Expires=1677456000&Signature=CmYrHzz2xMAWJs1HlfJvFMRVC~bf63WRsN~q37rXa-EwkDdwv0yAce6xqrcNhlkuumCCm~w605ZZAYNHdzmbqejPN7tHWi3DW6CaZ0OQ-Bgwi23ea7ujCOpeQU-6kHeuFivYUzQVkxLdfQtKtRuOcMq7-y76TmSBZuIDWYn3W-yGNOZzxNTG-BEjwhDKRFZubCDoBDnXNKKNE5ENDcK2XFdBePgaulwHw3l2NSqUL8hRySr7Lg4rvxT~r4Vcg1pEf-8hrThV0TyEpl5VHqCCWAezc6-CiPb3aW0LFd8WHRRuWTf~W2F73Fg60EIm3SF3QSSvsCTv2w41oFZyPVov5Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                  className="w-[25px] h-[25px]"
                />

                <span className="ml-8">Selling</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-xl font-medium  rounded-lg text-black hover:bg-gray-200 font-podkova ml-10"
              >
                <img
                  src="https://s3-alpha-sig.figma.com/img/74ae/0c27/c84c2391a7f7f10fa71eb39b6c176379?Expires=1677456000&Signature=c5z4-qyuGpTEf0b6ZlIPjV0X4npoNAvYkmKCVSrvkHnAzHYfP7ziE7Fj-j0yQGxHOwzlXesw8Nnk3Vm0pADhEHkG8CchXcdaTxWAftPqpN3WUllW-SBWN50pNomnuruOi3sI9ov7Ad2k3pTHzb9z-myc4S4asGc7y4z8ewFGzgffI82nlLq6g7RwOVV9y2MOqk5Wa6hxfJvYTHiRaR-wr3U2hsS-EWem8tB5-yS0~OEUD2SyFg-HH34zD7-OtiAQClE533dcWAoogdJdT5w8mV9YG4lfxR1CxpUTejcUhqhtK-VqbuFMhJ5Fr~dZ4wH1J4PmxZo35-PfJz3ybs8i4Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                  className="w-[25px] h-[25px]"
                />

                <span className="ml-8">Profile</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-xl font-medium  rounded-lg text-black hover:bg-gray-200 font-podkova ml-10"
              >
                <img
                  src="https://s3-alpha-sig.figma.com/img/f81f/0888/ddb80634a2135586939700bb4962d046?Expires=1677456000&Signature=QZniF5twrObERCKv7keNn-s7j2g3ERUXez3aZC41AkbQEmoZUfjLfvvpc7To-RgiZDEUSX14zbIob4Rmv4EhGJAwGD9TXb2KLfFrXo0HCgGlBaF3xvoSSBD~gyz8uUFulBPSnOH273mrZJB7PVf7bspfo~X3uB-gkVg1MQft5EWJnFhZJ0p9kh~6~K0H5IZf8XUr4A~9lbV2ptyvQwnug34HJuIPjfuuwvftICGpyd0pVyBu7suj6GxW9~vv1kkMTMYpX4btCoD5~2BjJveF2XvFFaNN5BnrYMAjB1WLDhxIq8HZtJmha1KiYnhq7daK9FAgcfgoL2IToGRF4-cHyQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                  className="w-[25px] h-[25px]"
                />

                <span className="ml-8">History</span>
              </a>
            </li>
            <li>
              <Link
                to="/contactus"
                className="flex items-center p-2 text-xl font-medium  rounded-lg text-black hover:bg-gray-200 font-podkova ml-10"
              >
                <img
                  src="https://s3-alpha-sig.figma.com/img/e67a/e78f/49b1e7408d1df4fb1db3cc573a74f684?Expires=1677456000&Signature=omSzhQu~Q4bketkdoWUwrkkOQi6XLTSyNhAJsMwMBSARVjn7qU3AridbbHQswnAgX2fAackT07NJfaSfSUO4pY33rRfJBEXWTzJdct7e6fXfDAhTgTBMMfVSqLHypzbYEinWWwLp7K7LiopARo~ct8FOr1TII4NDDJtW1K7dNtLG0o6KS3JTXluxkkhOxGtLpS0huZU5ftoRb7f7ZcGYKD7GrD1CZ8UYfOSHqWuHBoJlCmjh8mSbeyqjo6rU6QZgyqucTOsbtLJf0JGpSIYEqTbg3IDJXUhJ542l7RZPhB3go4tj-fXDqYytDOzQRLZCtUL9m7iozH9V01vo1vymQQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                  className="w-[25px] h-[25px]"
                />

                <span className="ml-8">Contact Us</span>
              </Link>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-xl font-medium  rounded-lg text-black hover:bg-gray-200 font-podkova ml-10"
              >
                <img
                  src="https://s3-alpha-sig.figma.com/img/ba4b/f102/a056b1035f3bfdd8036db131869e1138?Expires=1677456000&Signature=CqT3n1O0kFCe6KG41AHfqf34FYraSldSts49udEUGfwjFIyQDYcOJ65WIwjo9ktL-SCvAokc1UhgtNm~izKwpRMUQwgHfUGuhY5k8skkAwOi3~EWVxX66LJ4WjRgPz4PJlFwdlkKO7gmDNqoD4JCNuNfjyYxOHmlBvU-IbBo7D6KLSmvrAxbcR2JpULYLb2N0zflU0VZi~ygilVjpxxieicqJHmIfKa1RSY9UjfxtyLjY~7J3gVQJTuu-RazuCTL1aixZA9IoR~RIIASZvn~IW2r8mLGFcAwuhGie0QPdmYaZspv8BU9C0jSeBwmIsTZqUfpGk~l011ZCs49~KEKsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                  className="w-[25px] h-[25px]"
                />

                <span className="ml-8">Setting</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-4 rounded-lg ">
          <Nav></Nav>
        </div>
        <div className="mt-7 mx-10">
          <Card></Card>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
