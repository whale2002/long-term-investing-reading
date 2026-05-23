import type { CSSProperties } from "react";
import type { ChapterStepProps } from "../../registry/types";
import "./Cases.css";

const cases = ["茅台", "网易", "苹果"];
const moutaiTraits = ["品牌", "需求", "定价权", "现金流"];
const neteaseTiles = [
  { label: "行业经验", x: 0, y: 0 },
  { label: "游戏生意", x: 1, y: 1 },
  { label: "被忽略", x: 0, y: 2 },
  { label: "现金流", x: 1, y: 3 },
];
const appleOrbit = [
  { label: "产品", x: 0, y: 0 },
  { label: "生态", x: 1, y: 1 },
  { label: "用户黏性", x: 0, y: 2 },
  { label: "资本配置", x: 1, y: 3 },
];
const practiceQuestions = [
  { label: "卖什么", detail: "收入从哪里来" },
  { label: "为何持续买", detail: "需求能不能复现" },
];

export default function Cases({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <section className="cs-scene cs-moutai">
        <div className="cs-case-label">
          <div className="cs-kicker">CASE · MOUTAI</div>
          <h2>好生意的形态</h2>
        </div>
        <div className="cs-bottle-stage" aria-hidden="true">
          <div className="cs-bottle">
            <span>茅台</span>
          </div>
          <div className="cs-pillars">
            {moutaiTraits.map((trait, index) => (
              <div className="cs-pillar" key={trait} style={{ "--i": index } as CSSProperties}>
                <i />
                <span>{trait}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (step === 1) {
    return (
      <section className="cs-scene cs-netease">
        <div className="cs-game-board" aria-hidden="true">
          {neteaseTiles.map((tile, index) => (
            <div
              className="cs-game-tile"
              key={tile.label}
              style={{ "--i": index, "--x": tile.x, "--y": tile.y } as CSSProperties}
            >
              {tile.label}
            </div>
          ))}
          <svg className="cs-cash-route" viewBox="0 0 760 360" role="presentation">
            <path d="M78 278 C178 132 270 296 370 170 S580 72 688 146" />
          </svg>
        </div>
        <div className="cs-netease-copy">
          <div className="cs-kicker">CASE · NETEASE</div>
          <h2>前提仍然是你懂</h2>
          <p>行业经验，让人可能看见别人忽略的现金流。</p>
        </div>
      </section>
    );
  }

  if (step === 2) {
    return (
      <section className="cs-scene cs-apple">
        <div className="cs-device-stage" aria-hidden="true">
          <div className="cs-device">
            <span>苹果</span>
          </div>
          {appleOrbit.map((item, index) => (
            <div
              className="cs-orbit-item"
              key={item.label}
              style={{ "--i": index, "--x": item.x, "--y": item.y } as CSSProperties}
            >
              {item.label}
            </div>
          ))}
          <svg className="cs-orbit-line" viewBox="0 0 720 560" role="presentation">
            <ellipse cx="360" cy="280" rx="286" ry="154" />
            <ellipse cx="360" cy="280" rx="210" ry="258" />
          </svg>
        </div>
        <div className="cs-apple-copy">
          <div className="cs-kicker">CASE · APPLE</div>
          <h2>产品和生态</h2>
          <p>消费电子经验，帮助理解用户黏性、品牌和资本配置。</p>
        </div>
      </section>
    );
  }

  if (step === 3) {
    return (
      <section className="cs-scene cs-common">
        <div className="cs-common-map" aria-hidden="true">
          {cases.map((item, index) => (
            <div className="cs-common-case" key={item} style={{ "--i": index } as CSSProperties}>
              {item}
            </div>
          ))}
          <div className="cs-understand-core">懂</div>
          <svg className="cs-common-lines" viewBox="0 0 860 560" role="presentation">
            <path d="M120 110 C220 190 284 236 430 280" />
            <path d="M120 450 C236 370 302 320 430 280" />
            <path d="M740 280 C626 280 548 280 430 280" />
          </svg>
        </div>
        <div className="cs-common-copy">
          <div className="cs-kicker">COMMON POINT</div>
          <h2>共同点不是公司名字</h2>
          <p>案例是在演示框架怎么落地，不是告诉你今天该买谁。</p>
        </div>
      </section>
    );
  }

  if (step === 4) {
    return (
      <section className="cs-scene cs-questions">
        <div className="cs-question-copy">
          <div className="cs-kicker">PRACTICE FRAME</div>
          <h2>从案例回到五问</h2>
          <p>案例只负责演示框架。落到自己的研究，先把生意和客户问清楚。</p>
        </div>
        <div className="cs-question-board" aria-hidden="true">
          <div className="cs-question-spine">五问框架</div>
          {practiceQuestions.map((item, index) => (
            <div className="cs-question-card" key={item.label} style={{ "--i": index } as CSSProperties}>
              <span>{item.label}</span>
              <small>{item.detail}</small>
            </div>
          ))}
          <svg className="cs-question-lines" viewBox="0 0 820 560" role="presentation">
            <path d="M410 84 V476" />
            <path d="M410 238 H160" />
            <path d="M410 238 H660" />
          </svg>
        </div>
      </section>
    );
  }

  return null;
}
