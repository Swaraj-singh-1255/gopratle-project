import { inputClass, labelClass } from "./fieldStyles";

const SERVICES = [
  "Full Event Planning",
  "Day-of Coordination",
  "Venue Sourcing Only",
  "Decor and Styling",
  "Vendor Management",
];

const SIZES = ["Small (under 50)", "Medium (50-200)", "Large (200+)"];

export default function PlannerFields({ data, onChange }) {
  return (
    <div>
      <h2 className="text-2xl font-medium text-gray-900">Planning details</h2>
      <p className="mt-1.5 text-[15px] text-gray-500">
        Help planners understand the scope before they quote.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Planning service</label>
          <select
            className={inputClass}
            value={data.planningService}
            onChange={(e) => onChange("planningService", e.target.value)}
          >
            <option value="">Select a service</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass}>Event size</label>
          <select
            className={inputClass}
            value={data.eventSize}
            onChange={(e) => onChange("eventSize", e.target.value)}
          >
            <option value="">Select a size</option>
            {SIZES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass}>Number of guests</label>
          <input
            type="number"
            min="0"
            className={inputClass}
            placeholder="500"
            value={data.guestCount}
            onChange={(e) => onChange("guestCount", e.target.value)}
          />
        </div>

        <div>
          <label className={labelClass}>Event budget (₹)</label>
          <input
            type="number"
            min="0"
            className={inputClass}
            placeholder="500000"
            value={data.eventBudget}
            onChange={(e) => onChange("eventBudget", e.target.value)}
          />
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass}>Planning requirements</label>
          <textarea
            rows={4}
            className={inputClass + " h-auto py-2.5"}
            placeholder="Need complete event management..."
            value={data.planningRequirements}
            onChange={(e) => onChange("planningRequirements", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}