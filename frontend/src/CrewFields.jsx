import { inputClass, labelClass } from "./fieldStyles";

const CREW_TYPES = [
  "Photography",
  "Videography",
  "Security",
  "Event Staff",
  "Technical",
  "Production",
  "Other",
];

export default function CrewFields({ data, onChange }) {
  return (
    <div>
      <h2 className="text-2xl font-medium text-gray-900">Crew details</h2>
      <p className="mt-1.5 text-[15px] text-gray-500">
        Tell us who's on the ground and for how long.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Crew type</label>
          <select
            className={inputClass}
            value={data.crewType}
            onChange={(e) => onChange("crewType", e.target.value)}
          >
            <option value="">Select a type</option>
            {CREW_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass}>Number of crew members</label>
          <input
            type="number"
            min="1"
            className={inputClass}
            placeholder="4"
            value={data.crewCount}
            onChange={(e) => onChange("crewCount", e.target.value)}
          />
        </div>

        <div>
          <label className={labelClass}>Working hours</label>
          <input
            type="number"
            min="0"
            className={inputClass}
            placeholder="10"
            value={data.workingHours}
            onChange={(e) => onChange("workingHours", e.target.value)}
          />
        </div>

        <div>
          <label className={labelClass}>Budget (₹)</label>
          <input
            type="number"
            min="0"
            className={inputClass}
            placeholder="40000"
            value={data.crewBudget}
            onChange={(e) => onChange("crewBudget", e.target.value)}
          />
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass}>Responsibilities</label>
          <textarea
            rows={4}
            className={inputClass + " h-auto py-2.5"}
            placeholder="Photography and event coverage..."
            value={data.responsibilities}
            onChange={(e) => onChange("responsibilities", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}