import { useState, useEffect, useRef, memo } from "react";
import Layout from "../../layout/index";
import "./index.less";

let questionList = [
  {
    id: 1,
    question: "成语“沉鱼落雁”描述的是哪两位古代美女？",
    options: ["西施和王昭君", "西施和杨玉环", "王昭君和貂蝉", "貂蝉和杨玉环"],
    answer: 0,
  },
  {
    id: 2,
    question: "上古十大神器不包含下列哪个？",
    options: ["神农鼎", "女娲石", "干将", "轩辕剑"],
    answer: 0,
  },
  {
    id: 3,
    question: "中国五岳名山中不包含下列哪座山？",
    options: ["衡山", "泰山", "嵩山", "黄山"],
    answer: 0,
  },
  {
    id: 4,
    question: "中国最大的咸水湖？",
    options: ["青海湖", "鄱阳湖", "洞庭湖", "太湖"],
    answer: 0,
  },
  {
    id: 5,
    question: "西游记中的五指山在哪儿？",
    options: ["新疆", "海南", "安徽", "湖北"],
    answer: 0,
  },
  {
    id: 6,
    question: "歼20战机属于我国第几代战机？",
    options: ["第三代", "第四代", "第五代", "第六代"],
    answer: 0,
  },
];

function PK() {
  const [, setUpdate] = useState({});
  const count = useRef(10);
  const qIndex = useRef(0);
  const timer = useRef(0);
  const endFlag = useRef(false);

  const answerLCount = useRef(0);
  const answerRCount = useRef(0);

  let currentQ = questionList[qIndex.current];

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  function startTimer() {
    timer.current = setInterval(() => {
      count.current -= 1;
      // console.log("count.current", count.current);
      if (count.current === 0) {
        next();
        return;
      }
      setUpdate({});
    }, 1000);
  }

  function next() {
    clearInterval(timer.current);
    // debugger
    if (qIndex.current >= questionList.length - 1) {
      end();
      return;
    }
    count.current = 10;
    qIndex.current++;
    startTimer();
    setUpdate({});
  }

  function end() {
    endFlag.current = true;
    setUpdate({});
  }

  function onClick(answer) {
    if (currentQ.answer === answer) {
      answerLCount.current++;
    }

    // random
    answerRCount.current += Math.random() > 0.5 ? 1 : 0;

    next();
    setUpdate({});
  }

  let isWin = answerLCount.current > answerRCount.current;

  return (
    <Layout title="对战">
      <div className="pk-page pkPage">
        {/* <header className="bgcolor">
        <div className="top ">
          <a onClick={() => history.back()}>
            <span className="goBack"></span>
          </a>
          <span className="title">对战</span>
          <WalletButton></WalletButton>
        </div>
      </header> */}
        <main className="pkPage">
          <div id="PKInfo">
            <div className="userAInfo userAColor userL animationLeft">
              <span className="pkUserImg">
                <img src="/img/uimg.jpg" />
              </span>
              <span className="userName" style={{ marginRight: "0.3rem" }}>
                思思
              </span>
            </div>
            {!endFlag.current && <div className="timer">{count.current}</div>}
            <div className="userBInfo userBColor userR animationRight">
              <span className="pkUserImg">
                <img src="/img/u1.jpg" />
              </span>
              <span className="userName" style={{ marginLeft: "0.3rem" }}>
                周易
              </span>
            </div>
            {/* left */}
            {!endFlag.current && (
              <div id="leftScore">
                <span id="lscore" className="lscore">
                  {answerLCount.current}
                </span>
                <div className="scoreBar blueShadow">
                  <i id="lscoreBar"></i>
                </div>
              </div>
            )}

            {/* right */}
            {!endFlag.current && (
              <div id="rightScore">
                <span id="rscore" className="rscore">
                  {answerRCount.current}
                </span>
                <div className="scoreBar blueShadow">
                  <i id="rscoreBar"></i>
                </div>
              </div>
            )}

            {!endFlag.current && (
              <div id="PKQuestion">
                <div className="questionNum">
                  <span id="currentQuesNum">{qIndex.current + 1}</span>/
                  {questionList.length}
                </div>
                <div id="QuesContent">
                  <div className="question">{currentQ.question}</div>
                  <div className="answer">
                    {currentQ.options.map((e, index) => {
                      return (
                        <div className="aDiv">
                          <span
                            className="answerBg"
                            onClick={() => onClick(index)}
                          >
                            {e}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
            {endFlag.current && (
              <div id="PKResult">
                <div className="userAInfo userAColor userL">
                  <span className="userName">思思</span>
                  <span id="rsLscore">{answerLCount.current}分</span>
                </div>
                <div className="userBInfo userBColor userR">
                  <span className="userName">周易</span>
                  <span id="rsRscore">{answerRCount.current}分</span>
                </div>
                <div id="ScoreResult">
                  {isWin && (
                    <div id="pkSuccess">
                      <div className="success">
                        <img src="/img/PKSuccess.png" />
                      </div>
                      <div className="resultText">挑战成功！</div>
                    </div>
                  )}
                  {isWin && (
                    <div className="winPro">
                      <span className="sNum">+1 SOL</span>
                    </div>
                  )}
                  {!isWin && (
                    <div id="pkFail">
                      <div className="fail">
                        <img src="/img/PKFail.png" />
                      </div>
                      <div className="resultText">挑战失败！</div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default memo(PK);
