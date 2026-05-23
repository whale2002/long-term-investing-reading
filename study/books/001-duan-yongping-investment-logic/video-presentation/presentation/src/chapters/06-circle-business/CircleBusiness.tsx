import type { CSSProperties } from "react";
import type { ChapterStepProps } from "../../registry/types";
import "./CircleBusiness.css";

const sources = ["长期经验", "产品体验", "行业理解", "反复验证"];
const questions = ["为什么比市场更懂？", "事实，还是故事？", "十年现金流说得清吗？"];
const stressTicks = ["原价", "下跌", "半价"];
const triangleNodes = [
  { label: "生意模式", className: "cb-tri-business" },
  { label: "护城河", className: "cb-tri-moat" },
  { label: "企业文化", className: "cb-tri-culture" },
];

function SourceStack() {
  return (
    <div className="cb-source-stack" aria-hidden="true">
      {sources.map((item, idx) => (
        <div className="cb-source-row" key={item} style={{ "--i": idx } as CSSProperties}>
          <span>0{idx + 1}</span>
          <strong>{item}</strong>
        </div>
      ))}
      <div className="cb-understand-block">理解</div>
    </div>
  );
}

function QuestionCards() {
  return (
    <div className="cb-question-cards" aria-hidden="true">
      {questions.map((item, idx) => (
        <div className="cb-question-card" key={item} style={{ "--i": idx } as CSSProperties}>
          <span>Q{idx + 1}</span>
          <strong>{item}</strong>
        </div>
      ))}
      <div className="cb-hearsay">
        <span>听来的信心</span>
        <i />
      </div>
    </div>
  );
}

function HalfPriceTest() {
  return (
    <div className="cb-stress-stage" aria-hidden="true">
      <svg viewBox="0 0 780 360" role="presentation">
        <path className="cb-price-path" d="M50 92 C170 80 258 108 342 96 C450 80 520 136 590 222 C634 276 686 298 734 302" />
        <path className="cb-half-line" d="M64 252 H720" />
      </svg>
      <div className="cb-stress-ticks">
        {stressTicks.map((tick, idx) => (
          <span key={tick} style={{ "--i": idx } as CSSProperties}>
            {tick}
          </span>
        ))}
      </div>
      <div className="cb-stress-choice cb-choice-confidence">更有信心</div>
      <div className="cb-stress-choice cb-choice-fear">只剩恐惧</div>
    </div>
  );
}

function TriangleModel() {
  return (
    <div className="cb-triangle-wrap" aria-hidden="true">
      <svg viewBox="0 0 720 560" role="presentation">
        <path className="cb-triangle-line" d="M360 78 L110 454 L610 454 Z" />
      </svg>
      {triangleNodes.map((node, idx) => (
        <div className={`cb-triangle-node ${node.className}`} key={node.label} style={{ "--i": idx } as CSSProperties}>
          {node.label}
        </div>
      ))}
      <div className="cb-slogan-box">单独讲护城河，很容易变成口号</div>
    </div>
  );
}

export default function CircleBusiness({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <section className="cb-scene cb-source">
        <div className="cb-source-copy">
          <div className="kicker">UNDERSTANDING IS BUILT</div>
          <h1>看懂一个生意</h1>
          <p>不是临时刷资料，而是把经验、体验、行业和验证叠起来。</p>
        </div>
        <SourceStack />
      </section>
    );
  }

  if (step === 1) {
    return (
      <section className="cb-scene cb-questions">
        <div className="cb-question-copy">
          <div className="kicker">THREE QUESTIONS</div>
          <h2>别把故事当事实</h2>
        </div>
        <QuestionCards />
      </section>
    );
  }

  if (step === 2) {
    return (
      <section className="cb-scene cb-stress">
        <div className="cb-stress-copy">
          <div className="kicker">HALF PRICE TEST</div>
          <h2>跌一半之后</h2>
          <p>真正的理解，要经得起报价一起拷问。</p>
        </div>
        <HalfPriceTest />
      </section>
    );
  }

  if (step === 3) {
    return (
      <section className="cb-scene cb-no-prove">
        <div className="cb-answer-sheet" aria-hidden="true">
          {questions.map((item, idx) => (
            <div className="cb-answer-line" key={item} style={{ "--i": idx } as CSSProperties}>
              <span>{item}</span>
              <i />
            </div>
          ))}
        </div>
        <div className="cb-no-prove-copy">
          <div className="kicker">WHEN ANSWERS ARE EMPTY</div>
          <h2>别急着证明自己</h2>
          <strong className="hero-num">不做</strong>
          <p>也是投资能力的一部分。</p>
        </div>
      </section>
    );
  }

  if (step === 4) {
    return (
      <section className="cb-scene cb-triangle">
        <div className="cb-triangle-copy">
          <div className="kicker">GOOD COMPANY MODEL</div>
          <h2>不只谈护城河</h2>
        </div>
        <TriangleModel />
      </section>
    );
  }

  return null;
}
