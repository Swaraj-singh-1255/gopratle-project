const CATEGORY_LABELS = {
  planner: "Event Planner",
  performer: "Performer",
  crew: "Crew",
};

export default function SuccessMessage({ data, onStartOver }) {
  return (
    <div className="py-6 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 animate-pop-in">
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#b89d27"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
      <path className="animate-draw-check" d="M4 12 9 17 20 6" />
        </svg>
      </div>

      <h2 className="mt-5 text-2xl font-medium text-gray-900">
        Requirement posted
      </h2>
      <p className="mx-auto mt-2 max-w-sm text-[15px] text-gray-500">
        {CATEGORY_LABELS[data.category] || "Your"} vendors near{" "}
        {data.location || "your location"} can now see{" "}
        {data.eventName || "your event"} and get in touch.
      </p>

      <button
        onClick={onStartOver}
        className="mt-6 h-11 rounded-md border border-gray-200 bg-white px-5 text-[15px] font-medium text-gray-900"
      >
        Post another requirement
      </button>
    </div>
  );
}