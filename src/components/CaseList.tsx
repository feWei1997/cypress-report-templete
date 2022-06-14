import React from "react";
import { Card, Collapse } from "antd";
import { FieldTimeOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const CaseList: React.FC = () => {
  return (
    <Card className="mt-12px">
      <Collapse defaultActiveKey={["1"]} ghost>
        <Panel
          header={
            <div>
              <div style={{ fontSize: 21 }}>子账号列表</div>
              <div style={{ color: "rgba(0,0,0,0.54)", fontSize: 12 }}>
                /cases/main.test.js
              </div>
              <div style={{ fontSize: 12 }}>
                <FieldTimeOutlined style={{ color: '#52c41a' }}/> 30ms
              </div>
            </div>
          }
          key="1"
        >
          <p>{text}</p>
        </Panel>
      </Collapse>
    </Card>
  );
};

export default CaseList;
