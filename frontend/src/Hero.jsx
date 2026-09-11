import leafLeft from "./assets/leaf.png";
import leafRight from "./assets/right.png";

export default function Hero({ onStart }) {
  return (
    <section className=" h-[600px] w-[1000px] relative overflow-hidden px-6 py-24 text-center">
        <img
  src={leafLeft}
  alt=""
  className="pointer-events-none absolute -left-2 top-1/2 h-72 w-40 -translate-y-1/2 object-contain opacity-90"
/>

<img
  src={leafRight}
  alt=""
  className="pointer-events-none absolute -right-2 top-1/2 h-100 w-40 -translate-y-1/2 object-contain opacity-90"
/>
      <svg
        className="pointer-events-none absolute -left-10 -top-10 h-64 w-64 opacity-70"
        viewBox="0 0 200 200"
      >
        <path
          d="M10 190 C 40 140, 30 80, 70 40 C 100 10, 140 20, 150 10"
          fill="none"
          stroke="#2AA9A0"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="70" cy="40" r="4" fill="#C9A227" opacity="0.6" />
        <circle cx="100" cy="70" r="3" fill="#C9A227" opacity="0.5" />
        <circle cx="130" cy="30" r="2.5" fill="#2AA9A0" opacity="0.4" />
      </svg>

      <svg
        className="pointer-events-none absolute -bottom-10 -right-10 h-64 w-64 opacity-70"
        viewBox="0 0 200 200"
      >
        <path
          d="M190 10 C 160 60, 170 120, 130 160 C 100 190, 60 180, 50 190"
          fill="none"
          stroke="#2AA9A0"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="130" cy="160" r="4" fill="#C9A227" opacity="0.6" />
        <circle cx="100" cy="130" r="3" fill="#C9A227" opacity="0.5" />
        <circle cx="70" cy="170" r="2.5" fill="#2AA9A0" opacity="0.4" />
      </svg>

      <div className="relative mx-auto flex max-w-xl items-center justify-center gap-3">
        <span className="h-px flex-1 bg-[#2AA9A0]/40" />
        <span
          className="whitespace-nowrap text-xs tracking-widest text-[#2AA9A0]"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          TRUSTED BY EVENT VENDORS
        </span>
        <span className="h-px flex-1 bg-[#2AA9A0]/40" />
      </div>

      <h1
        className="relative mx-auto mt-6 max-w-2xl text-5xl leading-tight text-[#1F3A38] sm:text-6xl"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
      >
        Tell us about the event
      </h1>

      <p
        className="relative mx-auto mt-4 max-w-md text-[15px] text-[#4B6664]"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        A few details now, and the right planners, performers, or crew will
        find you.
      </p>

      <button
        onClick={onStart}
        className="relative mt-8 h-12 cursor-pointer rounded-md bg-[#2AA9A0] px-8 text-[15px] font-medium text-white transition hover:bg-[#1F8A82]"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        Get started
      </button>
    </section>
  );
}