const CATEGORY_LABELS = {
  planner: "Event Planner",
  performer: "Performer",
  crew: "Crew",
};

const CATEGORY_DETAIL_ROWS = {
  planner: [
    ["planningService", "Planning service"],
    ["guestCount", "Guests"],
    ["eventBudget", "Budget"],
    ["eventSize", "Event size"],
  ],
  performer: [
    ["performanceType", "Performance type"],
    ["performerCount", "Performers"],
    ["performanceDuration", "Duration (hrs)"],
    ["performanceBudget", "Budget"],
  ],
  crew: [
    ["crewType", "Crew type"],
    ["crewCount", "Crew members"],
    ["workingHours", "Working hours"],
    ["crewBudget", "Budget"],
  ],
};

function Row({ label, value }) {
  return (
    <div className="flex items-baseline justify-between gap-4 py-2">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="text-right text-[15px] text-gray-900">
        {value || "—"}
      </span>
    </div>
  );
}

export default function ReviewStep({ data, submitError }) {
  const detailRows = CATEGORY_DETAIL_ROWS[data.category] || [];

  return (
    <div>
      <h2 className="text-2xl font-medium text-gray-900">
        Review your requirement
      </h2>
      <p className="mt-1.5 text-[15px] text-gray-500">
        Check the details below, then send it to vendors.
      </p>

      <div className="mt-6 rounded-lg border border-gray-200 bg-white px-5">
        <Row label="Event" value={data.eventName} />
        <Row label="Event type" value={data.eventType} />
        <Row
          label="Dates"
          value={
            data.startDate && data.endDate
              ? `${data.startDate} to ${data.endDate}`
              : "—"
          }
        />
        <Row label="Location" value={data.location} />
        <Row label="Venue" value={data.venue} />
        <Row label="Category" value={CATEGORY_LABELS[data.category]} />

        <div className="my-2 h-px bg-gray-200" />

        {detailRows.map(([key, label]) => (
          <Row key={key} label={label} value={data[key]} />
        ))}

        <div className="my-2 h-px bg-gray-200" />

        <Row label="Priority" value={data.priority} />
        <Row label="Contact" value={data.contactName} />
        <Row label="Email" value={data.contactEmail} />
        <Row label="Phone" value={data.contactPhone} />
      </div>

      {submitError && (
        <p className="mt-4 text-sm text-red-600">{submitError}</p>
      )}
    </div>
  );
}