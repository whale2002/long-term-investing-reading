import type { CSSProperties } from "react";
import type { ChapterStepProps } from "../../registry/types";
import "./PrinciplesStopList.css";

const noiseItems = ["消息", "情绪", "别人判断"];
const stopItems = ["不做空", "不用保证金融资"];
const pathItems = ["看不懂", "走捷径"];

function WrongDirectionDiagram() {
  return (
    <div className="ps-wrong-diagram" aria-hidden="true">
      <svg viewBox="0 0 760 500" role="presentation">
        <path className="ps-main-track" d="M42 398 C176 296 252 242 348 216 S548 172 718 88" />
        <path className="ps-wrong-track" d="M236 248 C360 310 458 358 704 406" />
        <circle cx="236" cy="248" r="14" />
      </svg>
      <div className="ps-model-card">漂亮模型</div>
      <div className="ps-wrong-card">买错东西</div>
    </div>
  );
}

export default function PrinciplesStopList({ step }: ChapterStepProps) {
  if (step === 0) {
    return (
      <section className="ps-scene ps-wrong">
        <div className="ps-wrong-copy">
          <div className="kicker">WRONG DIRECTION</div>
          <h1>方向错了，努力会放大风险</h1>
          <p>财报再细、模型再漂亮，如果买错东西，还是错。</p>
        </div>
        <WrongDirectionDiagram />
      </section>
    );
  }

  if (step === 1) {
    return (
      <section className="ps-scene ps-principle">
        <div className="ps-layer-stack" aria-hidden="true">
          <div className="ps-layer ps-layer-principle">原则</div>
          <div className="ps-layer ps-layer-skill">技巧</div>
          {noiseItems.map((item, index) => (
            <div className="ps-noise-chip" key={item} style={{ "--i": index } as CSSProperties}>
              {item}
            </div>
          ))}
        </div>
        <div className="ps-principle-copy">
          <div className="kicker">PRINCIPLE FIRST</div>
          <h2>先有原则，再谈技巧</h2>
          <p>原则不稳，市场一晃，你就会向外找答案。</p>
        </div>
      </section>
    );
  }

  if (step === 2) {
    return (
      <section className="ps-scene ps-breaker">
        <div className="ps-breaker-copy">
          <div className="kicker">STOP DOING LIST</div>
          <h2>不是装保守</h2>
          <p>它的价值，是挡住那种会让你一次出局的错误。</p>
        </div>
        <div className="ps-breaker-box" aria-hidden="true">
          <div className="ps-capital-line" />
          <div className="ps-breaker-switch">
            <span>活下来</span>
          </div>
          <div className="ps-zero-mark">一次错误清零</div>
        </div>
      </section>
    );
  }

  if (step === 3) {
    return (
      <section className="ps-scene ps-stop">
        <div className="ps-stop-copy">
          <div className="kicker">PLAIN LIST</div>
          <h2>清单可以很朴素</h2>
        </div>
        <div className="ps-stop-cards" aria-hidden="true">
          {stopItems.map((item, index) => (
            <div className="ps-stop-card" key={item} style={{ "--i": index } as CSSProperties}>
              <span>不为</span>
              <strong>{item}</strong>
            </div>
          ))}
          <div className="ps-stop-line" />
        </div>
      </section>
    );
  }

  if (step === 4) {
    return (
      <section className="ps-scene ps-shortcut">
        <div className="ps-shortcut-copy">
          <div className="kicker">NO SHORTCUT</div>
          <h2>不懂和求快，都要停</h2>
        </div>
        <div className="ps-path-board" aria-hidden="true">
          <svg viewBox="0 0 820 420" role="presentation">
            <path className="ps-good-path" d="M58 312 C180 244 256 196 382 194 S600 246 762 94" />
            <path className="ps-short-path" d="M154 282 C318 86 514 72 724 58" />
          </svg>
          {pathItems.map((item, index) => (
            <div className="ps-path-card" key={item} style={{ "--i": index } as CSSProperties}>
              {item}
            </div>
          ))}
          <div className="ps-roadblock">STOP</div>
        </div>
      </section>
    );
  }

  return null;
}
