import type { CSSProperties } from "react";
import { MaskReveal } from "../../components/MaskReveal";
import type { ChapterStepProps } from "../../registry/types";
import "./Coldopen.css";

const wrongEntrances = ["股价", "故事", "涨跌"];
const companyLens = ["生意", "现金流", "长期生命力"];
const researchQuestions = ["为什么长期存在", "钱从哪里来", "别人为什么抢不走"];

function itemStyle(index: number): CSSProperties {
  return { "--i": index } as CSSProperties;
}

function EditorialMark() {
  return (
    <div className="co-mark" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  );
}

export default function ColdopenChapter({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <div className="co-scene scene-pad co-step-zero">
        <EditorialMark />
        <div className="co-fault-board">
          <div className="co-fault-line" aria-hidden="true" />
          {wrongEntrances.map((item, index) => (
            <div className="co-wrong-token" style={itemStyle(index)} key={item}>
              {item}
            </div>
          ))}
        </div>
        <div className="co-hero-block">
          <div className="kicker">research entry</div>
          <h1>
            <MaskReveal show duration={1000}>
              <span>第一步</span>
            </MaskReveal>
            <MaskReveal show delay={280} duration={1000}>
              <em>就跑偏了</em>
            </MaskReveal>
          </h1>
          <p>很多人研究公司，却先被这三个入口带走。</p>
        </div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="co-scene scene-pad co-step-question">
        <EditorialMark />
        <div className="co-question-grid">
          <div className="co-question-copy">
            <div className="kicker">the real question</div>
            <h2>
              <MaskReveal show duration={900}>
                <span>你买的</span>
              </MaskReveal>
              <MaskReveal show delay={260} duration={900}>
                <em>到底是什么？</em>
              </MaskReveal>
            </h2>
          </div>
          <div className="co-choice-map" aria-label="股票代码和公司两个视角">
            <div className="co-choice co-choice-code">
              <span className="label-mono">surface</span>
              <strong>股票代码</strong>
            </div>
            <div className="co-choice-arrow" aria-hidden="true">
              <span />
            </div>
            <div className="co-choice co-choice-company">
              <span className="label-mono">business</span>
              <strong>一门生意</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="co-scene scene-pad co-step-code">
        <div className="co-code-panel card">
          <div className="co-code-topline">
            <span className="label-mono">ticker view</span>
            <span className="co-live-dot" />
          </div>
          <div className="co-ticker">CODE</div>
          <div className="co-swing" aria-hidden="true">
            <svg viewBox="0 0 760 220" role="img">
              <path className="co-swing-grid" d="M20 55H740M20 110H740M20 165H740" />
              <path
                className="co-swing-path"
                d="M20 142 C95 72 148 78 210 118 S326 210 394 126 516 36 590 94 688 160 740 90"
              />
              <circle className="co-swing-dot" cx="590" cy="94" r="16" />
            </svg>
          </div>
          <div className="co-chase-row">
            <span>追涨</span>
            <span>杀跌</span>
            <span>跟着晃</span>
          </div>
        </div>
        <div className="co-side-note">
          <div className="kicker">wrong object</div>
          <p>如果买的是代码，注意力会跟着市场摆动。</p>
        </div>
      </div>
    );
  }

  if (step === 3) {
    return (
      <div className="co-scene scene-pad co-step-company">
        <div className="co-company-title">
          <div className="kicker">company view</div>
          <h2>注意力会变</h2>
        </div>
        <div className="co-lens-stage">
          {companyLens.map((item, index) => (
            <div className="co-lens-card card" style={itemStyle(index)} key={item}>
              <span className="hero-num">0{index + 1}</span>
              <strong>{item}</strong>
            </div>
          ))}
          <svg className="co-cashflow" viewBox="0 0 1060 260" aria-hidden="true">
            <path
              d="M35 175 C185 60 330 60 485 160 S785 255 1025 65"
              className="co-cashflow-path"
            />
          </svg>
        </div>
        <div className="co-question-strip">
          {researchQuestions.map((item, index) => (
            <span style={itemStyle(index)} key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="co-scene scene-pad co-step-purpose">
      <EditorialMark />
      <div className="co-purpose-frame">
        <div className="co-not-this" aria-label="本章不做的事情">
          <span>不讲个股买点</span>
          <span>不抄案例结论</span>
        </div>
        <div className="co-purpose-core">
          <div className="kicker">one job</div>
          <h2>
            <MaskReveal show duration={950}>
              <span>看懂</span>
            </MaskReveal>
            <MaskReveal show delay={260} duration={950}>
              <em>好公司</em>
            </MaskReveal>
          </h2>
          <p>把问题从价格和故事，重新拉回商业逻辑。</p>
        </div>
      </div>
    </div>
  );
}
