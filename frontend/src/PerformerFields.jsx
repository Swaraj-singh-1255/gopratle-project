import { inputClass, labelClass } from "./fieldStyles";

const PERFORMANCE_TYPES = [
  "DJ",
  "Singer",
  "Band",
  "Dancer",
  "Comedian",
  "Anchor",
  "Other",
];

export default function PerformerFields({ data, onChange }) {
  return (
    <div>
      <h2 className="text-2xl font-medium text-gray-900">
        Performance details
      </h2>
      <p className="mt-1.5 text-[15px] text-gray-500">
        What kind of act are you booking, and for how long?
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Performance type</label>
          <select
            className={inputClass}
            value={data.performanceType}
            onChange={(e) => onChange("performanceType", e.target.value)}
          >
            <option value="">Select a type</option>
            {PERFORMANCE_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass}>Number of performers</label>
          <input
            type="number"
            min="1"
            className={inputClass}
            placeholder="2"
            value={data.performerCount}
            onChange={(e) => onChange("performerCount", e.target.value)}
          />
        </div>

        <div>
          <label className={labelClass}>Duration (hours)</label>
          <input
            type="number"
            min="0"
            step="0.5"
            className={inputClass}
            placeholder="3"
            value={data.performanceDuration}
            onChange={(e) => onChange("performanceDuration", e.target.value)}
          />
        </div>

        <div>
          <label className={labelClass}>Budget (₹)</label>
          <input
            type="number"
            min="0"
            className={inputClass}
            placeholder="50000"
            value={data.performanceBudget}
            onChange={(e) => onChange("performanceBudget", e.target.value)}
          />
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass}>Performance requirements</label>
          <textarea
            rows={4}
            className={inputClass + " h-auto py-2.5"}
            placeholder="Need sound system and stage..."
            value={data.performanceRequirements}
            onChange={(e) =>
              onChange("performanceRequirements", e.target.value)
            }
          />
        </div>
      </div>
    </div>
  );
}