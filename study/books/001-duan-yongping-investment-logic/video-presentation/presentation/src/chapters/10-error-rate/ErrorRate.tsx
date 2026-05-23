import { MaskReveal } from "../../components/MaskReveal";
import type { ChapterStepProps } from "../../registry/types";
import "./ErrorRate.css";

const avoidItems = ["一次赚钱 ≠ 懂了", "不追每次机会", "不让冒险毁掉积累"];
const systemStates = ["睡得着", "拿得住", "错得起"];
const scoreRows = ["稳", "稳", "稳", "少错", "稳", "避开大错"];

function GolfPath() {
  return (
    <svg className="er-golf-path" viewBox="0 0 700 360" role="presentation">
      <path className="er-fairway" d="M58 302 C128 180 230 122 354 158 C500 202 566 112 646 48" />
      <path className="er-shot-line" d="M58 302 C128 180 230 122 354 158 C500 202 566 112 646 48" />
      <circle className="er-ball" cx="58" cy="302" r="14" />
      <circle className="er-hole" cx="646" cy="48" r="20" />
    </svg>
  );
}

function Scorecard() {
  return (
    <div className="er-scorecard" aria-hidden="true">
      {scoreRows.map((label, idx) => (
        <div className="er-score-row" key={`${label}-${idx}`} style={{ "--i": idx } as React.CSSProperties}>
          <span>{idx + 1}</span>
          <strong>{label}</strong>
          <i />
        </div>
      ))}
    </div>
  );
}

export default function ErrorRate({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <section className="er-scene er-opening">
        <div className="er-opening-copy">
          <div className="er-kicker">GOLF · INVESTING</div>
          <h1>
            <MaskReveal show duration={1100}>
              <span>目标不是复杂</span>
            </MaskReveal>
          </h1>
          <p>财务分析是为了看清真实利润、现金流、负债和资本配置。</p>
        </div>
        <div className="er-four-grid">
          {["真实利润", "现金流", "负债", "资本配置"].map((label, idx) => (
            <span key={label} style={{ "--i": idx } as React.CSSProperties}>{label}</span>
          ))}
        </div>
      </section>
    );
  }

  if (step === 1) {
    return (
      <section className="er-scene er-golf">
        <div className="er-golf-copy">
          <div className="er-kicker">ONE STROKE AT A TIME</div>
          <h2>高尔夫和投资</h2>
          <p>长期成绩不是靠神奇一杆，而是靠一杆一杆少犯错。</p>
        </div>
        <div className="er-golf-stage">
          <GolfPath />
          <Scorecard />
        </div>
      </section>
    );
  }

  if (step === 2) {
    return (
      <section className="er-scene er-avoid">
        <div className="er-avoid-head">
          <div className="er-kicker">THREE TRAPS</div>
          <h2>别把侥幸当能力</h2>
        </div>
        <div className="er-avoid-stack" aria-hidden="true">
          {avoidItems.map((label, idx) => (
            <div className="er-avoid-card" key={label} style={{ "--i": idx } as React.CSSProperties}>
              <span className="er-avoid-index">0{idx + 1}</span>
              <strong>{label}</strong>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (step === 3) {
    return (
      <section className="er-scene er-system">
        <div className="er-system-copy">
          <div className="er-kicker">A SYSTEM YOU CAN LIVE WITH</div>
          <h2>好体系要让人稳得住</h2>
        </div>
        <div className="er-state-board">
          {systemStates.map((label, idx) => (
            <div className="er-state-row" key={label} style={{ "--i": idx } as React.CSSProperties}>
              <span>{label}</span>
              <i />
            </div>
          ))}
        </div>
        <div className="er-quote-strip">
          不会因为一两天报价，就把系统全推翻
        </div>
      </section>
    );
  }

  if (step === 4) {
    return (
      <section className="er-scene er-final">
        <div className="er-final-copy">
          <div className="er-kicker">LOW ERROR RATE</div>
          <h2>敌人不是慢</h2>
          <p>真正要避开的，是一次错误把长期积累清零。</p>
        </div>
        <div className="er-accumulation" aria-hidden="true">
          {Array.from({ length: 11 }).map((_, idx) => (
            <i key={idx} style={{ "--i": idx } as React.CSSProperties} />
          ))}
          <div className="er-clear-line" />
        </div>
      </section>
    );
  }

  return null;
}
