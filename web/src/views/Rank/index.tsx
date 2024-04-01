import { useState } from "react";

function Rank() {
  return (
    <div className="rank-page">
        <header className="clearFloat bgcolor" id="header">
            <div className="top ">
                <span onClick={() => { history.back() }}  className="goBack"></span>
                <span className="title">排行榜</span>
                {/* <span className="mark">
                    <a href="../View/Index.html" className="goIndexPage"><i className="other"></i><i className="other otherL"></i><i className="other"></i></a>
                    <span className="splitLine"></span><i className="close"><i className="other otherL"></i></i>
                </span> */}
            </div>
        </header>
        <main>
            <div className="fixedTop radiusTop"></div>
            <section className="listContainer" id="listContainer">
                <div className="title animationZoomIn" id="title">
                    {/* <span id="friendList" className="friendList currentList animationRotate">好友排行</span>
                    <span className="splitLine"></span>
                    <span id="worldList"  className="worldList animationRotate">世界排行</span> */}
                </div>
                {/* <div className="title" id="preTitle">上一赛季英雄榜</div> */}
            </section>
            <div style={{width:'100%'}}><div className="listLine listGradient"></div></div>
            <div className="content" style={{overflow:'hidden',height:'3.8rem'}} id="ListContent">
                <section className="listDiv" id="competList">
                    <a href="../View/UserInfo.html" className="levelPanel animationFlip">
                        <div className="listBgGradient clearFloat">
                            <div className="levelNum animationRotate"><i>1</i></div>
                            <div className="orderBg">
                                <div className="userImg"><img src="/img/u1.jpg" /></div>
                            </div>
                            <label>周易</label>
                            <label className="uAddr"><span>来自：<span>深圳</span></span></label>
                            <span className="underLine"></span>
                            <span className="levelScore"><span>入门新手</span></span>
                            <div id="starMark" className="clearFloat">
                                <div className="starDiv"><span className="star small starAct"></span></div>
                                <div className="starDiv starLevel">0</div>
                            </div>
                        </div>
                    </a>
                    <a href="../View/UserInfo.html" className="levelPanel animationFlip">
                        <div className="listBgGradient">
                            <div className="levelNum animationRotate"><i>2</i></div>
                            <div className="orderBg">
                                <div className="userImg"><img src="/img/uimg.jpg" /></div>
                            </div>
                            <label>我</label>
                            <label className="uAddr"><span>来自：<span>深圳</span></span></label>
                            <span className="underLine"></span>
                            <span className="levelScore"><span>入门新手</span></span>
                            <div id="starMark" className="clearFloat">
                                <div className="starDiv"><span className="star small starAct"></span></div>
                                <div className="starDiv starLevel">0</div>
                            </div>
                        </div>
                    </a>
                    <a href="../View/UserInfo.html" className="levelPanel animationFlip">
                        <div className="listBgGradient">
                            <div className="levelNum animationRotate"><i>3</i></div>
                            <div className="orderBg">
                                <div className="userImg"><img src="/img/u3.jpg" /></div>
                            </div>
                            <label>何珥</label>
                            <label className="uAddr"><span>来自：<span>武汉</span></span></label>
                            <span className="underLine"></span>
                            <span className="levelScore"><span>入门新手</span></span>
                            <div id="starMark" className="clearFloat">
                                <div className="starDiv"><span className="star small starAct"></span></div>
                                <div className="starDiv starLevel">0</div>
                            </div>
                        </div>
                    </a>
                    <a href="../View/UserInfo.html" className="levelPanel animationFlip">
                        <div className="listBgGradient">
                            <div className="levelNum animationRotate"><i>4</i></div>
                            <div className="orderBg">
                                <div className="userImg"><img src="/img/u2.jpg" /></div>
                            </div>
                            <label>周飒</label>
                            <label className="uAddr"><span>来自：<span>成都</span></span></label>
                            <span className="underLine"></span>
                            <span className="levelScore"><span>入门新手</span></span>
                            <div id="starMark" className="clearFloat">
                                <div className="starDiv"><span className="star small starAct"></span></div>
                                <div className="starDiv starLevel">0</div>
                            </div>
                        </div>
                    </a>
                    <a href="../View/UserInfo.html" className="levelPanel animationFlip">
                        <div className="listBgGradient">
                            <div className="levelNum animationRotate"><i>5</i></div>
                            <div className="orderBg">
                                <div className="userImg"><img src="/img/u3.jpg" /></div>
                            </div>
                            <label>王舞</label>
                            <label className="uAddr"><span>来自：<span>广州</span></span></label>
                            <span className="underLine"></span>
                            <span className="levelScore"><span>入门新手</span></span>
                            <div id="starMark" className="clearFloat">
                                <div className="starDiv"><span className="star small starAct"></span></div>
                                <div className="starDiv starLevel">0</div>
                            </div>
                        </div>
                    </a>
                </section>
                <section className="listDiv" id="preCompetList">
                    <a href="../View/UserInfo.html" className="levelPanel animationFlip">
                        <div className="listBgGradient clearFloat">
                            <div className="levelNum animationRotate"><i>1</i></div>
                            <div className="orderBg">
                                <div className="userImg"><img src="/img/uimg.jpg" /></div>
                            </div>
                            <label>张怡</label>
                            <label className="uAddr"><span>来自：<span>北京</span></span></label>
                            <span className="underLine"></span>
                            <span className="levelScore"><span>入门新手</span></span>
                            <div id="starMark" className="clearFloat">
                                <div className="starDiv"><span className="star small starAct"></span></div>
                                <div className="starDiv starLevel">0</div>
                            </div>
                        </div>
                    </a>
                    <a href="../View/UserInfo.html" className="levelPanel animationFlip">
                        <div className="listBgGradient">
                            <div className="levelNum animationRotate"><i>2</i></div>
                            <div className="orderBg">
                                <div className="userImg"><img src="/img/u1.jpg" /></div>
                            </div>
                            <label>胡迩</label>
                            <label className="uAddr"><span>来自：<span>深圳</span></span></label>
                            <span className="underLine"></span>
                            <span className="levelScore"><span>入门新手</span></span>
                            <div id="starMark" className="clearFloat">
                                <div className="starDiv"><span className="star small starAct"></span></div>
                                <div className="starDiv starLevel">0</div>
                            </div>
                        </div>
                    </a>
                    <a href="../View/UserInfo.html" className="levelPanel animationFlip">
                        <div className="listBgGradient">
                            <div className="levelNum animationRotate"><i>3</i></div>
                            <div className="orderBg">
                                <div className="userImg"><img src="/img/u2.jpg" /></div>
                            </div>
                            <label>孙萨蛮</label>
                            <label className="uAddr"><span>来自：<span>上海</span></span></label>
                            <span className="underLine"></span>
                            <span className="levelScore"><span>入门新手</span></span>
                            <div id="starMark" className="clearFloat">
                                <div className="starDiv"><span className="star small starAct"></span></div>
                                <div className="starDiv starLevel">0</div>
                            </div>
                        </div>
                    </a>
                    <a href="../View/UserInfo.html" className="levelPanel animationFlip">
                        <div className="listBgGradient">
                            <div className="levelNum animationRotate"><i>4</i></div>
                            <div className="orderBg">
                                <div className="userImg"><img src="/img/u1.jpg" /></div>
                            </div>
                            <label>郑思雨</label>
                            <label className="uAddr"><span>来自：<span>西安</span></span></label>
                            <span className="underLine"></span>
                            <span className="levelScore"><span>入门新手</span></span>
                            <div id="starMark" className="clearFloat">
                                <div className="starDiv"><span className="star small starAct"></span></div>
                                <div className="starDiv starLevel">0</div>
                            </div>
                        </div>
                    </a>
                    <a href="../View/UserInfo.html" className="levelPanel animationFlip">
                        <div className="listBgGradient">
                            <div className="levelNum animationRotate"><i>5</i></div>
                            <div className="orderBg">
                                <div className="userImg"><img src="/img/u3.jpg" /></div>
                            </div>
                            <label>苗武宇</label>
                            <label className="uAddr"><span>来自：<span>昆明</span></span></label>
                            <span className="underLine"></span>
                            <span className="levelScore"><span>入门新手</span></span>
                            <div id="starMark" className="clearFloat">
                                <div className="starDiv"><span className="star small starAct"></span></div>
                                <div className="starDiv starLevel">0</div>
                            </div>
                        </div>
                    </a>
                </section>
            </div>
        </main>
        <footer>
            <div className="fixedBottom radiusTop"></div>
            <div style={{width:'100%'}}>
                <div className="listLine listGradient bottomLine"></div>
            </div>
            <div id="footListDiv">
                <div className="bottomNav" id="footer">
                    <div className="orderBg animationRubberBand"><img src="/img/king.png" className="kingImg" /></div>
                    <div className="preCompetition animationRubberBand" id="preCompet">查看上赛季英雄榜</div>
                </div>
            </div>
            <div id="footPreListDiv" className="animationLeft">
                <a className="goList">返回</a>
            </div>
        </footer>
    </div>
  );
}

export default Rank;
