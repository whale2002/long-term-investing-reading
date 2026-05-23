import type { CSSProperties } from "react";
import { MaskReveal } from "../../components/MaskReveal";
import type { ChapterStepProps } from "../../registry/types";
import "./ProfitAbove.css";

const resultInputs = ["消费者需求", "长期信誉", "正确原则"];
const notCharity = ["要赚钱", "要健康", "要长期持续"];
const decisionOrder = ["这是不是对的事情？", "有没有钱赚？"];

function seq(index: number): CSSProperties {
  return { "--i": index } as CSSProperties;
}

function SmallRules() {
  return (
    <div className="pa-rules" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  );
}

export default function ProfitAboveChapter({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <div className="pa-scene scene-pad pa-step-machine">
        <SmallRules />
        <div className="pa-machine-copy">
          <div className="kicker">great company</div>
          <h2>
            <MaskReveal show duration={950}>
              <span>不是</span>
            </MaskReveal>
            <MaskReveal show delay={220} duration={950}>
              <em>利润最大化机器</em>
            </MaskReveal>
          </h2>
        </div>
        <div className="pa-machine card">
          <span className="label-mono">wrong lens</span>
          <strong>profit max</strong>
          <i aria-hidden="true" />
        </div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="pa-scene scene-pad pa-step-result">
        <div className="pa-result-title">
          <div className="kicker">result, not target</div>
          <h2>利润很重要</h2>
          <p>但它应该是水到渠成的结果，不是唯一目标。</p>
        </div>
        <div className="pa-result-flow" aria-label="利润作为结果的来源">
          {resultInputs.map((item, index) => (
            <div className="pa-input-card card" style={seq(index)} key={item}>
              {item}
            </div>
          ))}
          <div className="pa-output-card card">
            <span className="label-mono">outcome</span>
            <strong>利润</strong>
          </div>
          <svg viewBox="0 0 1180 360" aria-hidden="true">
            <path d="M110 180 C270 60 430 60 590 180 S900 300 1070 180" />
          </svg>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="pa-scene scene-pad pa-step-clarify">
        <SmallRules />
        <div className="pa-clarify-left">
          <div className="kicker">clarification</div>
          <h2>
            <span>不是</span>
            <em>不要利润</em>
          </h2>
        </div>
        <div className="pa-health-board">
          {notCharity.map((item, index) => (
            <div className="pa-health-row" style={seq(index)} key={item}>
              <span className="hero-num">0{index + 1}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
        <p className="pa-clarify-note">企业不赚钱，本身也不健康。</p>
      </div>
    );
  }

  if (step === 3) {
    return (
      <div className="pa-scene scene-pad pa-step-decision">
        <div className="pa-decision-title">
          <div className="kicker">critical choice</div>
          <h2>关键选择时</h2>
        </div>
        <div className="pa-decision-stack">
          {decisionOrder.map((item, index) => (
            <div className={`pa-decision-card pa-decision-${index + 1} card`} key={item}>
              <span className="label-mono">{index === 0 ? "ask first" : "ask later"}</span>
              <strong>{item}</strong>
            </div>
          ))}
          <div className="pa-decision-arrow" aria-hidden="true" />
        </div>
      </div>
    );
  }

  return (
    <div className="pa-scene scene-pad pa-step-fork">
      <div className="pa-fork-heading">
        <div className="kicker">two paths</div>
        <h2>两种追求</h2>
      </div>
      <div className="pa-fork-grid">
        <div className="pa-path pa-path-above card">
          <span className="label-mono">利润之上</span>
          <strong>消费者需求</strong>
          <strong>长期信誉</strong>
          <strong>正确原则</strong>
        </div>
        <div className="pa-path pa-path-only card">
          <span className="label-mono">利润至上</span>
          <strong>短期利润</strong>
          <strong>牺牲产品</strong>
          <strong>牺牲信誉</strong>
        </div>
      </div>
      <svg className="pa-fork-line" viewBox="0 0 1320 180" aria-hidden="true">
        <path className="pa-fork-good" d="M40 136 C260 34 430 34 660 94 S1040 164 1280 50" />
        <path className="pa-fork-bad" d="M40 50 C300 118 466 152 660 118 S984 48 1280 136" />
      </svg>
    </div>
  );
}
