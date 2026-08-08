import { A, DIMS } from "../assets";
import useInView from "../components/useInView";
import { redPunct } from "../components/RedPunct";

/**
 * `Footer` (114:421) — 1440×553, page y 9333. The full lockup at 369×327
 * (`A.logoFooter` — badge + wordmark + tagline + "in association with"
 * partner row, re-exported straight from Figma node 114:422, NOT a stretch
 * of the hero's badge-only crop), the four social rows (Frame 90), and the
 * legal line. Brand icons are approximated inline (the Figma ones are
 * component instances with gradient fills).
 */

/**
 * The four social marks are circular badges in the Figma icon set (114:425 /
 * 428 / 431 / 434). Brand colours and the Instagram two-radial gradient are
 * taken verbatim from the file's fills.
 */
function InstagramIcon() {
  return (
    <svg viewBox="0 0 38 38" fill="none" className="h-[38px] w-[38px]" aria-hidden="true">
      <circle cx="19" cy="19" r="19" fill="url(#ts-ig-radial-1)" />
      <circle cx="19" cy="19" r="19" fill="url(#ts-ig-radial-2)" />
      <path
        d="M19.001 7.59961C15.905 7.59961 15.5164 7.61315 14.3004 7.66848C13.0868 7.72406 12.2583 7.9162 11.5335 8.19811C10.7837 8.48928 10.1477 8.87878 9.51401 9.51267C8.87988 10.1463 8.49037 10.7823 8.19824 11.5319C7.91562 12.257 7.72324 13.0856 7.66861 14.2988C7.61423 15.5148 7.59998 15.9036 7.59998 18.9996C7.59998 22.0957 7.61375 22.483 7.66885 23.699C7.72466 24.9126 7.9168 25.741 8.19848 26.4659C8.4899 27.2157 8.8794 27.8517 9.5133 28.4854C10.1467 29.1195 10.7827 29.5099 11.5321 29.8011C12.2574 30.083 13.086 30.2752 14.2994 30.3307C15.5155 30.3861 15.9038 30.3996 18.9996 30.3996C22.0959 30.3996 22.4833 30.3861 23.6993 30.3307C24.913 30.2752 25.7423 30.083 26.4676 29.8011C27.2172 29.5099 27.8523 29.1195 28.4857 28.4854C29.1198 27.8517 29.5093 27.2157 29.8015 26.4661C30.0817 25.741 30.2741 24.9124 30.3311 23.6993C30.3857 22.4833 30.4 22.0957 30.4 18.9996C30.4 15.9036 30.3857 15.515 30.3311 14.299C30.2741 13.0854 30.0817 12.257 29.8015 11.5321C29.5093 10.7823 29.1198 10.1463 28.4857 9.51267C27.8516 8.87855 27.2174 8.48905 26.4669 8.19811C25.7402 7.9162 24.9113 7.72406 23.6977 7.66848C22.4816 7.61315 22.0945 7.59961 18.9975 7.59961H19.001ZM17.9784 9.65398C18.2819 9.65351 18.6206 9.65398 19.001 9.65398C22.0449 9.65398 22.4056 9.66491 23.6076 9.71953C24.7192 9.77036 25.3224 9.95608 25.7243 10.1121C26.2563 10.3187 26.6356 10.5657 27.0343 10.9647C27.4333 11.3637 27.6803 11.7437 27.8874 12.2757C28.0435 12.6771 28.2294 13.2804 28.28 14.3919C28.3347 15.5936 28.3465 15.9546 28.3465 18.997C28.3465 22.0394 28.3347 22.4004 28.28 23.6021C28.2292 24.7136 28.0435 25.3169 27.8874 25.7182C27.6808 26.2502 27.4333 26.6291 27.0343 27.0278C26.6353 27.4268 26.2565 27.6738 25.7243 27.8804C25.3229 28.0372 24.7192 28.2224 23.6076 28.2733C22.4059 28.3279 22.0449 28.3398 19.001 28.3398C15.957 28.3398 15.5962 28.3279 14.3944 28.2733C13.2829 28.222 12.6797 28.0362 12.2776 27.8802C11.7456 27.6736 11.3656 27.4266 10.9666 27.0276C10.5676 26.6286 10.3206 26.2495 10.1135 25.7173C9.95743 25.3159 9.77146 24.7127 9.72087 23.6012C9.66625 22.3994 9.65532 22.0384 9.65532 18.9941C9.65532 15.9499 9.66625 15.5908 9.72087 14.389C9.7717 13.2775 9.95743 12.6743 10.1135 12.2724C10.3201 11.7404 10.5676 11.3604 10.9666 10.9614C11.3656 10.5624 11.7456 10.3154 12.2776 10.1083C12.6794 9.95157 13.2829 9.76632 14.3944 9.71526C15.4461 9.66776 15.8537 9.65351 17.9784 9.65113V9.65398ZM25.0863 11.5469C24.3311 11.5469 23.7183 12.1589 23.7183 12.9144C23.7183 13.6696 24.3311 14.2824 25.0863 14.2824C25.8416 14.2824 26.4543 13.6696 26.4543 12.9144C26.4543 12.1591 25.8416 11.5464 25.0863 11.5464V11.5469ZM19.001 13.1452C15.7679 13.1452 13.1466 15.7665 13.1466 18.9996C13.1466 22.2327 15.7679 24.8528 19.001 24.8528C22.2342 24.8528 24.8545 22.2327 24.8545 18.9996C24.8545 15.7665 22.2339 13.1452 19.0008 13.1452H19.001ZM19.001 15.1996C21.0996 15.1996 22.8011 16.9008 22.8011 18.9996C22.8011 21.0982 21.0996 22.7996 19.001 22.7996C16.9022 22.7996 15.201 21.0982 15.201 18.9996C15.201 16.9008 16.9022 15.1996 19.001 15.1996Z"
        fill="white"
      />
      <defs>
        <radialGradient
          id="ts-ig-radial-1"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(10.0938 40.9268) rotate(-90) scale(37.6608 35.0275)"
        >
          <stop stopColor="#FFDD55" />
          <stop offset="0.1" stopColor="#FFDD55" />
          <stop offset="0.5" stopColor="#FF543E" />
          <stop offset="1" stopColor="#C837AB" />
        </radialGradient>
        <radialGradient
          id="ts-ig-radial-2"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(3.30424 16.5071 -68.0414 13.6276 -6.3652 2.73746)"
        >
          <stop stopColor="#3771C8" />
          <stop offset="0.128" stopColor="#3771C8" />
          <stop offset="1" stopColor="#6600FF" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 38 38" fill="none" className="h-[38px] w-[38px]" aria-hidden="true">
      <path
        d="M0 19C0 8.50659 8.50659 0 19 0C29.4934 0 38 8.50659 38 19C38 29.4934 29.4934 38 19 38C8.50659 38 0 29.4934 0 19Z"
        fill="#0077B5"
      />
      <path
        d="M13.4272 28.6738H9.12158V15.7363H13.4272V28.6738ZM23.9976 15.4326C26.8309 15.4326 28.9555 17.2822 28.9556 21.2559V28.6738H24.6499V21.752C24.6498 20.0138 24.0266 18.8273 22.4683 18.8271C21.2788 18.8271 20.5695 19.627 20.2583 20.3994C20.1445 20.6762 20.1167 21.0626 20.1167 21.4492V28.6738H15.8101C15.8104 28.6023 15.8666 16.9492 15.8101 15.7373H20.1167V17.5693C20.6882 16.6885 21.7117 15.4328 23.9976 15.4326ZM11.3022 9.5C12.7751 9.5 13.6824 10.466 13.7104 11.7344C13.7104 12.9766 12.7753 13.9707 11.2739 13.9707H11.2466C9.80114 13.9706 8.8667 12.9765 8.8667 11.7344C8.86683 10.4661 9.8296 9.50019 11.3022 9.5Z"
        fill="white"
      />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 38 38" fill="none" className="h-[38px] w-[38px]" aria-hidden="true">
      <path
        d="M19 38C29.4934 38 38 29.4934 38 19C38 8.50659 29.4934 0 19 0C8.50659 0 0 8.50659 0 19C0 29.4934 8.50659 38 19 38Z"
        fill="#25D366"
      />
      <path
        d="M19.6259 6.9668C22.6482 6.9681 25.485 8.14476 27.618 10.2803C29.7511 12.4157 30.9249 15.2547 30.9237 18.2734C30.921 24.5011 25.8549 29.5687 19.6259 29.5713H19.6219C17.7311 29.5706 15.8727 29.0954 14.2225 28.1953L8.23328 29.7666L9.83582 23.9121C8.84722 22.1987 8.32716 20.2548 8.328 18.2637C8.3307 12.0347 13.3988 6.96693 19.6259 6.9668ZM19.6298 8.875C14.4501 8.87508 10.2373 13.0873 10.2352 18.2646C10.2345 20.039 10.7318 21.7667 11.6718 23.2617L11.8944 23.6172L10.9462 27.083L14.4999 26.1504L14.8427 26.3535C16.2843 27.209 17.9371 27.6624 19.6219 27.6631H19.6259C24.8015 27.6631 29.0143 23.4503 29.0165 18.2725C29.0175 15.7633 28.0414 13.4039 26.2684 11.6289C24.4955 9.85402 22.1379 8.87587 19.6298 8.875ZM16.1669 13.0566C16.3401 13.0653 16.5735 12.9906 16.8026 13.541C17.0379 14.1063 17.6022 15.4964 17.6727 15.6377C17.7432 15.7789 17.7902 15.9435 17.6962 16.1318C17.6021 16.3201 17.555 16.4378 17.4139 16.6025C17.2728 16.7673 17.1171 16.9711 16.9901 17.0977C16.8489 17.2383 16.7025 17.3915 16.8671 17.6738C17.032 17.9569 17.5985 18.8807 18.4374 19.6289C19.5157 20.5907 20.4256 20.889 20.7079 21.0303C20.9898 21.1714 21.1546 21.1481 21.3192 20.96C21.4839 20.7716 22.0246 20.1351 22.2128 19.8525C22.4009 19.5701 22.5898 19.6168 22.8485 19.7109C23.108 19.8056 24.495 20.4886 24.7772 20.6299C25.0594 20.7712 25.2477 20.8422 25.3182 20.96C25.3886 21.0784 25.388 21.6429 25.1532 22.3018C24.9179 22.9612 23.7903 23.5635 23.2479 23.6445C22.7616 23.7172 22.1458 23.7471 21.4696 23.5322C21.0596 23.4022 20.5336 23.2283 19.8602 22.9375C17.0286 21.7146 15.1791 18.8633 15.038 18.6748C14.8959 18.4853 13.8856 17.1437 13.8856 15.7549C13.8856 14.3655 14.6151 13.682 14.8739 13.3994C15.1324 13.1174 15.4378 13.047 15.6259 13.0469C15.8139 13.0469 16.0025 13.0484 16.1669 13.0566Z"
        fill="white"
      />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg viewBox="0 0 38 38" fill="none" className="h-[38px] w-[38px]" aria-hidden="true">
      <circle cx="19" cy="19" r="19" fill="#5A68F3" />
      <path
        d="M27.5733 11.0912C25.9744 10.3479 24.2648 9.80762 22.4775 9.5C22.258 9.89436 22.0015 10.4248 21.8247 10.8467C19.9247 10.5628 18.0422 10.5628 16.1772 10.8467C16.0004 10.4248 15.7381 9.89436 15.5167 9.5C13.7274 9.80762 12.0158 10.3499 10.417 11.0952C7.19203 15.9379 6.3178 20.6603 6.75491 25.3156C8.89387 26.9029 10.9668 27.8671 13.0047 28.498C13.5079 27.8099 13.9566 27.0784 14.3432 26.3074C13.6069 26.0294 12.9017 25.6863 12.2354 25.288C12.4122 25.1579 12.5851 25.0218 12.7521 24.8818C16.8163 26.7708 21.2322 26.7708 25.2478 24.8818C25.4168 25.0218 25.5897 25.1579 25.7646 25.288C25.0963 25.6883 24.3891 26.0313 23.6528 26.3094C24.0394 27.0784 24.4863 27.8119 24.9914 28.5C27.0313 27.869 29.1061 26.9049 31.245 25.3156C31.7579 19.9189 30.3689 15.2398 27.5733 11.0912ZM14.8969 22.4526C13.6769 22.4526 12.6764 21.3208 12.6764 19.9425C12.6764 18.5643 13.6555 17.4305 14.8969 17.4305C16.1383 17.4305 17.1388 18.5623 17.1175 19.9425C17.1194 21.3208 16.1383 22.4526 14.8969 22.4526ZM23.103 22.4526C21.883 22.4526 20.8825 21.3208 20.8825 19.9425C20.8825 18.5643 21.8616 17.4305 23.103 17.4305C24.3444 17.4305 25.345 18.5623 25.3236 19.9425C25.3236 21.3208 24.3444 22.4526 23.103 22.4526Z"
        fill="white"
      />
    </svg>
  );
}

