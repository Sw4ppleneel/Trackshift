import { P_TL_DASH, VB_TL_DASH } from "./paths";

/**
 * Mobile carousel controls. Figma's mobile carousels (237:537 `student
 * words`) carry no arrow affordance at all — five red dashes (`Rectangle
 * 29–33`, the same 33×5 parallelogram as the Timeline spine caps — a
 * diagonal-cut blade, not a plain bar), swipe is the only interaction.
 * Desktop keeps its own carets out at the section edges, so this is
 * `lg:hidden`.
 */
export function CarouselNav({ index, count, setIndex, className = "" }) {
  if (count < 2) return null;
  return (
    <div className={`flex items-center justify-center gap-[10px] lg:hidden ${className}`}>
      {Array.from({ length: count }, (_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => setIndex(i)}
          aria-label={`Go to slide ${i + 1}`}
          className="h-[5px] w-[33px]"
        >
          <svg viewBox={VB_TL_DASH} preserveAspectRatio="none" className="h-full w-full overflow-visible" aria-hidden="true">
            {i === index ? (
              <path d={P_TL_DASH} className="fill-haas-red" />
            ) : (
              <path d={P_TL_DASH} fill="none" stroke="#D6001C" strokeWidth={1} vectorEffect="non-scaling-stroke" />
            )}
          </svg>
        </button>
      ))}
    </div>
  );
}

export default CarouselNav;
