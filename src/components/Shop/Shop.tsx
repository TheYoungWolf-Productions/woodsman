import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div className="container px-5 py-5">
      <p className="font-sans text-2xl font-bold divide-solid text-red-600">
        SHOP BY CATEGORY
      </p>
      <hr className="my-3 h-2 border-2 border-solid bg-gray-600" />
      <div className="grid overflow-hidden grid-cols-4 grid-rows-4 gap-2">
        <div className="box row-span-2 col-start-1 col-end-5">
          <Link to="Bows">
            <div className="relative group flex justify-center items-center h-1/5 w-full">
              <img
                className="object-center object-cover h-full w-full"
                src="/Bows.jpg"
                alt="bows"
              />
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                Bows
              </button>
              <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
            </div>
          </Link>
        </div>
        <div className="box">2</div>
        <div className="box">3</div>
        <div className="box">4</div>
        <div className="box">5</div>
        <div className="box col-start-1 col-end-5">6</div>
      </div>

      {/* <div className="pb-16">
        <div className="flex justify-center items-center">
          <div className="2xl:mx-auto 2xl:container w-full">
            <div className="flex flex-col jusitfy-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-1 md:gap-x-2 w-full">
                <Link to="Bows">
                  <div className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 z-10 relative group flex justify-center items-center h-full w-full">
                    <img
                      className="object-center object-cover h-full w-full"
                      src="/Bows.jpg"
                      alt="bows"
                    />
                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                      Bows
                    </button> 
                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                  </div>
                </Link>
                <div className="flex flex-col space-y-1 md:space-y-2 mt-4 md:mt-0">
                  <div className="relative group flex justify-center items-center h-full w-full">
                    <img
                      className="object-center object-cover h-full w-full"
                      src="/Arrows.jpg"
                      alt="arrows"
                    />
                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                      Arrows
                    </button>
                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                  </div>
                  <div className="relative group flex justify-center items-center h-full w-full">
                    <img
                      className="object-center object-cover h-full w-full"
                      src="https://i.ibb.co/Hd1pVxW/louis-mornaud-Ju-6-TPKXd-Bs-unsplash-1-2.png"
                      alt="watch"
                    />
                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                      Watches
                    </button>
                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                  </div>
                </div>
                <div className="relative group justify-center items-center h-full w-full hidden lg:flex">
                  <img
                    className="object-center object-cover h-full w-full"
                    src="https://i.ibb.co/PTtRBLL/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png"
                    alt="girl"
                  />
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                    Women
                  </button>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                </div>
                <div className="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
                  <img
                    className="object-center object-cover h-full w-full hidden md:block"
                    src="https://1hn3q9v6jxz14tx754785znv-wpengine.netdna-ssl.com/wp-content/uploads/2021/11/Hero-Giveaway-ATA.jpg"
                    alt="girl"
                  />
                  <img
                    className="object-center object-cover h-full w-full md:hidden"
                    src="https://1hn3q9v6jxz14tx754785znv-wpengine.netdna-ssl.com/wp-content/uploads/2021/11/Hero-Giveaway-ATA.jpg"
                    alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
                  />
                  <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                    Women
                  </button>
                  <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                </div>
              </div>
              <div className="relative group hidden md:flex justify-center items-center h-full w-full mt-4 md:mt-8 lg:hidden">
                <img
                  className="object-center object-cover h-full w-full hidden md:block"
                  src="https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png"
                  alt="girl"
                />
                <img
                  className="object-center object-cover h-full w-full sm:hidden"
                  src="https://1hn3q9v6jxz14tx754785znv-wpengine.netdna-ssl.com/wp-content/uploads/2021/11/Hero-Giveaway-ATA.jpg"
                  alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2"
                />
                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
                  Women
                </button>
                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Shop;
