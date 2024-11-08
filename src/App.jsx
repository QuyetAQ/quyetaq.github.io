import React, { useEffect, useState } from "react";
import useAuth from "@utils/context/AuthContext";
import StatusBar from "@view/StatusBar";
import MainApp from "@view/MainApp";
import DockMenu from "@view/DockMenu";
import { motion } from "framer-motion";
import "./App.scss";

const App = () => {
  const { device, setDevice } = useAuth();
  const [isVisibleScroll, setIsVisibleScroll] = useState(true);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line
  }, []);

  const handleResize = () => {
    const mobile = document.getElementById("mobile");
    if (window.innerWidth < 480) {
      // Mobile design
      mobile.style.width = "100%";
      mobile.style.height = "100%";
      mobile.style.marginLeft = "-50%";
      mobile.style.marginTop = "0";
      mobile.style.top = "0";
      setDevice("mobile");
      return;
    } else {
      setDevice("web");
    }

    const margin = 15;
    let width = window.innerWidth - margin * 2;
    let height = window.innerHeight - margin * 2;

    const targetWidth = 750;
    const targetHeight = 1624;
    const ratio = targetWidth / targetHeight;

    if (width / height > ratio) {
      width = Math.round(height * ratio);
    } else {
      height = Math.round(width / ratio);
    }
    mobile.style.width = width + "px";
    mobile.style.height = height + "px";
    mobile.style.marginLeft = "-" + width / 2 + "px";
    mobile.style.marginTop = "-" + height / 2 + "px";
    mobile.style.top = "50%";
  };

  return (
    <div id="mobile">
      {device === "web" && <StatusBar />}
      <MainApp setShowHiddenDiv={value => setIsVisibleScroll(value)} />
      {isVisibleScroll && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}>
          <DockMenu />
        </motion.div>
      )}
    </div>
  );
};

export default App;
