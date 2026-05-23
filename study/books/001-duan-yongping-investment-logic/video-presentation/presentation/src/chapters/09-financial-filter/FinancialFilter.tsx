import { MaskReveal } from "../../components/MaskReveal";
import type { ChapterStepProps } from "../../registry/types";
import "./FinancialFilter.css";

const firstFilters = [
  ["负债", "是否危险"],
  ["净现金", "是否真实"],
  ["利润 / 现金流", "能否对上"],
];

const hiddenRisks = ["开销", "利润质量", "商誉", "应收", "存货"];

const finalChecks = ["真实利润", "现金流", "负债", "资本配置"];

function FilterGlyph() {
  return (
    <svg className="ff-filter-glyph" viewBox="0 0 520 460" role="presentation">
      <path className="ff-filter-outline" d="M52 70 H468 L322 236 V382 L198 410 V236 Z" />
      <path className="ff-filter-fill" d="M52 70 H468 L322 236 V382 L198 410 V236 Z" />
      {[112, 176, 240, 304, 368].map((x, idx) => (
        <line className="ff-filter-line" key={x} x1={x} y1="108" x2={x + 58} y2="176" style={{ "--i": idx } as React.CSSProperties} />
      ))}
    </svg>
  );
}

function ReportPage() {
  return (
    <div className="ff-report-page" aria-hidden="true">
      {Array.from({ length: 7 }).map((_, idx) => (
        <i key={idx} style={{ "--i": idx } as React.CSSProperties} />
      ))}
    </div>
  );
}

export default function FinancialFilter({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <section className="ff-scene ff-opening">
        <div className="ff-opening-copy">
          <div className="ff-kicker">FINANCIAL STATEMENTS · FILTER</div>
          <h1>
            <MaskReveal show duration={1100}>
              <span>财报不是</span>
            </MaskReveal>
            <MaskReveal show delay={280} duration={1100}>
              <span className="ff-accent">买入理由</span>
            </MaskReveal>
          </h1>
          <p>它更像过滤器，用来排除风险，而不是制造确定性。</p>
        </div>
        <div className="ff-filter-card">
          <FilterGlyph />
          <div className="ff-filter-caption">排除明显风险</div>
        </div>
      </section>
    );
  }

  if (step === 1) {
    return (
      <section className="ff-scene ff-first-filter">
        <div className="ff-title-row">
          <div className="ff-kicker">FIRST PASS</div>
          <h2>先看会不会出事</h2>
        </div>
        <div className="ff-filter-grid">
          {firstFilters.map(([label, sub], idx) => (
            <div className="ff-filter-tile" key={label} style={{ "--i": idx } as React.CSSProperties}>
              <span>{label}</span>
              <strong>{sub}</strong>
              <i />
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (step === 2) {
    return (
      <section className="ff-scene ff-hidden-risk">
        <div className="ff-risk-copy">
          <div className="ff-kicker">SECOND PASS</div>
          <h2>麻烦常藏在细项里</h2>
          <p>开销、利润质量、商誉、应收、存货，都要用来检查结论。</p>
        </div>
        <div className="ff-risk-board">
          <ReportPage />
          <div className="ff-magnifier" aria-hidden="true" />
          <div className="ff-risk-tags" aria-hidden="true">
            {hiddenRisks.map((label, idx) => (
              <span key={label} style={{ "--i": idx } as React.CSSProperties}>{label}</span>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (step === 3) {
    return (
      <section className="ff-scene ff-signal">
        <div className="ff-signal-mark hero-num">!</div>
        <div className="ff-signal-copy">
          <div className="ff-kicker">IMPORTANT SIGNAL</div>
          <h2>更不喜欢，或者更看不懂</h2>
          <p>这不是机会提示，而是风险提示。别硬把它解释成确定性。</p>
        </div>
        <div className="ff-cross-lines" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
      </section>
    );
  }

  if (step === 4) {
    return (
      <section className="ff-scene ff-final">
        <div className="ff-final-head">
          <div className="ff-kicker">FINANCIAL ANALYSIS TARGET</div>
          <h2>目标不是复杂</h2>
        </div>
        <div className="ff-check-panel">
          {finalChecks.map((label, idx) => (
            <div className="ff-check-item" key={label} style={{ "--i": idx } as React.CSSProperties}>
              <span className="ff-check-index">0{idx + 1}</span>
              <strong>{label}</strong>
              <i />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return null;
}
