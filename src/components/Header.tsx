import { CheckCircleOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";

const Header: React.FC = () => {
  return (
    <Card>
      <div className="flex justify-center">
        <div className="mr-10px">
          <CheckCircleOutlined style={{ color: "green", marginRight: 4 }} />
          2022/03/5
        </div>
        <div className="mr-10px">检测地址: <a>https://www.baidu.com</a></div>
        <div>本次检测10项, 通过10项</div>
      </div>
    </Card>
  );
};

export default Header;
