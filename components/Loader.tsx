import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Loader() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 100) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 20); // 30 milliseconds for a total of 5000ms (5 seconds) to reach from 0 to 100
      return () => clearInterval(interval);
    }
  }, [count]);
  return (
    <div className="main-container relative w-full h-screen overflow-hidden bg-black flex items-center justify-center font-Founder">
      <div className="Loader_page z-10 bg-white py-10 px-6 md:p-10 h-3/4 w-3/4 md:w-3/4 rounded-2xl">
        <div className="Loader flex flex-col justify-between h-full items-start ">
          <div className="loader-header flex flex-col gap-20">
            <div className="heading uppercase font-bold">
              <h1 className="text-[20px] md:text-[30px] lg:text-[40px] font-bold">
                PIXAVIA
              </h1>
              <h1 className="text-[50px] md:text-[80px] lg:text-[90px] xl:text-[110px] 2xl:text-[130px]">
                We create
              </h1>
              <h1 className="text-[50px] md:text-[80px] lg:text-[90px] xl:text-[110px] 2xl:text-[130px]">
                eye-opening
              </h1>
              <h1 className="text-[50px] md:text-[80px] lg:text-[90px] xl:text-[110px] 2xl:text-[130px]">
                designs
              </h1>
            </div>
          </div>
          <div className="Loader_footer flex items-center justify-between w-full text-2xl md:text-4xl font-Neue font-bold">
            <h1>Loading:</h1>
            <h1 className=" text-4xl lg:text-8xl">{count}%</h1>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ x: "-15%" }}
        animate={{ x: "3%" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="Animated-page z-[9] rounded-2xl absolute h-[70%] w-3/4 bg-zinc-200"
      ></motion.div>
      <motion.div
        initial={{ x: "-15%" }}
        animate={{ x: "7%" }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="Animated-page rounded-2xl  absolute h-[60%] z-[7] w-3/4 bg-zinc-500"
      ></motion.div>
      <motion.div
        initial={{ x: "15%" }}
        animate={{ x: "5%" }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="Animated-page rounded-2xl z-[8] absolute h-[65%] w-3/4 bg-zinc-400 md:bg-zinc-300"
      ></motion.div>
    </div>
  );
}

export default Loader;
