import type { CSSProperties } from "react";
import { MaskReveal } from "../../components/MaskReveal";
import type { ChapterStepProps } from "../../registry/types";
import "./PriceBuySell.css";

const antiReasons = ["最近跌很多", "很多人推荐", "图形好看", "PE 很低", "宏观故事顺"];
const buyReasons = ["看懂公司", "现金流有把握", "机会成本合适", "长期不开门也愿意拥有"];
const sellTriggers = [
  { title: "原判断错了", detail: "不是以为的公司" },
  { title: "公司变了", detail: "生意 / 文化 / 现金流变差" },
  { title: "机会成本变了", detail: "出现更懂、更好的机会" },
];
const noiseReasons = ["短期恐慌", "别人观点变了"];

function styleIndex(index: number): CSSProperties {
  return { "--i": index } as CSSProperties;
}

export default function PriceBuySell({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <section className="pb-scene pb-price-margin">
        <div className="pb-price-copy">
          <div className="kicker">THIRD MARGIN</div>
          <h1>
            <MaskReveal show duration={1200}>
              <span>价格边际</span>
            </MaskReveal>
          </h1>
          <p>价格要同时面对未来现金流，也面对别的机会。</p>
        </div>
        <div className="pb-margin-board" aria-hidden="true">
          <div className="pb-cashflow-stack">
            <span>未来现金流</span>
            {Array.from({ length: 5 }).map((_, index) => (
              <i key={index} style={styleIndex(index)} />
            ))}
          </div>
          <div className="pb-price-tag">
            <span>当前价格</span>
            <strong className="hero-num">?</strong>
          </div>
          <div className="pb-opportunity-line">
            <span>机会成本</span>
            <i />
          </div>
        </div>
        <div className="pb-warning">只便宜但不懂，不安全。</div>
      </section>
    );
  }

  if (step === 1) {
    return (
      <section className="pb-scene pb-no-buy">
        <div className="pb-no-buy-header">
          <div className="kicker">REVERSE BUY LIST</div>
          <h2>先排除这些买入理由</h2>
        </div>
        <div className="pb-reject-wall" aria-label="不构成买入理由">
          {antiReasons.map((reason, index) => (
            <div className="pb-reject-ticket" key={reason} style={styleIndex(index)}>
              <span>NO {index + 1}</span>
              <strong>{reason}</strong>
              <i />
            </div>
          ))}
        </div>
        <div className="pb-reject-ruler" aria-hidden="true">
          <span />
        </div>
      </section>
    );
  }

  if (step === 2) {
    return (
      <section className="pb-scene pb-buy">
        <div className="pb-contract">
          <div className="pb-contract-title">
            <div className="kicker">OWNERSHIP CONTRACT</div>
            <h2>买入理由要能写下来</h2>
          </div>
          <div className="pb-contract-grid">
            {buyReasons.map((reason, index) => (
              <div className="pb-buy-seal" key={reason} style={styleIndex(index)}>
                <span>0{index + 1}</span>
                <strong>{reason}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="pb-market-closed" aria-hidden="true">
          <div className="pb-door">
            <span>MARKET CLOSED</span>
            <i />
          </div>
          <p>仍愿意拥有这家公司</p>
        </div>
      </section>
    );
  }

  if (step === 3) {
    return (
      <section className="pb-scene pb-sell-map">
        <div className="pb-sell-copy">
          <div className="kicker">SELLING LOGIC</div>
          <h2>卖出不是因为波动</h2>
          <p>真正触发卖出的是事实变化，不是屏幕上的晃动。</p>
        </div>
        <div className="pb-trigger-board" aria-hidden="true">
          <svg viewBox="0 0 940 420" role="presentation">
            <path d="M70 210 H300 C390 210 390 80 500 80 H870" />
            <path d="M300 210 C390 210 390 210 500 210 H870" />
            <path d="M300 210 C390 210 390 340 500 340 H870" />
          </svg>
          {sellTriggers.map((item, index) => (
            <div className="pb-trigger-card" key={item.title} style={styleIndex(index)}>
              <span>变化 0{index + 1}</span>
              <strong>{item.title}</strong>
              <em>{item.detail}</em>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (step === 4) {
    return (
      <section className="pb-scene pb-anchor">
        <div className="pb-noise-zone" aria-hidden="true">
          {noiseReasons.map((reason, index) => (
            <div className="pb-noise-card" key={reason} style={styleIndex(index)}>
              {reason}
            </div>
          ))}
        </div>
        <div className="pb-anchor-core">
          <div className="kicker">FINAL CHECK</div>
          <h2>还是回到</h2>
          <div className="pb-anchor-words">
            <span>公司</span>
            <i />
            <span>现金流</span>
          </div>
        </div>
        <svg className="pb-anchor-ring" viewBox="0 0 760 760" aria-hidden="true">
          <circle cx="380" cy="380" r="278" />
          <circle cx="380" cy="380" r="180" />
        </svg>
      </section>
    );
  }

  return null;
}
