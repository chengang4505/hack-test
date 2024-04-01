import { useState } from "react";

function Fight() {
  return (
    <div className="fight-page">
        <header className="clearFloat bgcolor">
            <div className="top ">
                <span onClick={() => { history.back() }}  className="goBack"></span>
                <span className="title">技能PK</span>
                {/* <span className="mark">
                    <a href="../View/Index.html" className="goIndexPage"><i className="other"></i><i className="other otherL"></i><i className="other"></i></a>
                    <span className="splitLine"></span><i className="close"><i className="other otherL"></i></i>
                </span> */}
            </div>
        </header>
        <main> 
            <div className="fixedTop pkTop"></div>
            <div className="content pkContent">
                <section className="pkDiv">
                    {/* <div className="skillPK animationReduce">
                        <div className="chartBg"></div>
                        <div className="" id="skill"></div>
                    </div> */}
                    <div className="personInfo clearFloat">
                        <div className="leftInfo animationZoomInR">
                            <div className="lBgColor bgColor">
                                <a href="../View/UserInfo.html"><div className="lImg"><img src="/img/u1.jpg" /></div></a>
                            </div>
                            <div className="ldetails">
                                <div className="uname">周易</div>
                                <div className="ubg">等级<span className="ulevel">入门新手</span></div>
                                <div className="ubg">正确数<span className="utrue">5</span></div>
                                <div className="ubg">胜场<span className="uwin">1</span></div>
                            </div>
                        </div>
                        <div className="rightInfo animationZoomInL">
                            <div className="rBgColor bgColor">
                                <a href="../View/UserInfo.html"><div className="rImg"><img src="/img/u3.jpg" /></div></a>
                            </div>
                            <div className="rdetails">
                                <div className="uname">何珥</div>
                                <div className="ubg">等级<span className="ulevel">入门新手</span></div>
                                <div className="ubg">正确数<span className="utrue">7</span></div>
                                <div className="ubg">胜场<span className="uwin">1</span></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* <footer>
                <div className="pkFooter">
                    <div className="share">
                        <span className="shareCont animationPlus">
                            <span className="arrow"></span>
                            <span className="line"></span>
                        </span>
                    </div>
                    <span className="shareWords">分享到其他群，继续查看排行榜</span>
                </div>
            </footer> */}
        </main>
    </div>
  );
}

export default Fight;
