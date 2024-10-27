import React from "react";
import { Typography } from "antd";
const {Title} = Typography

function MenuCard({icon, title, onClick}) {
  return (
    <div style={{width: "100%"}}>
      <Card
        bordered
        hoverable
        onClick = {onClick}
        style={{
          width: 200,
          height: 150,
          background: "#ecebec",
          borderRadius: "12px",
          // boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
            {icon && <div style={{size: "40px"}}>{icon}</div>}
          {/* <icon size={40} /> */}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Title level={5}>{title}</Title>
        </div>
      </Card>
    </div>
  );
}

export default MenuCard;
