import { A, DIMS } from "../assets";
import SpeedStreak from "../components/SpeedStreak";
import { CheckerGlow, ProblemsGlow, SoftMask } from "../components/Glow";
import useInView from "../components/useInView";
import { redPunct } from "../components/RedPunct";
import {
  P_BLADE_558,
  VB_BLADE_558,
  P_BLADE_317,
  VB_BLADE_317,
  P_BLADE_568,
  VB_BLADE_568,
  P_HERO_BRACKET,
  VB_HERO_BRACKET,
  P_HERO_BRACKET_M,
  VB_HERO_BRACKET_M,
  P_BLADE_192,
  VB_BLADE_192,
  P_BLADE_292,
  VB_BLADE_292,
} from "../components/paths";

/**
 * `prizes` (114:219) — 1440×1227, page y 3306. One centred column on the
 * checker sweep (`image 2`): the "What's on the podium" frame, the "Global
 * exposure" UK-visit card (rendered as `uk-visit-card.webp`), then the prize
 * pool, then two caption+detail rows, each caption carrying a small red blade
 * behind it. The big number keeps the Figma zero-as-letter-O spelling.
 */

// `Frame 80` (114:233). "Entry into the TrackShift Alumni Network" (114:235)
// is hidden in the Figma, so it is not rendered.
const DETAILS = [
  "Innovation kits, certificates, T-shirts",
  "Direct mentorship access - TGR Haas F1 Team, Mphasis, academic and industry mentors",
  "Select teams offered 6–12 month research or internship placements in Plaksha University labs",
];

