import type { CSSProperties } from "react";
import type { ChapterStepProps } from "../../registry/types";
import "./StopBoundary.css";

const extraStops = ["不轻易扩大能力圈", "不频繁决策", "不做短期投机", "不重仓脆弱现金流"];
const speedChain = ["想快", "借钱", "越界", "回不了头"];
const actionRows = ["看消息", "调仓", "追热点", "加杠杆", "不做"];
const circleWords = ["财报术语", "行业新闻", "估值模型", "管理层故事", "边界"];

function StopColumns() {
  return (
    <div className="sb-stop-columns" aria-hidden="true">
      {extraStops.map((item, idx) => (
        <div className="sb-stop-col" key={item} style={{ "--i": idx } as CSSProperties}>
          <span className="sb-stop-index">0{idx + 1}</span>
          <strong>{item}</strong>
          <i />
        </div>
      ))}
    </div>
  );
}

function FastChain() {
  return (
    <div className="sb-chain" aria-hidden="true">
      {speedChain.map((word, idx) => (
        <div className="sb-chain-node" key={word} style={{ "--i": idx } as CSSProperties}>
          <span>{word}</span>
          {idx < speedChain.length - 1 ? <b /> : null}
        </div>
      ))}
    </div>
  );
}

function ActionLedger() {
  return (
    <div className="sb-ledger" aria-hidden="true">
      {actionRows.map((word, idx) => (
        <div
          className={idx === actionRows.length - 1 ? "sb-ledger-row sb-ledger-row-keep" : "sb-ledger-row"}
          key={word}
          style={{ "--i": idx } as CSSProperties}
        >
          <span>{word}</span>
          <i />
        </div>
      ))}
    </div>
  );
}

function AbilityCircle() {
  return (
    <div className="sb-circle-demo" aria-hidden="true">
      <svg viewBox="0 0 760 520" role="presentation">
        <circle className="sb-circle-boundary" cx="380" cy="260" r="172" />
        <circle className="sb-circle-inner" cx="380" cy="260" r="96" />
        <path className="sb-circle-cut" d="M144 392 C244 286 293 249 380 260 S524 308 626 126" />
      </svg>
      {circleWords.map((word, idx) => (
        <span className={`sb-circle-word sb-circle-word-${idx}`} key={word}>
          {word}
        </span>
      ))}
    </div>
  );
}

export default function StopBoundary({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <section className="sb-scene sb-stop-list">
        <div className="sb-copy">
          <div className="kicker">STOP DOING LIST · BOUNDARY</div>
          <h1>再加几条</h1>
          <p>这些不是技巧，是把自己留在长期牌桌上的边界。</p>
        </div>
        <StopColumns />
        <div className="sb-guard-line" aria-hidden="true" />
      </section>
    );
  }

  if (step === 1) {
    return (
      <section className="sb-scene sb-speed">
        <div className="sb-speed-left">
          <div className="kicker">ERROR CHAIN</div>
          <h2>
            错误常常从
            <span>太想快</span>
            开始
          </h2>
        </div>
        <FastChain />
        <div className="sb-long-qualification">
          <span>长期资格</span>
          <i />
        </div>
      </section>
    );
  }

  if (step === 2) {
    return (
      <section className="sb-scene sb-less-action">
        <div className="sb-less-top">
          <div className="kicker">LOW ACTION · HIGH VALUE</div>
          <h2>少动作</h2>
        </div>
        <ActionLedger />
        <div className="sb-no-action hero-num">不做</div>
        <p className="sb-less-note">最值钱的动作，有时是把手收回来。</p>
      </section>
    );
  }

  if (step === 3) {
    return (
      <section className="sb-scene sb-boundary">
        <div className="sb-boundary-copy">
          <div className="kicker">CIRCLE OF COMPETENCE</div>
          <h2>不是知识量</h2>
          <p>能力圈真正保护你的，是知道边界在哪里。</p>
        </div>
        <AbilityCircle />
      </section>
    );
  }

  if (step === 4) {
    return (
      <section className="sb-scene sb-harder">
        <div className="sb-hard-grid">
          <div className="sb-hard-panel sb-hard-known">
            <div className="kicker">EASIER</div>
            <strong>我懂什么</strong>
            <span>容易写满</span>
          </div>
          <div className="sb-hard-mark hero-num">?</div>
          <div className="sb-hard-panel sb-hard-unknown">
            <div className="kicker">HARDER</div>
            <strong>我不懂什么</strong>
            <span>更难承认</span>
          </div>
        </div>
        <div className="sb-hard-ruler" aria-hidden="true">
          <i />
        </div>
      </section>
    );
  }

  return null;
}
