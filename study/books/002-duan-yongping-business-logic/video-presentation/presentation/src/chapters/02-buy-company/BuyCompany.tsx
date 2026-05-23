import type { CSSProperties } from "react";
import { MaskReveal } from "../../components/MaskReveal";
import type { ChapterStepProps } from "../../registry/types";
import "./BuyCompany.css";

const threeQuestions = [
  "为什么长期存在？",
  "钱从哪里来？",
  "为什么抢不走？",
];

const operatingLens = ["商业模式", "企业文化", "产品", "长期现金流"];
const qualityLayers = ["生意层", "现金流层", "差异化层", "文化层"];

function indexed(index: number): CSSProperties {
  return { "--i": index } as CSSProperties;
}

function ChapterRule() {
  return (
    <div className="bc-rule-set" aria-hidden="true">
      <span />
      <span />
      <span />
    </div>
  );
}

export default function BuyCompanyChapter({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <div className="bc-scene scene-pad bc-step-equivalence">
        <ChapterRule />
        <div className="bc-equivalence-head">
          <div className="kicker">business first</div>
          <h2>
            <MaskReveal show duration={1000}>
              <span>投资</span>
            </MaskReveal>
            <MaskReveal show delay={260} duration={1000}>
              <em>和经营</em>
            </MaskReveal>
          </h2>
        </div>
        <div className="bc-equivalence-board">
          <div className="bc-role-card card">
            <span className="label-mono">investing</span>
            <strong>你拥有一部分公司</strong>
          </div>
          <div className="bc-equals" aria-hidden="true">
            <span />
          </div>
          <div className="bc-role-card card">
            <span className="label-mono">operating</span>
            <strong>有人替你经营公司</strong>
          </div>
        </div>
        <div className="bc-equivalence-foot">
          <span>不是两个世界</span>
          <span>而是同一门生意的两种位置</span>
        </div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="bc-scene scene-pad bc-step-operator">
        <div className="bc-operator-copy">
          <div className="kicker">operator lens</div>
          <h2>像经营者一样看</h2>
          <p>报价只是表面，真正要穿过去看公司怎样赚钱。</p>
        </div>
        <div className="bc-desk card">
          <div className="bc-desk-top">
            <span className="label-mono">not just price</span>
            <span className="bc-price-tag">报价</span>
          </div>
          <div className="bc-ledger">
            {operatingLens.map((item, index) => (
              <div className="bc-ledger-row" style={indexed(index)} key={item}>
                <span>{item}</span>
                <i />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="bc-scene scene-pad bc-step-before-price">
        <ChapterRule />
        <div className="bc-price-cross card">
          <span className="label-mono">do not start here</span>
          <strong>贵不贵？</strong>
          <i aria-hidden="true" />
        </div>
        <div className="bc-before-copy">
          <div className="kicker">before valuation</div>
          <h2>
            <MaskReveal show duration={950}>
              <span>先问</span>
            </MaskReveal>
            <MaskReveal show delay={240} duration={950}>
              <em>三件事</em>
            </MaskReveal>
          </h2>
        </div>
      </div>
    );
  }

  if (step === 3) {
    return (
      <div className="bc-scene scene-pad bc-step-questions">
        <div className="bc-question-title">
          <div className="kicker">three questions</div>
          <h2>把公司拆开问</h2>
        </div>
        <div className="bc-triangle" aria-label="买公司前三个问题">
          {threeQuestions.map((item, index) => (
            <div className={`bc-question-card bc-q-${index + 1} card`} key={item}>
              <span className="hero-num">0{index + 1}</span>
              <strong>{item}</strong>
            </div>
          ))}
          <svg viewBox="0 0 860 520" aria-hidden="true">
            <path d="M430 42 L110 438 L750 438 Z" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className="bc-scene scene-pad bc-step-cashflow">
      <div className="bc-cashflow-copy">
        <div className="kicker">entry conclusion</div>
        <h2>
          <span>好公司</span>
          <em>不是漂亮词</em>
        </h2>
      </div>
      <div className="bc-cashflow-system">
        <div className="bc-system-node card">
          <span className="label-mono">source</span>
          <strong>产生现金流</strong>
        </div>
        <div className="bc-system-node card">
          <span className="label-mono">defense</span>
          <strong>保护现金流</strong>
        </div>
        <svg viewBox="0 0 1180 360" aria-hidden="true">
          <path className="bc-loop-main" d="M110 180 C280 36 455 36 590 180 S900 324 1070 180" />
          <path className="bc-loop-back" d="M1070 180 C910 62 725 62 590 180 S280 298 110 180" />
        </svg>
        <div className="bc-cashflow-caption">
          长期产生，再长期守住。
        </div>
      </div>
      <div className="bc-layer-strip" aria-label="商业质量四层框架">
        {qualityLayers.map((item, index) => (
          <span style={indexed(index)} key={item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
