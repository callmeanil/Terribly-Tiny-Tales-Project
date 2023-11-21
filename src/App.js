import React from "react";
function Index() {
  return (
    <>
      <div>
        <nav className="h-12 bg-black flex items-center px-2  justify-between">
          <div className=" flex items-center">
            <img
              className="border-r-2 border-yellow-300 pr-1"
              src="https://www.terriblytinytales.com/img/home/ttt.svg"
              alt=""
            />
            <p className="ml-2 text-white">Stories</p>
          </div>
          <div>
            <button className="bg-yellow-300 p-1 rounded-sm m-1 ">
              Courses
            </button>
          </div>
        </nav>
      </div>
      <div className="flex items-center justify-center w-full">
        {/* Card code block start */}
        <div className="bg-white dark:bg-gray-800 shadow rounded">
          <div className="relative">
            <img
              className="h-56 shadow rounded-t w-full object-cover object-center"
              src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_29.png"
              alt="X"
            />
            <div className="inset-0 m-auto ml-2 w-24 h-24 absolute bottom-0 -mb-12 xl:ml-10 rounded shadow ">
              <img
                className="w-full h-full overflow-hidden object-cover rounded-full"
                src="https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg"
                alt="X"
              />
            </div>
          </div>
          <div className="px-5 xl:px-10 pb-10">
            <div className="flex justify-center xl:justify-end w-full pt-16 xl:pt-5"></div>
            <div className="pt-3 xl:pt-5 flex flex-col xl:flex-row items-start xl:items-center justify-between">
              <div className="xl:pr-16 w-full xl:w-2/3">
                <div className="text-center xl:text-left mb-3 xl:mb-0 flex flex-col xl:flex-row items-center justify-between xl:justify-start">
                  <h2 className="mb-3 xl:mb-0 xl:mr-4 text-xl text-gray-800 dark:text-gray-100 font-medium tracking-normal -mt-16">
                    Marshall Mathers
                  </h2>
                </div>
                <div className="w-full -mt-10 xl:w-2/3 flex-col md:flex-row justify-center xl:justify-end flex md:pl-6">
                  <div className="flex items-center justify-center xl:justify-start mt-1 md:mt-0 mb-5 md:mb-0">
                    <div className="rounded-lg border-2 border-gray-600 text-gray-600 dark:text-gray-400 text-sm px-2 py-1 flex justify-center items-center">
                      6482
                    </div>
                    <div className="ml-5 rounded-lg border-2 border-gray-600 text-gray-600 dark:text-gray-400 text-sm px-2 py-1 flex justify-center items-center">
                      245
                    </div>
                  </div>
                </div>
                <p className="text-center xl:text-left mt-2 text-sm tracking-normal text-gray-600 dark:text-gray-400 leading-5">
                  Co-Founder & CEO Of Terribly Tiny Tales
                </p>
                <a
                  className="xl:text-left mt-2 text-sm tracking-normal leading-5 ml-12 text-center text-sky-700 m-auto"
                  href="wwww.instagram.com/anujgosalia"
                >
                  wwww.instagram.com/anujgosalia
                </a>
              </div>
              {/* social icon */}
              <div className="w-full h-10vh flex justify-between items-center px-5 mt-4">
                <svg
                  width="28px"
                  height="28px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="p-1  bg-sky-400 rounded"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z"
                      stroke="#ffffff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                <p className=" text-white font-semi-bold">125</p>
                <svg
                  version="1.0"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="28px"
                  height="28px"
                  viewBox="0 0 64 64"
                  enable-background="new 0 0 64 64"
                  fill="#000000"
                  className="p-1  bg-yellow-400 rounded"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path
                        fill="#ffffff"
                        d="M64,28c0-3.314-2.687-6-6-6H41l0,0h-0.016H41l2-18c0.209-2.188-1.287-4-3.498-4h-4.001 C33,0,31.959,1.75,31,4l-8,18c-2.155,5.169-5,6-7,6c-1,0-2,0-2,0v-2c0-2.212-1.789-4-4-4H4c-2.211,0-4,1.788-4,4v34 c0,2.21,1.789,4,4,4h6c2.211,0,4-1.79,4-4v-2c1,0,3.632,0.052,6.21,2.697C23.324,63.894,27.043,64,29,64h23c3.313,0,6-2.688,6-6 c0-1.731-0.737-3.288-1.91-4.383C58.371,52.769,60,50.577,60,48c0-1.731-0.737-3.288-1.91-4.383C60.371,42.769,62,40.577,62,38 c0-1.731-0.737-3.288-1.91-4.383C62.371,32.769,64,30.577,64,28z M12,60c0,1.104-0.896,2-2,2H4c-1.104,0-2-0.896-2-2V26 c0-1.105,0.896-2,2-2h6c1.104,0,2,0.895,2,2V60z M58,32H48c-0.553,0-1,0.446-1,1c0,0.552,0.447,1,1,1h8c2.209,0,4,1.79,4,4 c0,2.209-1.791,4-4,4H46c-0.553,0-1,0.446-1,1c0,0.552,0.447,1,1,1h8c2.209,0,4,1.79,4,4c0,2.209-1.791,4-4,4H44 c-0.553,0-1,0.446-1,1c0,0.552,0.447,1,1,1h8c2.209,0,4,1.79,4,4c0,2.209-1.791,4-4,4H29c-1,0-4.695,0.034-7.358-2.699 C18.532,56.109,16.112,56.003,14,56V30h2c4,0,6.57-1.571,9.25-8L33,4c0.521-1.104,1.146-2,2.251-2H39c1.104,0,2.126,0.834,2,2 l-1.99,18c-0.132,1.673,0.914,2,1.99,2h17c2.209,0,4,1.79,4,4C62,30.209,60.209,32,58,32z"
                      ></path>{" "}
                      <path
                        fill="#ffffff"
                        d="M7,54c-1.657,0-3,1.342-3,3c0,1.656,1.343,3,3,3s3-1.344,3-3C10,55.342,8.657,54,7,54z M7,58 c-0.553,0-1-0.449-1-1c0-0.553,0.447-1,1-1s1,0.447,1,1C8,57.551,7.553,58,7,58z"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <p className=" text-white font-semi-bold">12</p>
                <svg
                  width="28px"
                  height="28px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="p-1  bg-gray-400 rounded"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M9 4.45962C9.91153 4.16968 10.9104 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C3.75612 8.07914 4.32973 7.43025 5 6.82137"
                      stroke="#ffffff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    ></path>{" "}
                    <path
                      d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                      stroke="#ffffff"
                      stroke-width="1.5"
                    ></path>{" "}
                  </g>
                </svg>
                <p className=" text-white font-semi-bold">57.8k</p>
                <svg
                  width="28px"
                  height="28px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="p-1  bg-red-400 rounded"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"
                      stroke="#ffffff"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                <p className=" text-white font-semi-bold">26.0k</p>
              </div>
            </div>
          </div>
        </div>
        {/* Card code block end */}
      </div>

      <div className=" grid grid-cols-1">
        <div className=" p-4 shadow-2xl m-2 rounded-md border-2 border-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officia
          blanditiis modi recusandae, perspiciatis sapiente laborum voluptates
          officiis ullam veniam?
        </div>
        <div className=" p-4 shadow-2xl m-2 rounded-md border-2 border-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officia
          blanditiis modi recusandae, perspiciatis sapiente laborum voluptates
          officiis ullam veniam?
        </div>
        <div className=" p-4 shadow-2xl m-2 rounded-md border-2 border-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officia
          blanditiis modi recusandae, perspiciatis sapiente laborum voluptates
          officiis ullam veniam?
        </div>
        <div className=" p-4 shadow-2xl m-2 rounded-md border-2 border-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officia
          blanditiis modi recusandae, perspiciatis sapiente laborum voluptates
          officiis ullam veniam?
        </div>
        <div className=" p-4 shadow-2xl m-2 rounded-md border-2 border-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic officia
          blanditiis modi recusandae, perspiciatis sapiente laborum voluptates
          officiis ullam veniam?
        </div>
      </div>
    </>
  );
}
export default Index;
