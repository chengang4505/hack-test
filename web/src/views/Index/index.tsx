import { useState } from "react";
import "./index.less";
import Layout from "../../layout/index";
import { Link } from "react-router-dom";
import {
  AreaChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import useAddress from '../../hook/useAddress';
import { formatAddress } from '../../utils';


function Index() {

  const address = useAddress();

  return (
    <Layout title="脑力风暴" headerClass="gradient" showBack={false}>
      <div className="home-page">
        <main>
          <div className="content">
            <section className="infoPanel">
              <div className="info-img">
                <div className="info-wrap">
                  <span className="uimg">
                    {/* <img src="/img/uimg.jpg" alt="头像" /> */}
                    <UserOutlined style={{ fontSize: "0.25rem" }} />
                  </span>
                  <span className="address">{
                    address ? formatAddress(address): '--'
                  }</span>
                </div>
              </div>
              <div className="info">
                <span className="item">
                  <span className="name">余额:</span>
                  <span className="value">{ address ? '2 SOL':'--'}</span>
                </span>
                <span className="item">
                  <span className="name">胜利:</span>
                  <span className="value">{ address ? '10':'--'}</span>
                </span>
                <span className="item">
                  <span className="name">失败:</span>
                  <span className="value">{ address ? '5':'--'}</span>
                </span>
              </div>
            </section>
            <section className="gamePanel list">
              <Link to={"../pk"} className="panel">
                <div
                  className="panel-content  animationLeft"
                  style={{ background: "#1885ed", borderColor: "#1885ed" }}
                >
                  <span>好友对战</span>
                  <TeamOutlined style={{ fontSize: "0.4rem" }} />
                </div>
              </Link>
              <Link to={"../rank"} className="panel">
                <div
                  className="panel-content animationRight"
                  style={{ background: "#ef6f9a", borderColor: "#ef6f9a" }}
                >
                  <span>排行榜</span>
                  <AreaChartOutlined style={{ fontSize: "0.4rem" }} />
                </div>
              </Link>

              {/* <Link to={"../rank"} className="panel">
                <div
                  className="panel-content animationRight"
                  style={{ background: "#07a4d6", borderColor: "#07a4d6" }}
                >
                  排位赛
                </div>
              </Link> */}
            </section>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default Index;
