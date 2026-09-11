const STEP_LABELS = ["Event", "Details", "Requirements", "Review"];

export default function StepIndicator({ current }) {
  return (
    <div className="mb-6">
      <div className="flex items-baseline gap-6">
        {STEP_LABELS.map((label, i) => {
          const step = i + 1;
          const isActive = step === current;
          const isDone = step < current;
          return (
            <div key={label} className="flex flex-col gap-2">
              <span
                className={
                  isActive
                    ? "text-sm font-medium text-gray-900"
                    : isDone
                    ? "text-sm text-gray-500"
                    : "text-sm text-gray-400"
                }
              >
                {label}
              </span>
              <span
                className={
                  isActive
                    ? "block h-[3px] w-8 rounded-full bg-amber-500"
                    : isDone
                    ? "block h-[3px] w-8 rounded-full bg-gray-800/30"
                    : "block h-[3px] w-8 rounded-full bg-gray-200"
                }
              />
            </div>
          );
        })}
      </div>
      <div className="mt-5 h-px bg-gray-200" />
    </div>
  );
}