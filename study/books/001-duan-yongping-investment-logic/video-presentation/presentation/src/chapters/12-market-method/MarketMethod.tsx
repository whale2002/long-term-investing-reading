import type { CSSProperties } from "react";
import { MaskReveal } from "../../components/MaskReveal";
import type { ChapterStepProps } from "../../registry/types";
import "./MarketMethod.css";

const traps = ["衍生品", "套利", "聪明感", "越界"];
const systemNodes = ["原则", "公司", "现金流"];
const caseNames = ["茅台", "网易", "苹果"];

function MarketWaves() {
  return (
    <svg className="mm-market-waves" viewBox="0 0 880 360" role="presentation" aria-hidden="true">
      <path d="M28 212 C126 54 212 54 308 210 S492 368 604 200 S746 44 852 154" />
      <path d="M28 266 C160 160 230 188 338 248 S540 304 632 174 S762 104 852 216" />
    </svg>
  );
}

function TrapBoard() {
  return (
    <div className="mm-trap-board" aria-hidden="true">
      {traps.map((trap, index) => (
        <div className="mm-trap-card" key={trap} style={{ "--i": index } as CSSProperties}>
          <span>{trap}</span>
          <i />
        </div>
      ))}
    </div>
  );
}

export default function MarketMethod({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <section className="mm-scene mm-bullbear">
        <div className="mm-market-copy">
          <div className="mm-kicker">MARKET REGIME</div>
          <h1>
            <MaskReveal show duration={1200}>
              <span>牛熊要尊重</span>
            </MaskReveal>
            <MaskReveal show delay={320} duration={1200}>
              <span className="mm-accent">但不能替你判断</span>
            </MaskReveal>
          </h1>
        </div>
        <div className="mm-bullbear-stage" aria-hidden="true">
          <div className="mm-mood mm-mood-left">牛</div>
          <div className="mm-company-column">
            <span>公司判断</span>
            <strong>生意 / 现金流</strong>
          </div>
          <div className="mm-mood mm-mood-right">熊</div>
          <MarketWaves />
        </div>
      </section>
    );
  }

  if (step === 1) {
    return (
      <section className="mm-scene mm-trap-view">
        <div className="mm-trap-copy">
          <div className="mm-kicker">SMART TRAP</div>
          <h2>看起来很聪明</h2>
          <p>一旦超出能力圈，它们会把你带到不懂的地方。</p>
        </div>
        <TrapBoard />
        <div className="mm-boundary-gate" aria-hidden="true">
          <span>能力圈边界</span>
          <i />
        </div>
      </section>
    );
  }

  if (step === 2) {
    return (
      <section className="mm-scene mm-calm-view">
        <div className="mm-system">
          {systemNodes.map((node, index) => (
            <div className="mm-system-node" key={node} style={{ "--i": index } as CSSProperties}>
              {node}
            </div>
          ))}
          <svg className="mm-system-lines" viewBox="0 0 720 420" role="presentation" aria-hidden="true">
            <path d="M180 210 L360 210 L540 210" />
            <circle cx="360" cy="210" r="188" />
          </svg>
        </div>
        <div className="mm-calm-copy">
          <div className="mm-kicker">CALM MIND</div>
          <h2>平常心不是装淡定</h2>
          <p>是你的投资体系，能让你不被市场牵着走。</p>
        </div>
      </section>
    );
  }

  if (step === 3) {
    return (
      <section className="mm-scene mm-decision-view">
        <div className="mm-environment-panel">
          <div className="mm-kicker">ENVIRONMENT</div>
          <h2>环境可以理解</h2>
          <div className="mm-weather-strip" aria-hidden="true">
            <span>宏观</span>
            <span>行情</span>
            <span>情绪</span>
          </div>
        </div>
        <div className="mm-decision-panel">
          <div className="mm-kicker">JUDGMENT</div>
          <h2>判断回到公司</h2>
          <div className="mm-cashflow-bridge" aria-hidden="true">
            <span>公司</span>
            <i />
            <span>现金流</span>
          </div>
        </div>
      </section>
    );
  }

  if (step === 4) {
    return (
      <section className="mm-scene mm-case-bridge">
        <div className="mm-case-copy">
          <div className="mm-kicker">THREE CASES</div>
          <h2>看案例，不是照着买</h2>
          <p>重点是看他怎样判断自己懂。</p>
        </div>
        <div className="mm-case-signs" aria-hidden="true">
          {caseNames.map((name, index) => (
            <div className="mm-case-sign" key={name} style={{ "--i": index } as CSSProperties}>
              <span>{name}</span>
              <small>case study</small>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return null;
}
