import React from "react";
import { Flex } from "antd";
import { Icon } from "@iconify/react";
import { Iconify } from "@utils/constants/iconify";

const DockMenu = () => {
  const icons = [
    { id: 1, name: "Phone", icon: "solar:phone-outline" },
    { id: 2, name: "Email", icon: "icon-park-outline:send-email" },
    { id: 3, name: "Photos", icon: "solar:album-bold" },
    { id: 4, name: "Github", icon: "mdi:github" },
  ];

  const handleClickIcon = item => {
    switch (item.name) {
      case "Phone":
        window.location.href = "tel:+0367166716";
        break;
      case "Email":
        window.location.href = "mailto:quyetaq@gmail.com";
        break;
      case "Github":
        window.open("https://github.com/QuyetAQ", "_blank");
        break;
      default:
        break;
    }
  };

  return (
    <div className="dock-menu">
      {icons.map(item => (
        <div
          key={item.id}
          className="dock-icon"
          onClick={() => handleClickIcon(item)}>
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
