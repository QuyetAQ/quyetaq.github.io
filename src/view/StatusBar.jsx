import React, { useEffect, useState } from "react";
import { Flex } from "antd";
import { formatDate } from "@utils/helpers/helpers";
import { DATE_FORMAT } from "@utils/constants/constants";
import { Icon } from "@iconify/react";
import { Iconify } from "@utils/constants/iconify";

const StatusBar = () => {
  const [connection, setConnection] = useState("");
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const connect = navigator.connection;
    if (!connect || connect.type === "wifi") {
      setConnection("Wifi");
    } else {
      setConnection(connect.effectiveType.toUpperCase());
    }
    // eslint-disable-next-line
  }, [navigator.connection]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="status-bar">
      <Flex
        style={{ height: 25, padding: "0px 8px" }}
        justify={"space-between"}
        align={"center"}>
        <Flex align={"center"}>
          <Icon
            // color="#775bbd"
            icon={Iconify["mingcute:signal-line"]}
            className="icon-action-borderless"
            style={{ width: "20px", height: "20px", cursor: "unset" }}
          />
          &nbsp;
          <strong style={{ marginTop: "2px" }}>{connection}</strong>
        </Flex>
        <Flex align={"center"}>
          <strong>{formatDate(time, DATE_FORMAT.HOUR_MIN)}</strong>
        </Flex>
        <Flex align={"center"}>
          <Icon
            // color="#775bbd"
            icon={Iconify["ion:battery-full"]}
            className="icon-action-borderless"
            style={{ width: "20px", height: "20px", cursor: "unset" }}
          />
        </Flex>
      </Flex>
    </div>
  );
};

export default StatusBar;
