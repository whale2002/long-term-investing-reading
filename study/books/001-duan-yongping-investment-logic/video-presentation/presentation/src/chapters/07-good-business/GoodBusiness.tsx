import type { CSSProperties } from "react";
import type { ChapterStepProps } from "../../registry/types";
import "./GoodBusiness.css";

const revenueYears = ["Y1", "Y3", "Y5", "Y10"];
const paymentLoops = ["第一次买", "继续用", "再付费"];
const disciplineCards = [
  { title: "差异", text: "产品或服务有理由被选择" },
  { title: "分配", text: "赚到的钱要会处理" },
  { title: "文化", text: "不能把好生意毁掉" },
];
const moatResults = ["现金流更稳", "定价权更强", "犯错概率更低", "生命周期更长"];
const connectNodes = ["生意", "现金流", "文化"];

function ProfitRunway() {
  return (
    <div className="gb-runway" aria-hidden="true">
      <svg viewBox="0 0 820 380" role="presentation">
        <path className="gb-runway-grid" d="M60 70 H780 M60 150 H780 M60 230 H780 M60 310 H780" />
        <path className="gb-profit-line" d="M62 302 C178 278 230 244 334 222 C462 194 526 150 622 128 C692 112 742 92 780 74" />
      </svg>
      <div className="gb-years">
        {revenueYears.map((year, idx) => (
          <span key={year} style={{ "--i": idx } as CSSProperties}>
            {year}
          </span>
        ))}
      </div>
      <div className="gb-weak-deps">
        <span>少靠刺激</span>
        <span>少靠杠杆</span>
      </div>
    </div>
  );
}

function PaymentLoop() {
  return (
    <div className="gb-payment-loop" aria-hidden="true">
      {paymentLoops.map((item, idx) => (
        <div className="gb-payment-node" key={item} style={{ "--i": idx } as CSSProperties}>
          <span>{item}</span>
          {idx < paymentLoops.length - 1 ? <i /> : null}
        </div>
      ))}
      <div className="gb-loop-return">客户愿意回来</div>
    </div>
  );
}

function DisciplineCards() {
  return (
    <div className="gb-discipline-cards" aria-hidden="true">
      {disciplineCards.map((card, idx) => (
        <div className="gb-discipline-card" key={card.title} style={{ "--i": idx } as CSSProperties}>
          <strong>{card.title}</strong>
          <span>{card.text}</span>
        </div>
      ))}
    </div>
  );
}

function MoatDashboard() {
  return (
    <div className="gb-moat-dashboard" aria-hidden="true">
      {moatResults.map((item, idx) => (
        <div className="gb-moat-row" key={item} style={{ "--i": idx } as CSSProperties}>
          <span>{item}</span>
          <i />
        </div>
      ))}
    </div>
  );
}

function ConnectedModel() {
  return (
    <div className="gb-connect" aria-hidden="true">
      <svg viewBox="0 0 780 480" role="presentation">
        <path className="gb-connect-line gb-connect-line-a" d="M162 156 C270 82 430 82 540 156" />
        <path className="gb-connect-line gb-connect-line-b" d="M540 190 C536 312 418 392 278 364" />
        <path className="gb-connect-line gb-connect-line-c" d="M256 344 C146 292 114 226 144 172" />
      </svg>
      {connectNodes.map((node, idx) => (
        <div className={`gb-connect-node gb-connect-node-${idx}`} key={node} style={{ "--i": idx } as CSSProperties}>
          {node}
        </div>
      ))}
      <div className="gb-set-down">连不起来，就先放下</div>
    </div>
  );
}

export default function GoodBusiness({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <section className="gb-scene gb-profit">
        <div className="gb-profit-copy">
          <div className="kicker">GOOD BUSINESS · LONG RUNWAY</div>
          <h1>长期赚钱</h1>
          <p>好生意不应该太依赖短期刺激，也不应该靠高杠杆撑出来。</p>
        </div>
        <ProfitRunway />
      </section>
    );
  }

  if (step === 1) {
    return (
      <section className="gb-scene gb-customer">
        <div className="gb-customer-copy">
          <div className="kicker">CUSTOMER BEHAVIOR</div>
          <h2>持续付费</h2>
          <p>客户愿意一再回来，现金流才有持续性的地基。</p>
        </div>
        <PaymentLoop />
      </section>
    );
  }

  if (step === 2) {
    return (
      <section className="gb-scene gb-discipline">
        <div className="gb-discipline-copy">
          <div className="kicker">AFTER EARNING MONEY</div>
          <h2>赚钱之后</h2>
        </div>
        <DisciplineCards />
      </section>
    );
  }

  if (step === 3) {
    return (
      <section className="gb-scene gb-moat">
        <div className="gb-moat-copy">
          <div className="kicker">MOAT MUST SHOW RESULTS</div>
          <h2>护城河要落到结果</h2>
        </div>
        <MoatDashboard />
      </section>
    );
  }

  if (step === 4) {
    return (
      <section className="gb-scene gb-connect-scene">
        <div className="gb-connect-copy">
          <div className="kicker">CONNECT THE MODEL</div>
          <h2>别只找漂亮词</h2>
        </div>
        <ConnectedModel />
      </section>
    );
  }

  return null;
}