const SOCIALS = [
  { label: "Instagram", Icon: InstagramIcon, href: "#" },
  { label: "LinkedIn", Icon: LinkedinIcon, href: "#" },
  { label: "WhatsApp community", Icon: WhatsappIcon, href: "#" },
  { label: "Discord", Icon: DiscordIcon, href: "#" },
];

export function Footer() {
  const [ref, live] = useInView(0);

  return (
    <footer
      ref={ref}
      className={`relative isolate overflow-hidden bg-black ${live ? "ts-live" : ""}`}
    >
      <div className="relative mx-auto max-w-[1440px] lg:min-h-[553px]">
        {/* Desktop layout — design coordinates. */}
        <img
          src={A.logoFooter}
          alt="TrackShift — Build. Compete. Innovate. In association with Plaksha University and TGR Haas F1 Team"
          width={DIMS.logoFooter.w}
          height={DIMS.logoFooter.h}
          decoding="async"
          className="absolute left-[172px] top-[87px] hidden h-[327px] w-[369px] object-contain lg:block"
        />

        <div className="absolute left-[955px] top-[154px] hidden flex-col gap-[14px] lg:flex">
          {SOCIALS.map(({ label, Icon, href }) => (
            <a key={label} href={href} className="group flex items-center gap-[16px]">
              <Icon />
              <span className="font-helvetica text-[18px] font-extrabold text-white transition-colors group-hover:text-haas-red">
                {label}
              </span>
            </a>
          ))}
        </div>

        {/* Legal line — 114:436/437/439, all at 50% opacity. Privacy policy
            link (114:438) removed per brand guidelines. */}
        <div className="absolute left-[182px] top-[469px] hidden opacity-50 lg:block">
          <span className="inline-block text-[12px] leading-none text-white">
            <span className="mr-[4px] inline-block h-[12px] w-[12px] rounded-full border border-white text-center leading-[10px]">
              c
            </span>
            <span className="mr-[14px] font-semibold">Trackshift 2O26</span>
            <span className="font-semibold">{redPunct("All rights reserved.")}</span>
          </span>
        </div>

        {/* Mobile layout. */}
        <div className="flex flex-col items-center px-6 pb-10 pt-14 lg:hidden">
          <img
            src={A.logoFooter}
            alt="TrackShift — Build. Compete. Innovate. In association with Plaksha University and TGR Haas F1 Team"
            width={DIMS.logoFooter.w}
            height={DIMS.logoFooter.h}
            decoding="async"
            className="h-[160px] w-[180px] object-contain"
          />
          <div className="mt-8 flex w-full max-w-[320px] flex-col gap-4">
            {SOCIALS.map(({ label, Icon, href }) => (
              <a key={label} href={href} className="flex items-center gap-4">
                <Icon />
                <span className="font-helvetica text-[16px] font-extrabold text-white">{label}</span>
              </a>
            ))}
          </div>
          <p className="mt-10 text-center text-[12px] font-semibold text-white">
            {redPunct("© Trackshift 2O26 · All rights reserved.")}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
