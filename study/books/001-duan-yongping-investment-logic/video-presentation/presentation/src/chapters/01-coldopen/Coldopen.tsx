import type { CSSProperties } from "react";
import { MaskReveal } from "../../components/MaskReveal";
import type { ChapterStepProps } from "../../registry/types";
import "./Coldopen.css";

const coverSrc = `${import.meta.env.BASE_URL}images/duan-investment-logic-cover.jpg`;

const tapeWords = ["报价", "涨跌", "图形", "消息", "情绪", "跟风"];
const companyWords = ["生意", "现金流", "长期", "所有权"];
const columnMarks = ["一本书", "一份资料", "一个框架"];

function PriceTape() {
  return (
    <div className="co-tape" aria-hidden="true">
      {Array.from({ length: 4 }).map((_, row) => (
        <div className="co-tape-row" key={row}>
          {[...tapeWords, ...tapeWords].map((word, idx) => (
            <span key={`${row}-${idx}`}>{word}</span>
          ))}
        </div>
      ))}
    </div>
  );
}

function OwnershipLedger() {
  return (
    <div className="co-ledger" aria-hidden="true">
      {companyWords.map((word, idx) => (
        <div className="co-ledger-row" key={word} style={{ "--i": idx } as CSSProperties}>
          <span>{word}</span>
          <i />
        </div>
      ))}
    </div>
  );
}

export default function Coldopen({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <section className="co-scene co-series-cover">
        <div className="co-series-paper" aria-hidden="true">
          <div className="co-series-index">VOL. 001</div>
          <div className="co-series-book">段永平投资问答录：投资逻辑篇</div>
          <div className="co-series-rule" />
        </div>
        <div className="co-series-copy">
          <div className="kicker">LONG-TERM INVESTING READING</div>
          <h1>
            <MaskReveal show duration={1100}>
              <span>长期投资</span>
            </MaskReveal>
            <MaskReveal show delay={260} duration={1100}>
              <span>阅读分享</span>
            </MaskReveal>
          </h1>
          <div className="co-series-subline">
            <strong>第一期</strong>
            <span>买股票就是买公司</span>
          </div>
        </div>
      </section>
    );
  }

  if (step === 1) {
    return (
      <section className="co-scene co-column-intro">
        <div className="co-column-copy">
          <div className="kicker">COLUMN START</div>
          <h2>每一期，分享一本书</h2>
          <p>不抄结论，也不做买卖建议。重点是把能复用的判断框架讲清楚。</p>
        </div>
        <div className="co-column-stack" aria-hidden="true">
          {columnMarks.map((item, index) => (
            <div className="co-column-card" key={item} style={{ "--i": index } as CSSProperties}>
              <span>0{index + 1}</span>
              <strong>{item}</strong>
            </div>
          ))}
          <div className="co-column-book">
            <small>本期</small>
            <span>投资逻辑篇</span>
          </div>
        </div>
      </section>
    );
  }

  if (step === 2) {
    return (
      <section className="co-scene co-opening">
        <div className="co-cover-stack" aria-hidden="true">
          <div className="co-paper co-paper-back" />
          <img className="co-cover" src={coverSrc} alt="" />
        </div>
        <div className="co-opening-copy">
          <div className="kicker">VALUE INVESTING · FIRST MISTAKE</div>
          <h1>
            <MaskReveal show duration={1100}>
              <span>第一步</span>
            </MaskReveal>
            <MaskReveal show delay={340} duration={1100}>
              <span className="co-accent">就走偏了</span>
            </MaskReveal>
          </h1>
          <div className="co-price-strip">
            <span>他们盯着</span>
            <strong>股价</strong>
          </div>
        </div>
        <PriceTape />
      </section>
    );
  }

  if (step === 3) {
    return (
      <section className="co-scene co-question">
        <div className="co-question-grid">
          <div className="co-quote-block">
            <div className="kicker">DUAN YONGPING NOTE</div>
            <p>别先看报价。</p>
            <p>先问一件事。</p>
          </div>
          <div className="co-question-mark hero-num">?</div>
        </div>
        <h2>
          <MaskReveal show duration={1200}>
            <span>你买的到底是什么？</span>
          </MaskReveal>
        </h2>
        <div className="co-cut-line" aria-hidden="true" />
      </section>
    );
  }

  if (step === 4) {
    return (
      <section className="co-scene co-code-view">
        <div className="co-view-label">如果买的是股票代码</div>
        <div className="co-market-board">
          <div className="co-code hero-num">0000</div>
          <div className="co-market-columns" aria-hidden="true">
            {["追涨", "杀跌", "追涨", "杀跌"].map((word, idx) => (
                <span key={`${word}-${idx}`} style={{ "--i": idx } as CSSProperties}>
                {word}
              </span>
            ))}
          </div>
        </div>
        <div className="co-swing-line" aria-hidden="true">
          <svg viewBox="0 0 820 220" role="presentation">
            <path d="M20 138 C120 30 210 34 300 134 S480 246 570 126 S710 28 800 112" />
            <circle cx="300" cy="134" r="10" />
            <circle cx="570" cy="126" r="10" />
          </svg>
        </div>
      </section>
    );
  }

  if (step === 5) {
    return (
      <section className="co-scene co-company-view">
        <div className="co-company-copy">
          <div className="kicker">换成公司视角</div>
          <h2>注意力会变</h2>
          <p>从报价，转向一门生意能不能持续产生现金。</p>
        </div>
        <div className="co-company-stage">
          <OwnershipLedger />
          <div className="co-lifetime">
            <span className="co-lifetime-label">能不能活很久</span>
            <div className="co-lifetime-line">
              <i />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (step === 6) {
    return (
      <section className="co-scene co-thesis">
        <div className="co-thesis-left">
          <div className="kicker">MAIN LINE</div>
          <h2>
            <span>投资不是</span>
            <strong>预测明天</strong>
          </h2>
        </div>
        <div className="co-thesis-map" aria-hidden="true">
          {["能力圈", "好公司", "少犯错"].map((word, idx) => (
            <div className="co-node" key={word} style={{ "--i": idx } as CSSProperties}>
              <span>{word}</span>
            </div>
          ))}
          <div className="co-map-line" />
        </div>
        <div className="co-thesis-note">
          今天这份分享，把投资从短期报价，拉回长期资产。
        </div>
      </section>
    );
  }

  return null;
}
