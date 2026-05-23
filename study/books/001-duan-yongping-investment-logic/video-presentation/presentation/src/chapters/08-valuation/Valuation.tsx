import { MaskReveal } from "../../components/MaskReveal";
import type { ChapterStepProps } from "../../registry/types";
import "./Valuation.css";

const questionChain = [
  "钱从哪里来",
  "能持续多久",
  "需要多少投入",
  "怎样回到股东",
];

const toolLabels = ["PE", "PB", "增长率", "安全边际"];

function CashflowArc() {
  return (
    <svg className="vl-cashflow-arc" viewBox="0 0 760 300" role="presentation">
      <path className="vl-arc-baseline" d="M40 236 C180 120 300 122 420 164 S620 250 720 76" />
      <path className="vl-arc-draw" d="M40 236 C180 120 300 122 420 164 S620 250 720 76" />
      {[96, 210, 326, 452, 580, 700].map((x, idx) => (
        <g className="vl-flow-dot" key={x} style={{ "--i": idx } as React.CSSProperties}>
          <line x1={x} y1="246" x2={x} y2={150 - idx * 10} />
          <circle cx={x} cy={150 - idx * 10} r="13" />
        </g>
      ))}
    </svg>
  );
}

function QuestionChain() {
  return (
    <div className="vl-chain" aria-hidden="true">
      {questionChain.map((label, idx) => (
        <div className="vl-chain-node" key={label} style={{ "--i": idx } as React.CSSProperties}>
          <span className="vl-chain-index">0{idx + 1}</span>
          <strong>{label}</strong>
          {idx < questionChain.length - 1 ? <i /> : null}
        </div>
      ))}
    </div>
  );
}

function ToolDrawer() {
  return (
    <div className="vl-tool-drawer" aria-hidden="true">
      {toolLabels.map((label, idx) => (
        <div className="vl-tool" key={label} style={{ "--i": idx } as React.CSSProperties}>
          <span>{label}</span>
          <i />
        </div>
      ))}
    </div>
  );
}

export default function Valuation({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <section className="vl-scene vl-opening">
        <div className="vl-opening-copy">
          <div className="vl-kicker">VALUATION · NOT A MAGIC NUMBER</div>
          <h1>
            <MaskReveal show duration={1200}>
              <span>估值不是</span>
            </MaskReveal>
            <MaskReveal show delay={300} duration={1200}>
              <span className="vl-accent">神奇数字</span>
            </MaskReveal>
          </h1>
          <p>未来现金流折现，是一种追问方式。</p>
        </div>
        <div className="vl-formula-card" aria-hidden="true">
          <div className="vl-formula-line">DCF</div>
          <div className="vl-formula-mark hero-num">?</div>
          <div className="vl-formula-foot">把钱从哪里来想清楚</div>
        </div>
        <CashflowArc />
      </section>
    );
  }

  if (step === 1) {
    return (
      <section className="vl-scene vl-chain-scene">
        <div className="vl-side-title">
          <div className="vl-kicker">ASK BEFORE CALCULATE</div>
          <h2>公式不是重点</h2>
          <p>真正要追的是持续性、资本投入、现金怎样回到股东手里。</p>
        </div>
        <QuestionChain />
      </section>
    );
  }

  if (step === 2) {
    return (
      <section className="vl-scene vl-tools-scene">
        <div className="vl-tools-head">
          <div className="vl-kicker">TOOLS ARE NOT REASONS</div>
          <h2>指标只是工具</h2>
        </div>
        <ToolDrawer />
        <div className="vl-tool-verdict">
          <span>单独拿出来</span>
          <strong>不能成为理由</strong>
        </div>
        <div className="vl-tool-use">
          用来理解现金流和机会成本
        </div>
      </section>
    );
  }

  if (step === 3) {
    return (
      <section className="vl-scene vl-range-scene">
        <div className="vl-range-copy">
          <div className="vl-kicker">ROUGH RANGE AFTER UNDERSTANDING</div>
          <h2>毛估估</h2>
          <p>不是随便估，而是在看懂生意之后，判断大致区间。</p>
        </div>
        <div className="vl-range-board" aria-hidden="true">
          <div className="vl-ruler">
            {["太贵", "大致区间", "机会成本"].map((label, idx) => (
              <span key={label} style={{ "--i": idx } as React.CSSProperties}>{label}</span>
            ))}
            <i className="vl-range-band" />
          </div>
          <div className="vl-decimals">
            <span>0.01</span>
            <span>0.001</span>
            <span>0.0001</span>
          </div>
        </div>
      </section>
    );
  }

  if (step === 4) {
    return (
      <section className="vl-scene vl-final">
        <div className="vl-fast-panel">
          <div className="vl-kicker">FAST</div>
          <h2>公式很快</h2>
          <div className="vl-calculator" aria-hidden="true">
            {Array.from({ length: 12 }).map((_, idx) => (
              <i key={idx} style={{ "--i": idx } as React.CSSProperties} />
            ))}
          </div>
        </div>
        <div className="vl-slow-panel">
          <div className="vl-kicker">SLOW</div>
          <h2>理解生意很慢</h2>
          <div className="vl-business-flow" aria-hidden="true">
            {["产品", "客户", "现金", "分配"].map((label, idx) => (
              <span key={label} style={{ "--i": idx } as React.CSSProperties}>{label}</span>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return null;
}
