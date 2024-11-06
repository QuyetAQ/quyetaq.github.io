import React, { useEffect } from "react";
import { Flex } from "antd";
import { Icon } from "@iconify/react";
import { Iconify } from "@utils/constants/iconify";

const DockMenu = () => {
  const icons = [
    { id: 1, name: "Phone", icon: "line-md:phone" },
    { id: 2, name: "Email", icon: "icon-park-outline:send-email" },
    { id: 3, name: "Photos", icon: "solar:album-bold" },
    { id: 4, name: "Github", icon: "mdi:github" },
  ];

  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  return (
    <div className="dock-menu">
      {icons.map(item => (
        <div key={item.id} className="dock-icon">
          <Flex align={"center"}>
            <Icon
              // color="#775bbd"
              icon={Iconify[item.icon]}
              className="icon"
              style={{ width: "24px", height: "24px", cursor: "unset" }}
            />
          </Flex>
          <span className="label">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default DockMenu;
