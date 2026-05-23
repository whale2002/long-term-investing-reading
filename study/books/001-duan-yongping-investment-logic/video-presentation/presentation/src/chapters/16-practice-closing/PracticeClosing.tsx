import type { CSSProperties } from "react";
import { MaskReveal } from "../../components/MaskReveal";
import type { ChapterStepProps } from "../../registry/types";
import "./PracticeClosing.css";

const stopList = ["不做空", "不用融资", "不碰不懂", "不频繁决策", "不为了快走捷径"];
const fiveQuestions = ["卖什么", "为何持续买", "长期赚钱靠什么", "现金流从哪里来", "价格是否合适"];
const reportChecks = ["负债", "现金流", "真实利润", "资本配置"];
const learnMethods = ["排除", "等待", "下注方式"];
const closingFlow = ["不为清单", "能力圈", "好公司", "合适价格", "长期资格"];

function styleIndex(index: number): CSSProperties {
  return { "--i": index } as CSSProperties;
}

export default function PracticeClosing({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <section className="pc-scene pc-stop-list">
        <div className="pc-stop-copy">
          <div className="kicker">PRACTICE 01</div>
          <h1>
            <MaskReveal show duration={1200}>
              <span>先写一页</span>
            </MaskReveal>
            <MaskReveal show delay={240} duration={1200}>
              <span className="pc-accent">不为清单</span>
            </MaskReveal>
          </h1>
          <p>只写五条也行，关键是波动来时真能执行。</p>
        </div>
        <div className="pc-notebook" aria-hidden="true">
          <div className="pc-paper-title">STOP DOING LIST</div>
          {stopList.map((item, index) => (
            <div className="pc-stop-row" key={item} style={styleIndex(index)}>
              <span>0{index + 1}</span>
              <strong>{item}</strong>
              <i />
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (step === 1) {
    return (
      <section className="pc-scene pc-boundary">
        <div className="pc-boundary-title">
          <div className="kicker">PRACTICE 02</div>
          <h2>用熟悉公司走一遍</h2>
        </div>
        <div className="pc-question-map" aria-hidden="true">
          <div className="pc-company-core">熟悉公司</div>
          {fiveQuestions.map((question, index) => (
            <div
              className={`pc-question-node pc-question-node-${index + 1} ${
                index >= 2 ? "pc-question-gap" : ""
              }`}
              key={question}
              style={styleIndex(index)}
            >
              <span>Q{index + 1}</span>
              <strong>{question}</strong>
            </div>
          ))}
          <svg viewBox="0 0 980 560" role="presentation">
            <path d="M490 280 L210 112" />
            <path d="M490 280 L770 112" />
            <path d="M490 280 L805 362" />
            <path d="M490 280 L490 488" />
            <path d="M490 280 L175 362" />
          </svg>
        </div>
        <div className="pc-boundary-note">答不上来的地方，就是边界。</div>
      </section>
    );
  }

  if (step === 2) {
    return (
      <section className="pc-scene pc-report">
        <div className="pc-report-copy">
          <div className="kicker">PRACTICE 03</div>
          <h2>财报只看四件事</h2>
          <p>先用它排除风险，不急着制造确定性。</p>
        </div>
        <div className="pc-report-sheet" aria-hidden="true">
          <div className="pc-scanline" />
          {reportChecks.map((item, index) => (
            <div
              className={`pc-check-cell pc-check-cell-${index + 1}`}
              key={item}
              style={styleIndex(index)}
            >
              <span>CHECK 0{index + 1}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (step === 3) {
    return (
      <section className="pc-scene pc-reminder">
        <div className="pc-reminder-copy">
          <div className="kicker">LEARNING BOUNDARY</div>
          <h2>这不是买卖建议</h2>
          <p>也不是抄持仓。要学的是记录、核对和少编理由。</p>
        </div>
        <div className="pc-reminder-stage" aria-hidden="true">
          <div className="pc-no-doc pc-no-doc-left">
            <span>买卖建议</span>
            <i />
          </div>
          <div className="pc-no-doc pc-no-doc-right">
            <span>持仓清单</span>
            <i />
          </div>
          <div className="pc-method-strip">
            {learnMethods.map((item, index) => (
              <strong key={item} style={styleIndex(index)}>
                {item}
              </strong>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (step === 4) {
    return (
      <section className="pc-scene pc-closing">
        <div className="pc-closing-hero">
          <div className="kicker">CLOSING SYSTEM</div>
          <h2>别先把自己淘汰</h2>
          <p>把能不做的事写清楚，再慢慢学习做什么。</p>
        </div>
        <div className="pc-flow" aria-hidden="true">
          {closingFlow.map((item, index) => (
            <div className="pc-flow-node" key={item} style={styleIndex(index)}>
              <span>0{index + 1}</span>
              <strong>{item}</strong>
            </div>
          ))}
          <div className="pc-flow-line" />
        </div>
        <div className="pc-once">投资只需要富一次</div>
      </section>
    );
  }

  if (step === 5) {
    return (
      <section className="pc-scene pc-share-close">
        <div className="pc-share-paper" aria-hidden="true">
          <div className="pc-share-index">END · 001</div>
          <div className="pc-share-rule" />
          <div className="pc-share-line">知道什么不该做</div>
        </div>
        <div className="pc-share-copy">
          <div className="kicker">TODAY'S SHARE</div>
          <h2>
            <MaskReveal show duration={1200}>
              <span>这就是今天的分享</span>
            </MaskReveal>
          </h2>
          <p>投资不需要每天都有动作。更重要的是知道什么不该做。</p>
        </div>
      </section>
    );
  }

  return null;
}
