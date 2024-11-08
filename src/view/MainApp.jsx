import React from "react";
import { Card, Flex, Avatar, Typography } from "antd";
import useAuth from "@utils/context/AuthContext";
import { motion } from "framer-motion";
import { MAIN_APP } from "@utils/constants/metadata";
import * as IconLocal from "@assets/index";

const MainApp = props => {
  const { device } = useAuth();

  const handleScroll = () => {
    const scrollingDiv = document.getElementById("mainApp");
    const { scrollTop, scrollHeight, clientHeight } = scrollingDiv;
    // Check if scrolled at least halfway up
    if (scrollTop < (scrollHeight - clientHeight) / 2) {
      props.setShowHiddenDiv(true);
    } else {
      props.setShowHiddenDiv(false);
    }
  };

  return (
    <div
      id="mainApp"
      className="main-app"
      onScroll={handleScroll}
      style={{
        height:
          device === "web" ? window.innerHeight - 45 : window.innerHeight - 20,
        marginTop: device === "web" ? "33px" : "0px",
      }}>
      <Card
        size={"small"}
        bordered={false}
        style={{
          width: "100%",
          marginBottom: "16px",
          borderRadius: "8px",
        }}>
        <Flex vertical={false} align="flex-start" justify={"space-between"}>
          <div>
            <Flex vertical={true} align="flex-start" justify={"flex-start"}>
              <Typography.Title level={4} style={{ margin: 0 }}>
                Springs
              </Typography.Title>
              <Typography.Text>Keyframes</Typography.Text>
              <Typography.Text>Layout animations</Typography.Text>
              <Typography.Text>Shared layout animations</Typography.Text>
              <Typography.Text>Scroll animations</Typography.Text>
              <Typography.Text>SVG paths</Typography.Text>
            </Flex>
          </div>
          <div>
            <Avatar size={64} shape="square" src={IconLocal.LOGO} alt="logo" />
          </div>
        </Flex>
      </Card>
      {MAIN_APP.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}>
          <Card
            title={item.title}
            bordered={false}
            size={"small"}
            style={{
              width: "100%",
              marginBottom: "16px",
              borderRadius: "8px",
            }}>
            {item.body.map((item1, index1) => (
              <motion.div
                key={index1}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                <div>{item1}</div>
              </motion.div>
            ))}
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default MainApp;
