import { inputClass, labelClass } from "./fieldStyles";

const PRIORITIES = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
  { value: "urgent", label: "Urgent" },
];

export default function RequirementsFields({ data, onChange }) {
  return (
    <div>
      <h2 className="text-2xl font-medium text-gray-900">
        Requirements and contact
      </h2>
      <p className="mt-1.5 text-[15px] text-gray-500">
        Anything else vendors should know, and how to reach you.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass}>Priority</label>
          <select
            className={inputClass}
            value={data.priority}
            onChange={(e) => onChange("priority", e.target.value)}
          >
            {PRIORITIES.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass}>Contact name</label>
          <input
            className={inputClass}
            placeholder="Swaraj Singh"
            value={data.contactName}
            onChange={(e) => onChange("contactName", e.target.value)}
          />
        </div>

        <div>
          <label className={labelClass}>Contact email</label>
          <input
            type="email"
            className={inputClass}
            placeholder="name@email.com"
            value={data.contactEmail}
            onChange={(e) => onChange("contactEmail", e.target.value)}
          />
        </div>

        <div>
          <label className={labelClass}>Contact phone</label>
          <input
            type="tel"
            className={inputClass}
            placeholder="9876543210"
            value={data.contactPhone}
            onChange={(e) => onChange("contactPhone", e.target.value)}
          />
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass}>Special requirements</label>
          <textarea
            rows={3}
            className={inputClass + " h-auto py-2.5"}
            placeholder="Need professional equipment, parking access..."
            value={data.specialRequirements}
            onChange={(e) => onChange("specialRequirements", e.target.value)}
          />
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass}>Additional notes (optional)</label>
          <textarea
            rows={3}
            className={inputClass + " h-auto py-2.5"}
            placeholder="Anything else worth mentioning..."
            value={data.additionalNotes}
            onChange={(e) => onChange("additionalNotes", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}