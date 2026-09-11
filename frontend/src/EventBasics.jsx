import { inputClass, labelClass } from "./fieldStyles";

const EVENT_TYPES = [
  "Wedding",
  "Corporate Event",
  "College Event",
  "Birthday",
  "Concert",
  "Conference",
  "Other",
];

const CATEGORIES = [
  { value: "planner", label: "Event Planner" },
  { value: "performer", label: "Performer" },
  { value: "crew", label: "Crew" },
];

export default function EventBasics({ data, onChange }) {
  return (
    <div>
      <h2 className="text-2xl font-medium text-gray-900">
        Tell us about the event
      </h2>
      <p className="mt-1.5 text-[15px] text-gray-500">
        The basics first — we'll get into specifics next.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className={labelClass}>Event name</label>
          <input
            className={inputClass}
            placeholder="College Fest 2026"
            value={data.eventName}
            onChange={(e) => onChange("eventName", e.target.value)}
          />
        </div>

        <div>
          <label className={labelClass}>Event type</label>
          <select
            className={inputClass}
            value={data.eventType}
            onChange={(e) => onChange("eventType", e.target.value)}
          >
            <option value="">Select a type</option>
            {EVENT_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass}>Category</label>
          <select
            className={inputClass}
            value={data.category}
            onChange={(e) => onChange("category", e.target.value)}
          >
            <option value="">Select a category</option>
            {CATEGORIES.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className={labelClass}>Start date</label>
          <input
            type="date"
            className={inputClass}
            value={data.startDate}
            onChange={(e) => onChange("startDate", e.target.value)}
          />
        </div>

        <div>
          <label className={labelClass}>End date</label>
          <input
            type="date"
            className={inputClass}
            value={data.endDate}
            onChange={(e) => onChange("endDate", e.target.value)}
          />
        </div>

        <div>
          <label className={labelClass}>Location</label>
          <input
            className={inputClass}
            placeholder="Ghaziabad"
            value={data.location}
            onChange={(e) => onChange("location", e.target.value)}
          />
        </div>

        <div>
          <label className={labelClass}>Venue (optional)</label>
          <input
            className={inputClass}
            placeholder="RKGIT College"
            value={data.venue}
            onChange={(e) => onChange("venue", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}