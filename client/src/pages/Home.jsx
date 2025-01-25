import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import { CustomButton } from "../components";

const Home = () => {
  const snap = useSnapshot(state);

  useEffect(() => {
    // Check for the query parameter
    const queryParams = new URLSearchParams(window.location.search);
    const paymentStatus = queryParams.get("payment");

    if (paymentStatus === "success") {
      // Restore the canvas state from local storage

      const imageURL = localStorage.getItem("canvasState"); // Retrieve from local storage
      if (imageURL) {
        downloadImage(imageURL);
      }

      // Clear the query parameter
      const newUrl = window.location.pathname; // Get the URL without query parameters
      window.history.replaceState({}, document.title, newUrl); // Update the URL

      // Clear the saved state from local storage
      localStorage.removeItem("canvasState");
    }
  }, []);

  const downloadImage = (imageURL) => {
    // Create a temporary <a> element
    const link = document.createElement("a");
    link.href = imageURL;
    link.download = "canvas-image.png"; // Name of the downloaded file

    // Trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              className="h-8 w-8 object-contain"
            />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET'S <br className="xl:block hidden" />
                DO IT.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
                Create your unique and exclusive shirt with our brand-new 3D
                customization tool. <strong>Unleash your imagination</strong>{" "}
                and define your own style.
              </p>
              <CustomButton
                type="filled"
                title="Customize It"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2-5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
