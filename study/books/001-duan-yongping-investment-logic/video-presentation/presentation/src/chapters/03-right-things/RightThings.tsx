import type { CSSProperties } from "react";
import type { ChapterStepProps } from "../../registry/types";
import "./RightThings.css";

const directionItems = ["买公司", "看现金流"];
const boundaryItems = ["能力圈", "避开杠杆", "避开做空"];
const executionItems = ["商业模式", "护城河", "管理层", "机会成本"];

function FallingQuote() {
  return (
    <div className="rt-falling-quote" aria-hidden="true">
      <svg viewBox="0 0 820 360" role="presentation">
        <path className="rt-grid" d="M24 88H796M24 180H796M24 272H796" />
        <path className="rt-fall-path" d="M34 84 C128 78 176 128 236 122 S350 82 410 156 S526 260 610 250 S710 290 788 304" />
        <circle cx="610" cy="250" r="12" />
      </svg>
      <div className="rt-buy-because">跌很多</div>
      <div className="rt-not-investing">理由不足</div>
    </div>
  );
}

export default function RightThings({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <section className="rt-scene rt-drop">
        <div className="rt-drop-copy">
          <div className="kicker">NOT A THESIS</div>
          <h1>跌很多，不等于会买</h1>
          <p>如果唯一理由只是报价掉下来，它大概率还不是投资判断。</p>
        </div>
        <FallingQuote />
      </section>
    );
  }

  if (step === 1) {
    return (
      <section className="rt-scene rt-order">
        <div className="rt-order-title">
          <div className="kicker">ORDER MATTERS</div>
          <h2>两个顺序不能反</h2>
        </div>
        <div className="rt-order-stack" aria-hidden="true">
          <div className="rt-order-card rt-order-card-primary">
            <span className="hero-num">01</span>
            <strong>做对的事情</strong>
          </div>
          <div className="rt-order-line" />
          <div className="rt-order-card">
            <span className="hero-num">02</span>
            <strong>把事情做对</strong>
          </div>
        </div>
      </section>
    );
  }

  if (step === 2) {
    return (
      <section className="rt-scene rt-direction">
        <div className="rt-compass" aria-hidden="true">
          <svg viewBox="0 0 520 520" role="presentation">
            <circle cx="260" cy="260" r="198" />
            <path className="rt-needle" d="M260 76L306 260L260 444L214 260Z" />
            <circle cx="260" cy="260" r="22" />
          </svg>
        </div>
        <div className="rt-direction-copy">
          <div className="kicker">RIGHT THINGS</div>
          <h2>先选方向</h2>
          <div className="rt-direction-items">
            {directionItems.map((item, index) => (
              <span key={item} style={{ "--i": index } as CSSProperties}>{item}</span>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (step === 3) {
    return (
      <section className="rt-scene rt-boundary">
        <div className="rt-boundary-copy">
          <div className="kicker">BOUNDARY</div>
          <h2>先别越界</h2>
          <p>方向正确，还包括承认边界，把会放大错误的东西挡在外面。</p>
        </div>
        <div className="rt-boundary-ring" aria-hidden="true">
          {boundaryItems.map((item, index) => (
            <div className="rt-boundary-chip" key={item} style={{ "--i": index } as CSSProperties}>
              {item}
            </div>
          ))}
          <div className="rt-ring-core">不懂不碰</div>
        </div>
      </section>
    );
  }

  if (step === 4) {
    return (
      <section className="rt-scene rt-execution">
        <div className="rt-execution-copy">
          <div className="kicker">AFTER DIRECTION</div>
          <h2>再把事情做对</h2>
        </div>
        <div className="rt-blueprint" aria-hidden="true">
          {executionItems.map((item, index) => (
            <div className="rt-blueprint-row" key={item} style={{ "--i": index } as CSSProperties}>
              <span>{item}</span>
              <i />
            </div>
          ))}
          <div className="rt-blueprint-axis" />
        </div>
      </section>
    );
  }

  return null;
}
