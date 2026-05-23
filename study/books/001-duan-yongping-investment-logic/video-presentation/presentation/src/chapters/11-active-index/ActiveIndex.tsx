import type { CSSProperties } from "react";
import { MaskReveal } from "../../components/MaskReveal";
import type { ChapterStepProps } from "../../registry/types";
import "./ActiveIndex.css";

const requirements = ["看懂公司", "承受波动", "独立判断", "知道不动", "抵抗诱惑"];
const basketCells = Array.from({ length: 36 }, (_, index) => index);
const boundaryWords = [
  { label: "消息", x: 0, y: 0 },
  { label: "跟风", x: 1, y: 1 },
  { label: "短线", x: 2, y: 2 },
  { label: "热闹", x: 3, y: 0 },
  { label: "推荐", x: 4, y: 1 },
  { label: "预测", x: 5, y: 2 },
];
const macroTerms = ["宏观", "周期", "利率", "情绪"];

function RequirementStack() {
  return (
    <div className="ai-requirement-stack" aria-hidden="true">
      {requirements.map((item, index) => (
        <div
          className="ai-requirement"
          key={item}
          style={{ "--i": index } as CSSProperties}
        >
          <span>{item}</span>
          <i />
        </div>
      ))}
    </div>
  );
}

function IndexBasket() {
  return (
    <div className="ai-index-basket" aria-hidden="true">
      {basketCells.map((cell) => (
        <span key={cell} style={{ "--i": cell } as CSSProperties} />
      ))}
    </div>
  );
}

function BoundaryCloud() {
  return (
    <div className="ai-boundary-cloud" aria-hidden="true">
      {boundaryWords.map((word, index) => (
        <span
          key={word.label}
          style={{ "--i": index, "--x": word.x, "--y": word.y } as CSSProperties}
        >
          {word.label}
        </span>
      ))}
    </div>
  );
}

export default function ActiveIndex({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <section className="ai-scene ai-threshold">
        <div className="ai-threshold-copy">
          <div className="ai-kicker">ACTIVE INVESTING · THRESHOLD</div>
          <h1>
            <MaskReveal show duration={1200}>
              <span>普通人</span>
            </MaskReveal>
            <MaskReveal show delay={300} duration={1200}>
              <span className="ai-accent">不一定适合</span>
            </MaskReveal>
            <MaskReveal show delay={560} duration={1200}>
              <span>直接买股票</span>
            </MaskReveal>
          </h1>
          <p>这不是打击人，是尊重主动投资的难度。</p>
        </div>
        <div className="ai-threshold-stage" aria-hidden="true">
          <div className="ai-small-investor">普通投资者</div>
          <div className="ai-gate">
            <span>主动选股</span>
            <strong className="hero-num ai-gate-num">11</strong>
          </div>
          <svg className="ai-threshold-lines" viewBox="0 0 640 420" role="presentation">
            <path d="M42 340 C160 230 244 208 330 208 C430 208 492 156 596 58" />
            <path d="M64 350 L596 350" />
          </svg>
        </div>
      </section>
    );
  }

  if (step === 1) {
    return (
      <section className="ai-scene ai-requirements-view">
        <div className="ai-left-title">
          <div className="ai-kicker">FIVE REQUIREMENTS</div>
          <h2>主动投资要求很高</h2>
          <p>不是会点开行情软件，而是要同时通过几道门槛。</p>
        </div>
        <RequirementStack />
        <div className="ai-meter" aria-hidden="true">
          <div className="ai-meter-rail">
            <i />
          </div>
          <span>门槛不是一项，是一组。</span>
        </div>
      </section>
    );
  }

  if (step === 2) {
    return (
      <section className="ai-scene ai-index-choice">
        <div className="ai-index-panel">
          <IndexBasket />
          <div className="ai-basket-label">一篮子公司</div>
        </div>
        <div className="ai-index-copy">
          <div className="ai-kicker">HONEST OPTION</div>
          <h2>指数基金可能更诚实</h2>
          <p>尤其是你承认自己看不懂的时候。</p>
          <div className="ai-stamp">不是退步</div>
        </div>
      </section>
    );
  }

  if (step === 3) {
    return (
      <section className="ai-scene ai-boundary-view">
        <BoundaryCloud />
        <div className="ai-circle">
          <div className="ai-circle-ring" />
          <div className="ai-circle-core">
            <span>能力圈</span>
            <strong>知道边界</strong>
          </div>
        </div>
        <div className="ai-boundary-note">
          <h2>承认不适合主动选股，本身也是能力圈。</h2>
          <p>边界清楚，无效动作就会少很多。</p>
        </div>
      </section>
    );
  }

  if (step === 4) {
    return (
      <section className="ai-scene ai-macro-view">
        <div className="ai-macro-board" aria-hidden="true">
          {macroTerms.map((term, index) => (
            <div className="ai-macro-card" key={term} style={{ "--i": index } as CSSProperties}>
              <span>{term}</span>
              <i />
            </div>
          ))}
          <svg className="ai-forecast-line" viewBox="0 0 820 300" role="presentation">
            <path d="M28 230 C146 130 242 152 344 176 C478 208 570 88 790 56" />
            <path d="M28 230 C156 114 290 86 418 92" />
          </svg>
        </div>
        <div className="ai-macro-copy">
          <div className="ai-kicker">MACRO</div>
          <h2>
            <span>宏观要理解</span>
            <strong>别沉迷短期预测</strong>
          </h2>
        </div>
      </section>
    );
  }

  return null;
}
