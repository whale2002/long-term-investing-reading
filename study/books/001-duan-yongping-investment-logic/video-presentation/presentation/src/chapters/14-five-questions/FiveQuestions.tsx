import type { CSSProperties } from "react";
import { MaskReveal } from "../../components/MaskReveal";
import type { ChapterStepProps } from "../../registry/types";
import "./FiveQuestions.css";

const weakSources = ["运气", "周期", "补贴", "杠杆"];
const questionLabels = ["卖什么", "为何持续买", "长期赚钱", "现金流", "价格/机会"];
const allocationLabels = ["再投入", "分红", "回购", "留存"];
const marginLayers = ["理解边际", "经营边际", "价格边际"];
const businessEdges = ["好生意", "护城河", "文化"];

function styleIndex(index: number): CSSProperties {
  return { "--i": index } as CSSProperties;
}

export default function FiveQuestions({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <section className="fq-scene fq-earnings">
        <div className="fq-left-copy">
          <div className="kicker">RESEARCH CHECKPOINT</div>
          <h1>
            <MaskReveal show duration={1200}>
              <span>长期赚钱</span>
            </MaskReveal>
            <MaskReveal show delay={240} duration={1200}>
              <span className="fq-accent">靠什么？</span>
            </MaskReveal>
          </h1>
          <p>五问框架不是问答题，它先把研究拉回商业因果。</p>
        </div>
        <div className="fq-question-machine" aria-hidden="true">
          <div className="fq-machine-core hero-num">5</div>
          {questionLabels.map((label, index) => (
            <div
              className={`fq-orbit-card fq-orbit-card-${index + 1} ${
                index === 2 ? "fq-orbit-active" : ""
              }`}
              key={label}
              style={styleIndex(index)}
            >
              <span>Q{index + 1}</span>
              <strong>{label}</strong>
            </div>
          ))}
          <svg className="fq-loop" viewBox="0 0 640 640" role="presentation">
            <circle cx="320" cy="320" r="238" />
            <path d="M143 470 C232 548 408 548 497 470" />
          </svg>
        </div>
      </section>
    );
  }

  if (step === 1) {
    return (
      <section className="fq-scene fq-source">
        <div className="fq-source-title">
          <div className="kicker">SOURCE TEST</div>
          <h2>钱从哪里来</h2>
        </div>
        <div className="fq-source-grid">
          <div className="fq-weak-stack" aria-label="需要排除的收入来源">
            {weakSources.map((label, index) => (
              <div className="fq-weak-ticket" key={label} style={styleIndex(index)}>
                {label}
              </div>
            ))}
          </div>
          <div className="fq-filter-gate" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="fq-strong-answer">
            <span>REAL EDGE</span>
            <strong>真实竞争力</strong>
            <div className="fq-cashflow-line">
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
        <p className="fq-source-note">现金流要能说清来源，也要能解释持续时间。</p>
      </section>
    );
  }

  if (step === 2) {
    return (
      <section className="fq-scene fq-capital">
        <div className="fq-capital-copy">
          <div className="kicker">CAPITAL ALLOCATION</div>
          <h2>赚到的钱，怎么处理？</h2>
          <p>管理层行为和机会成本，要一起放到桌面上比较。</p>
        </div>
        <div className="fq-desk" aria-hidden="true">
          <div className="fq-cash-sheet">
            <span className="fq-sheet-label">可分配现金</span>
            <div className="fq-cash-bars">
              {allocationLabels.map((label, index) => (
                <div className="fq-cash-bar" key={label} style={styleIndex(index)}>
                  <i />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="fq-balance">
            <div className="fq-scale-beam" />
            <div className="fq-pan fq-pan-left">当前公司</div>
            <div className="fq-pan fq-pan-right">其他机会</div>
            <div className="fq-scale-base" />
          </div>
        </div>
        <div className="fq-redline">答不清，就别急。</div>
      </section>
    );
  }

  if (step === 3) {
    return (
      <section className="fq-scene fq-margin fq-margin-understand">
        <div className="fq-margin-copy">
          <div className="kicker">MARGIN OF SAFETY</div>
          <h2>安全边际有三层</h2>
          <p>第一层不是折扣，是理解。</p>
        </div>
        <div className="fq-layer-stack" aria-hidden="true">
          {marginLayers.map((label, index) => (
            <div
              className={`fq-layer ${index === 0 ? "fq-layer-active" : ""}`}
              key={label}
              style={styleIndex(index)}
            >
              <span>0{index + 1}</span>
              <strong>{label}</strong>
            </div>
          ))}
        </div>
        <div className="fq-understand-lens">
          <span>我真的懂这个生意</span>
          <i />
        </div>
      </section>
    );
  }

  if (step === 4) {
    return (
      <section className="fq-scene fq-business-edge">
        <div className="fq-business-title">
          <div className="kicker">OPERATING MARGIN</div>
          <h2>经营边际</h2>
          <p>好生意、护城河和文化，要互相支撑。</p>
        </div>
        <div className="fq-triangle" aria-hidden="true">
          <svg viewBox="0 0 720 560" role="presentation">
            <path d="M360 72 L622 482 L98 482 Z" />
            <path d="M360 72 L360 482" />
            <path d="M98 482 L360 300 L622 482" />
          </svg>
          {businessEdges.map((label, index) => (
            <div className="fq-edge-node" key={label} style={styleIndex(index)}>
              {label}
            </div>
          ))}
        </div>
        <div className="fq-layer-caption">
          <span>第二层</span>
          <strong>公司本身不容易被破坏</strong>
        </div>
      </section>
    );
  }

  return null;
}
