import { useState } from "react";
// import "./index.less";
import { Link } from "react-router-dom";

function Index() {
  return (
    <div className="home-page">
      {/* <!--设置遮罩层--> */}
      <div id="hideBg"></div>
      <div className="fixedTop"></div>
      <header className="clearFloat gradient">
        <div className="top" id="header">
          <span className="title">脑力风暴一测试赛季</span>
          {/* <span className="mark">
            <a href="#" className="goIndexPage">
              <i className="other"></i>
              <i className="other otherL"></i>
              <i className="other"></i>
            </a>
            <span className="splitLine"></span>
            <i className="close">
              <i className="other otherL"></i>
            </i>
          </span> */}
        </div>
      </header>
      <main>
        <div className="content">
          <section className="infoPanel">
            {/* <span
              className="share"
            >
              <img src="/img/shareEWM.png" />
            </span> */}
            <div className="infoImg">
              <a>
                <span className="uimg">
                  <img src="/img/uimg.jpg" alt="头像" />
                </span>
                <span className="uname">思思</span>
              </a>
            </div>
            <div className="infoLevel">
              <span className="level">
                Lv.2
                <span className="levelProgress">
                  <i style={{ width: "0.2rem" }}></i>
                </span>
              </span>
              <span className="score">
                <span className="scoreMark">
                  <img src="/img/score.png" />
                </span>
                <span className="sNum">1000</span>
              </span>
            </div>
          </section>
          <section className="gamePanel">
            <Link to={'../qualify'} className="leftPanel">
              <div className="orderPanel animationLeft">排位赛1</div>
            </Link>
            <Link to={'../fight'} className="rightPanel">
              <div className="listPanel animationRight">好友对战</div>
            </Link>
            <a  className="leftPanel">
              <div className="storePanle animationLeft">设置</div>
            </a>
            <Link to={'../rank'} className="rightPanel">
              <div
                className="friendPKPanel animationRight"
                style={{ marginTop: "-0.5rem" }}
              >
                排行榜
              </div>
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Index;