export function Prizes() {
  const [ref, live] = useInView(0);

  return (
    <section
      id="prizes"
      ref={ref}
      className={`relative isolate overflow-hidden bg-black ${live ? "ts-live" : ""}`}
    >
      <div className="relative mx-auto max-w-[1440px] lg:min-h-[1238px]">
        {/* `image 4` runs 212px past the Problems clip into this section. */}
        <ProblemsGlow className="hidden lg:block" f={-1148} />
        <CheckerGlow className="hidden lg:block" />
        {/* `Rectangle 3` (114:96) — 1579×763 @ page (-70,3959), 100px blur.
            The black fog that holds the checker sweep down; without it the
            plate blazes straight through the copy. */}
        <SoftMask
          className="-z-10 hidden lg:block"
          style={{ left: -70, top: 653, width: 1579, height: 763 }}
        />

        {/* `Rectangle 24` (114:220 desktop / 237:260 mobile) — same open
            bracket as Partners/Lookback/the Hero CTA, framing the section
            title at both sizes. */}
        {/* Symmetric viewport-width rail through the middle of "WHAT’S ON",
            the heading's first line — see the note in Partners.jsx. */}
        <SpeedStreak
          viewBox={VB_HERO_BRACKET_M}
          d={P_HERO_BRACKET_M}
          delay={0.1}
          strokeWidth={1.4}
          restOpacity={0.7}
          className="left-1/2 top-[calc(2.5rem+clamp(20px,6.36vw,31px)-1px)] -z-10 h-[45px] w-[calc(100%+60px)] -translate-x-1/2 lg:hidden"
        />
        <SpeedStreak
          viewBox={VB_HERO_BRACKET}
          d={P_HERO_BRACKET}
          delay={0.1}
          strokeWidth={1.4}
          restOpacity={0.7}
          className="left-1/2 top-[89px] -z-10 hidden h-[150px] w-[1567px] -translate-x-1/2 lg:block"
        />

        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 pb-16 pt-10 lg:absolute lg:inset-x-0 lg:top-0 lg:px-0 lg:pb-0 lg:pt-0">
          {/* Two centred lines on mobile — "WHAT’S ON" / "THE PODIUM"
              (both at cx 193.5 on the 390pt frame), not the left-aligned
              "WHAT’S ON THE / PODIUM" that free wrapping produced. The break
              is explicit because the design's is, and `text-center` was
              simply missing here. */}
          <h2 className="text-center text-[clamp(26px,8.2vw,40px)] font-black uppercase text-white lg:absolute lg:left-1/2 lg:top-[63px] lg:-translate-x-1/2 lg:text-[48px]">
            {redPunct("What’s on")}
            <br className="lg:hidden" />{" "}
            {redPunct("the podium")}
          </h2>

          <div className="relative mt-6 lg:contents">
            {/*
              Each mobile caption parallelogram wraps ITS OWN words rather than
              sitting under them. In the iPhone 13/14 export the blade is
              centred on the caption and overhangs it by ~64–76px, with its
              body straddling the lower half of the capitals and finishing a
              little below the baseline — the words sit inside the box, they
              are not underlined by it. Measured on the 390pt frame:
                "Global exposure"      text 186.4 wide → blade 250.7×17.5
                "Internships"          text 123.8 wide → blade 198.1×18.0
                "all participants get" text 222.4 wide → blade 298.1×21.0
              So the blade is absolutely positioned inside the caption (whose
              flex parent already shrink-wraps it to the text) and sized in
              `em`, which keeps the overhang and the vertical straddle in
              proportion as the `clamp()` type scales. It was previously an
              in-flow `block` with `mt-1`, which is what pushed every
              parallelogram down into the gap below its heading.
            */}
            <p className="relative text-[clamp(15px,4.1vw,22px)] font-black uppercase text-white lg:absolute lg:left-1/2 lg:top-[155px] lg:mt-0 lg:-translate-x-1/2 lg:text-[40px]">
              <svg
                viewBox={VB_BLADE_192}
                preserveAspectRatio="none"
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[calc(50%+0.385em)] -z-10 h-[1.1em] w-[calc(100%+4.02em)] -translate-x-1/2 -translate-y-1/2 lg:hidden"
              >
                <path d={P_BLADE_192} fill="none" stroke="#D6001C" strokeWidth={2} opacity={0.5} vectorEffect="non-scaling-stroke" />
              </svg>
              Global exposure
            </p>
            <SpeedStreak
              viewBox={VB_BLADE_558}
              d={P_BLADE_558}
              delay={0.15}
              strokeWidth={2}
              restOpacity={0.5}
              className="left-1/2 top-[175px] -z-10 hidden h-[37px] w-[558px] -translate-x-1/2 lg:block"
            />
          </div>

          <img
            src={A.ukVisitCard}
            alt="UK Visit for TOP 3"
            width={DIMS.ukVisitCard.w}
            height={DIMS.ukVisitCard.h}
            loading="lazy"
            decoding="async"
            className="mt-8 w-full max-w-[400px] object-contain lg:absolute lg:left-1/2 lg:top-[255px] lg:mt-0 lg:w-[587px] lg:max-w-none lg:-translate-x-1/2"
          />

          <p className="hidden text-[32px] font-black uppercase text-white lg:absolute lg:left-[438px] lg:top-[625px] lg:block lg:w-[223px] lg:text-center">
            Prize pool
          </p>
          {/* `Vector 4` / `Vector 5` (114:225/226) — the chamfered white
              bracket around the prize pool, broken at the top for the
              "Prize pool" label and at the bottom right. */}
          <svg
            aria-hidden="true"
            viewBox="0 0 743.426 162.57"
            fill="none"
            className="absolute left-[348.574px] top-[643.72px] hidden h-[162.57px] w-[743.426px] lg:block"
          >
            <path
              d="M326.137 0H735.466L743.426 8.15V154.41L735.466 162.57H715.816"
              stroke="#fff"
              strokeWidth="4.9739"
            />
            <path
              d="M670.936 162.57H7.958L0 154.41V8.15L7.958 0H68.871"
              stroke="#fff"
              strokeWidth="4.9739"
            />
          </svg>

          {/* 114:224 — "INR" is hollow (transparent fill, white outline
              stroke); the number itself is solid white fill, no stroke. Two
              different treatments on one line, not one uniform style. */}
          <p className="hidden text-[clamp(48px,10vw,94.7px)] font-extrabold leading-[0.95] lg:absolute lg:left-[385px] lg:top-[666px] lg:block lg:w-[666px] lg:text-center lg:leading-none">
            <span style={{ color: "transparent", WebkitTextStroke: "0.89px #FFFFFF" }}>INR</span>
            <span className="text-white"> 1,75,OOO</span>
          </p>

          {/* Mobile prize-pool frame (iPhone 13/14 export, ground truth) — a
              chamfered border (top-left / bottom-right corners only) with
              "Prize pool" set into the top rail as a legend, short dash to
              its left and a long one running to the right edge. */}
          <div className="relative mt-12 w-full lg:hidden">
            <span className="absolute left-8 top-0 z-10 -translate-y-1/2 bg-black px-2 text-[16px] font-black uppercase text-white">
              Prize pool
            </span>
            <div
              className="border border-white/90 px-6 pb-8 pt-7"
              style={{
                clipPath:
                  "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
              }}
            >
              <p className="text-center text-[clamp(48px,10vw,64px)] font-extrabold leading-[0.95]">
                <span style={{ color: "transparent", WebkitTextStroke: "0.89px #FFFFFF" }}>INR</span>
                <span className="text-white"> 1,75,OOO</span>
              </p>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center lg:absolute lg:inset-x-0 lg:top-0 lg:mt-0">
            <div className="relative lg:contents">
              {/* Blade wraps the word — see the note on "Global exposure". */}
              <p className="relative text-[clamp(15px,4.1vw,22px)] font-black uppercase text-white lg:absolute lg:left-1/2 lg:top-[849px] lg:-translate-x-1/2 lg:text-[32px]">
                <svg
                  viewBox={VB_BLADE_192}
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-[calc(50%+0.51em)] -z-10 h-[1.125em] w-[calc(100%+4.64em)] -translate-x-1/2 -translate-y-1/2 lg:hidden"
                >
                  <path d={P_BLADE_192} fill="none" stroke="#D6001C" strokeWidth={2} opacity={0.5} vectorEffect="non-scaling-stroke" />
                </svg>
                Internships
              </p>
              <SpeedStreak
                viewBox={VB_BLADE_317}
                d={P_BLADE_317}
                delay={0.2}
                strokeWidth={2}
                restOpacity={0.5}
                className="left-1/2 top-[868px] -z-10 hidden h-[27px] w-[317px] -translate-x-1/2 lg:block"
              />
            </div>
            <p className="font-helvetica mt-3 max-w-[700px] text-center text-[16px] text-white lg:absolute lg:left-1/2 lg:top-[906px] lg:mt-0 lg:-translate-x-1/2 lg:text-[20px]">
              Internships at Mphasis office on live AI and innovation projects
            </p>

            <div className="relative mt-10 lg:contents">
              {/* Blade wraps the words — see the note on "Global exposure". */}
              <p className="relative text-[clamp(15px,4.1vw,22px)] font-black uppercase text-white lg:absolute lg:left-1/2 lg:top-[971px] lg:mt-0 lg:-translate-x-1/2 lg:text-[32px]">
                <svg
                  viewBox={VB_BLADE_292}
                  preserveAspectRatio="none"
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-[calc(50%+0.6em)] -z-10 h-[1.31em] w-[calc(100%+4.73em)] -translate-x-1/2 -translate-y-1/2 lg:hidden"
                >
                  <path d={P_BLADE_292} fill="none" stroke="#D6001C" strokeWidth={2} opacity={0.5} vectorEffect="non-scaling-stroke" />
                </svg>
                all participants get
              </p>
              <SpeedStreak
                viewBox={VB_BLADE_568}
                d={P_BLADE_568}
                delay={0.25}
                strokeWidth={2}
                restOpacity={0.5}
                className="left-1/2 top-[990px] -z-10 hidden h-[27px] w-[568px] -translate-x-1/2 lg:block"
              />
            </div>
            <div className="mt-4 flex w-full flex-col items-center gap-[18px] lg:absolute lg:inset-x-0 lg:top-[1046px] lg:mt-0 lg:gap-[10px]">
              {/* Mobile bullets each detail line (237:292 `Frame 80`);
                  desktop's own row has none. */}
              {DETAILS.map((d) => (
                <p
                  key={d}
                  className="font-helvetica text-center text-[14px] leading-[1.4] text-white lg:max-w-[880px] lg:text-[20px] lg:leading-[28px]"
                >
                  <span className="lg:hidden">&bull;&nbsp; </span>
                  {d}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Prizes;
