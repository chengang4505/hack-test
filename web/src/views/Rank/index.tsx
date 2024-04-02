import { useState } from "react";
import Layout from "../../layout/index";
import { UserOutlined } from "@ant-design/icons";
import "./index.less";
import { formatAddress } from "../../utils";

const list = [
  {
    address: "7rhxnLV8C77o6d8oz26AgK8x8m5ePsdeRawjqvojbjnQ",
    winN: 10,
    failN: 5,
  },
  {
    address: "HFqU5x63VTqvQss8hp11i4wVV8bD44PvwucfZ2bU7gRe",
    winN: 3,
    failN: 5,
  },
  {
    address: "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm",
    winN: 10,
    failN: 4,
  },
  {
    address: "2g9NLWUM6bPm9xq2FBsb3MT3F3G5HDraGqZQEVzcCWTc",
    winN: 5,
    failN: 2,
  },
];

function Rank() {
  let address = "dadfs";
  return (
    <Layout title="排行榜">
      <div className="rank-page">
        <main>
          <section className="listContainer" id="listContainer">
            <div className="title animationZoomIn" id="title"></div>
          </section>
          <div style={{ width: "100%" }}>
            <div className="listLine listGradient"></div>
          </div>
          <div
            className="content"
            style={{ overflow: "hidden", height: "3.8rem" }}
            id="ListContent"
          >
            <section className="listDiv" id="competList">
              {list.map((e,index) => {
                return (
                  <div key={e.address} className="rank-card listBgGradient animationFlip clearFloat">
                    <div className="num">
                      <i>{index +1}</i>
                    </div>
                    <div className="address-logo">
                      <div className="userImg">
                        <UserOutlined style={{ fontSize: "0.25rem" }} />
                      </div>
                    </div>
                    <div className="info-wrap">
                      <div className="address">
                        {formatAddress(
                          e.address,
                          10
                        )}{" "}
                      </div>
                      <div className="line"></div>
                      <div className="info">
                        <span className="item">
                          <span className="name">胜利:</span>
                          <span className="value">{e.winN || 0}</span>
                        </span>
                        <span className="item">
                          <span className="name">失败:</span>
                          <span className="value">{e.failN || 0}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </section>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default Rank;
