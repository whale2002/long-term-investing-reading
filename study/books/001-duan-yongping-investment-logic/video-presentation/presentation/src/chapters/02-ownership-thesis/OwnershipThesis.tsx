import type { CSSProperties } from "react";
import type { ChapterStepProps } from "../../registry/types";
import "./OwnershipThesis.css";

const thesisNodes = ["能力圈", "好公司", "合适价格", "少犯错"];
const questionRows = [
  "真的懂这家公司吗？",
  "未来能持续赚钱吗？",
  "比别的机会更好吗？",
];
const badReasons = ["图形好看", "别人都在买"];

function ThesisRail() {
  return (
    <div className="ot-thesis-rail" aria-hidden="true">
      {thesisNodes.map((label, index) => (
        <div className="ot-thesis-node" key={label} style={{ "--i": index } as CSSProperties}>
          <span>{label}</span>
          {index < thesisNodes.length - 1 ? <i /> : null}
        </div>
      ))}
    </div>
  );
}

function PressureBoard() {
  return (
    <div className="ot-pressure-board" aria-hidden="true">
      <svg className="ot-crash-chart" viewBox="0 0 760 360" role="presentation">
        <path className="ot-grid-line" d="M28 78H732" />
        <path className="ot-grid-line" d="M28 180H732" />
        <path className="ot-grid-line" d="M28 282H732" />
        <path className="ot-crash-path" d="M32 72 C120 92 170 58 242 112 S382 134 438 194 S564 304 728 294" />
        <circle className="ot-crash-dot" cx="438" cy="194" r="11" />
      </svg>
      <div className="ot-anchor-card">
        <span>公司判断</span>
        <strong>不被报价带走</strong>
      </div>
      <div className="ot-noise ot-noise-a">质疑</div>
      <div className="ot-noise ot-noise-b">下跌</div>
      <div className="ot-noise ot-noise-c">恐慌</div>
    </div>
  );
}

export default function OwnershipThesis({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <section className="ot-scene ot-map">
        <div className="ot-map-copy">
          <div className="kicker">OWNERSHIP THESIS</div>
          <h1>从报价回到资产</h1>
          <p>整本书的主线，不是明天涨跌，而是你是否真的拥有一门好生意的一部分。</p>
        </div>
        <ThesisRail />
        <div className="ot-asset-seal">资产</div>
      </section>
    );
  }

  if (step === 1) {
    return (
      <section className="ot-scene ot-constraint">
        <div className="ot-slogan-card">
          <span>口号</span>
          <strong>买股票就是买公司</strong>
        </div>
        <div className="ot-press-mark" aria-hidden="true">
          <svg viewBox="0 0 520 520" role="presentation">
            <circle cx="260" cy="260" r="198" />
            <path d="M142 274h236M260 142v236" />
          </svg>
        </div>
        <div className="ot-contract-card">
          <div className="kicker">ACTION CONSTRAINT</div>
          <h2>不是背下来</h2>
          <p>它要约束每一次买入：不懂公司，就不要让报价替你下判断。</p>
        </div>
      </section>
    );
  }

  if (step === 2) {
    return (
      <section className="ot-scene ot-pressure">
        <div className="ot-pressure-copy">
          <div className="kicker">STRESS TEST</div>
          <h2>大跌时也照做</h2>
          <p>真正难的是账面波动和外部质疑同时出现，你还按公司视角行动。</p>
        </div>
        <PressureBoard />
      </section>
    );
  }

  if (step === 3) {
    return (
      <section className="ot-scene ot-questions">
        <div className="ot-question-title">
          <div className="kicker">BEFORE BUYING</div>
          <h2>买入前三问</h2>
        </div>
        <div className="ot-question-form" aria-hidden="true">
          {questionRows.map((question, index) => (
            <div className="ot-question-row" key={question} style={{ "--i": index } as CSSProperties}>
              <span className="hero-num">0{index + 1}</span>
              <strong>{question}</strong>
              <i />
            </div>
          ))}
          <div className="ot-scan-line" />
        </div>
      </section>
    );
  }

  if (step === 4) {
    return (
      <section className="ot-scene ot-filter">
        <div className="ot-filter-left">
          <div className="kicker">WRONG REASONS</div>
          <h2>理由不相关，就先停下</h2>
        </div>
        <div className="ot-reason-stack" aria-hidden="true">
          {badReasons.map((reason, index) => (
            <div className="ot-bad-reason" key={reason} style={{ "--i": index } as CSSProperties}>
              <span>{reason}</span>
              <b>偏离公司视角</b>
            </div>
          ))}
          <div className="ot-filter-stamp">NOT INVESTING</div>
        </div>
      </section>
    );
  }

  return null;
}
