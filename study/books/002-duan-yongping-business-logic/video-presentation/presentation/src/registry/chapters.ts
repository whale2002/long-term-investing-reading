import type { ChapterDef } from "./types";
import ColdopenChapter from "../chapters/01-coldopen/Coldopen";
import { narrations as coldopenNarrations } from "../chapters/01-coldopen/narrations";
import BuyCompanyChapter from "../chapters/02-buy-company/BuyCompany";
import { narrations as buyCompanyNarrations } from "../chapters/02-buy-company/narrations";
import ProfitAboveChapter from "../chapters/03-profit-above/ProfitAbove";
import { narrations as profitAboveNarrations } from "../chapters/03-profit-above/narrations";

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
    title: "先别看股价",
    narrations: coldopenNarrations,
    Component: ColdopenChapter,
  },
  {
    id: "buy-company",
    title: "投资像经营者思考",
    narrations: buyCompanyNarrations,
    Component: BuyCompanyChapter,
  },
  {
    id: "profit-above",
    title: "利润之上不是不要利润",
    narrations: profitAboveNarrations,
    Component: ProfitAboveChapter,
  },
];
