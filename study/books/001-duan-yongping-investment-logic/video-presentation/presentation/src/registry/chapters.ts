import type { ChapterDef } from "./types";
import ColdopenChapter from "../chapters/01-coldopen/Coldopen";
import { narrations as coldopenNarrations } from "../chapters/01-coldopen/narrations";
import OwnershipThesisChapter from "../chapters/02-ownership-thesis/OwnershipThesis";
import { narrations as ownershipThesisNarrations } from "../chapters/02-ownership-thesis/narrations";
import RightThingsChapter from "../chapters/03-right-things/RightThings";
import { narrations as rightThingsNarrations } from "../chapters/03-right-things/narrations";
import PrinciplesStopListChapter from "../chapters/04-principles-stop-list/PrinciplesStopList";
import { narrations as principlesStopListNarrations } from "../chapters/04-principles-stop-list/narrations";
import StopBoundaryChapter from "../chapters/05-stop-boundary/StopBoundary";
import { narrations as stopBoundaryNarrations } from "../chapters/05-stop-boundary/narrations";
import CircleBusinessChapter from "../chapters/06-circle-business/CircleBusiness";
import { narrations as circleBusinessNarrations } from "../chapters/06-circle-business/narrations";
import GoodBusinessChapter from "../chapters/07-good-business/GoodBusiness";
import { narrations as goodBusinessNarrations } from "../chapters/07-good-business/narrations";
import ValuationChapter from "../chapters/08-valuation/Valuation";
import { narrations as valuationNarrations } from "../chapters/08-valuation/narrations";
import FinancialFilterChapter from "../chapters/09-financial-filter/FinancialFilter";
import { narrations as financialFilterNarrations } from "../chapters/09-financial-filter/narrations";
import ErrorRateChapter from "../chapters/10-error-rate/ErrorRate";
import { narrations as errorRateNarrations } from "../chapters/10-error-rate/narrations";
import ActiveIndexChapter from "../chapters/11-active-index/ActiveIndex";
import { narrations as activeIndexNarrations } from "../chapters/11-active-index/narrations";
import MarketMethodChapter from "../chapters/12-market-method/MarketMethod";
import { narrations as marketMethodNarrations } from "../chapters/12-market-method/narrations";
import CasesChapter from "../chapters/13-cases/Cases";
import { narrations as casesNarrations } from "../chapters/13-cases/narrations";
import FiveQuestionsChapter from "../chapters/14-five-questions/FiveQuestions";
import { narrations as fiveQuestionsNarrations } from "../chapters/14-five-questions/narrations";
import PriceBuySellChapter from "../chapters/15-price-buy-sell/PriceBuySell";
import { narrations as priceBuySellNarrations } from "../chapters/15-price-buy-sell/narrations";
import PracticeClosingChapter from "../chapters/16-practice-closing/PracticeClosing";
import { narrations as practiceClosingNarrations } from "../chapters/16-practice-closing/narrations";

/**
 * Order = order of presentation.
 *
 * Each chapter MUST provide a `narrations: Narration[]` array. Its length
 * is the chapter's step count — there is no `totalSteps` to maintain
 * separately. This guarantees the audio synthesis pipeline, the runtime
 * stepper, and the chapter `.tsx` switch on `step` cannot drift apart.
 *
 * Visual styling (color, fonts) comes entirely from the active theme —
 * chapters never hard-code palette / font names. See THEMES.md.
 */
export const CHAPTERS: ChapterDef[] = [
  {
    id: "coldopen",
    title: "别先看股价",
    narrations: coldopenNarrations,
    Component: ColdopenChapter,
  },
  {
    id: "ownership-thesis",
    title: "买的是公司，不是报价",
    narrations: ownershipThesisNarrations,
    Component: OwnershipThesisChapter,
  },
  {
    id: "right-things",
    title: "做对的事情在前",
    narrations: rightThingsNarrations,
    Component: RightThingsChapter,
  },
  {
    id: "principles-stop-list",
    title: "原则和不为清单",
    narrations: principlesStopListNarrations,
    Component: PrinciplesStopListChapter,
  },
  {
    id: "stop-boundary",
    title: "少动作与能力圈",
    narrations: stopBoundaryNarrations,
    Component: StopBoundaryChapter,
  },
  {
    id: "circle-business",
    title: "理解边界与好生意",
    narrations: circleBusinessNarrations,
    Component: CircleBusinessChapter,
  },
  {
    id: "good-business",
    title: "好生意落到结果",
    narrations: goodBusinessNarrations,
    Component: GoodBusinessChapter,
  },
  {
    id: "valuation",
    title: "估值是追问现金流",
    narrations: valuationNarrations,
    Component: ValuationChapter,
  },
  {
    id: "financial-filter",
    title: "财报是过滤器",
    narrations: financialFilterNarrations,
    Component: FinancialFilterChapter,
  },
  {
    id: "error-rate",
    title: "高尔夫与低错误率",
    narrations: errorRateNarrations,
    Component: ErrorRateChapter,
  },
  {
    id: "active-index",
    title: "主动投资的门槛",
    narrations: activeIndexNarrations,
    Component: ActiveIndexChapter,
  },
  {
    id: "market-method",
    title: "别让市场替你判断",
    narrations: marketMethodNarrations,
    Component: MarketMethodChapter,
  },
  {
    id: "cases",
    title: "案例不是持仓清单",
    narrations: casesNarrations,
    Component: CasesChapter,
  },
  {
    id: "five-questions",
    title: "研究前五问",
    narrations: fiveQuestionsNarrations,
    Component: FiveQuestionsChapter,
  },
  {
    id: "price-buy-sell",
    title: "价格边际与买卖",
    narrations: priceBuySellNarrations,
    Component: PriceBuySellChapter,
  },
  {
    id: "practice-closing",
    title: "练习与收束",
    narrations: practiceClosingNarrations,
    Component: PracticeClosingChapter,
  },
];
