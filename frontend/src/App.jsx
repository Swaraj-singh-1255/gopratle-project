import { useState } from "react";
import StepIndicator from "./StepIndicator";
import EventBasics from "./EventBasics";
import PlannerFields from "./PlannerFields";
import PerformerFields from "./PerformerFields";
import CrewFields from "./CrewFields";
import RequirementsFields from "./RequirementsFields";
import ReviewStep from "./ReviewStep";
import SuccessMessage from "./SuccessMessage";
import Hero from "./Hero";
import { createRequirement } from "./api";

const INITIAL_DATA = {
  eventName: "",
  eventType: "",
  startDate: "",
  endDate: "",
  location: "",
  venue: "",
  category: "",

  planningService: "",
  guestCount: "",
  eventBudget: "",
  eventSize: "",
  planningRequirements: "",

  performanceType: "",
  performerCount: "",
  performanceDuration: "",
  performanceBudget: "",
  performanceRequirements: "",

  crewType: "",
  crewCount: "",
  workingHours: "",
  crewBudget: "",
  responsibilities: "",

  priority: "medium",
  specialRequirements: "",
  additionalNotes: "",
  contactName: "",
  contactEmail: "",
  contactPhone: "",
};

const CATEGORY_DETAIL_KEYS = {
  planner: ["planningService", "guestCount", "eventBudget", "eventSize", "planningRequirements"],
  performer: ["performanceType", "performerCount", "performanceDuration", "performanceBudget", "performanceRequirements"],
  crew: ["crewType", "crewCount", "workingHours", "crewBudget", "responsibilities"],
};

// checks the current step's required fields and returns an
// error message string, or "" if everything needed is filled in
function validateStep(step, data) {
  if (step === 1) {
    if (!data.eventName.trim()) return "Please enter an event name.";
    if (!data.eventType) return "Please select an event type.";
    if (!data.category) return "Please select a category.";
    if (!data.startDate) return "Please select a start date.";
    if (!data.endDate) return "Please select an end date.";
    if (!data.location.trim()) return "Please enter a location.";
    return "";
  }

  if (step === 2) {
    if (data.category === "planner") {
      if (!data.planningService) return "Please select a planning service.";
      if (!data.guestCount) return "Please enter the number of guests.";
      if (!data.eventBudget) return "Please enter an event budget.";
    } else if (data.category === "performer") {
      if (!data.performanceType) return "Please select a performance type.";
      if (!data.performerCount) return "Please enter the number of performers.";
      if (!data.performanceBudget) return "Please enter a performance budget.";
    } else if (data.category === "crew") {
      if (!data.crewType) return "Please select a crew type.";
      if (!data.crewCount) return "Please enter the number of crew members.";
      if (!data.crewBudget) return "Please enter a crew budget.";
    } else {
      return "Please go back and select a category first.";
    }
    return "";
  }

  if (step === 3) {
    if (!data.contactName.trim()) return "Please enter a contact name.";
    if (!data.contactEmail.trim()) return "Please enter a contact email.";
    if (!data.contactPhone.trim()) return "Please enter a contact phone number.";
    return "";
  }

  return "";
}

function buildPayload(data) {
  const detailKeys = CATEGORY_DETAIL_KEYS[data.category] || [];
  const categoryDetails = {};
  detailKeys.forEach((key) => {
    categoryDetails[key] = data[key];
  });

  return {
    eventName: data.eventName,
    eventType: data.eventType,
    startDate: data.startDate,
    endDate: data.endDate,
    location: data.location,
    venue: data.venue,
    category: data.category,
    categoryDetails,
    priority: data.priority,
    specialRequirements: data.specialRequirements,
    additionalNotes: data.additionalNotes,
    contact: {
      name: data.contactName,
      email: data.contactEmail,
      phone: data.contactPhone,
    },
  };
}

function App() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(INITIAL_DATA);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = (field, value) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const handleContinue = () => {
    const error = validateStep(step, data);
    if (error) {
      alert(error);
      return;
    }
    setStep((s) => Math.min(s + 1, 4));
  };

  const handleSubmit = async () => {
    // one last check across every required field before we actually
    // post to the backend, in case something got cleared after
    // going back and forth between steps
    for (let s = 1; s <= 3; s++) {
      const error = validateStep(s, data);
      if (error) {
        alert(error);
        setStep(s);
        return;
      }
    }

    setSubmitting(true);
    setSubmitError("");
    try {
      const result = await createRequirement(buildPayload(data));
      console.log("Saved to MongoDB:", result);
      setSubmitted(true);
    } catch (err) {
      setSubmitError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const startOver = () => {
    setData(INITIAL_DATA);
    setSubmitError("");
    setSubmitted(false);
    setStep(1);
    setShowForm(false);
  };

  const renderStep2 = () => {
    if (data.category === "planner")
      return <PlannerFields data={data} onChange={handleChange} />;
    if (data.category === "performer")
      return <PerformerFields data={data} onChange={handleChange} />;
    if (data.category === "crew")
      return <CrewFields data={data} onChange={handleChange} />;
    return <p className="text-gray-500">Pick a category in step 1 first.</p>;
  };

  return (
    <main className="min-h-screen bg-[#EAF4F3] flex items-center justify-center px-4 py-12">
      {!showForm ? (
        <Hero onStart={() => setShowForm(true)} />
      ) : (
        <div className="w-full max-w-2xl rounded-2xl border border-gray-200 bg-white p-8 animate-card-in">
          {submitted ? (
            <SuccessMessage data={data} onStartOver={startOver} />
          ) : (
            <>
              <StepIndicator current={step} />

              {step === 1 && <EventBasics data={data} onChange={handleChange} />}
              {step === 2 && renderStep2()}
              {step === 3 && (
                <RequirementsFields data={data} onChange={handleChange} />
              )}
              {step === 4 && (
                <ReviewStep data={data} submitError={submitError} />
              )}

              <div className="mt-8 flex justify-between">
                <button
                  onClick={() => setStep((s) => Math.max(s - 1, 1))}
                  className="h-11 rounded-md border border-gray-200 px-5 text-[15px] font-medium cursor-pointer transition hover:bg-gray-50"
                >
                  Back
                </button>

                {step < 4 ? (
                  <button
                    onClick={handleContinue}
                    className="h-11 rounded-md bg-amber-500 px-6 text-[15px] font-medium cursor-pointer transition hover:bg-amber-600"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="h-11 rounded-md bg-amber-500 px-6 text-[15px] font-medium cursor-pointer transition hover:bg-amber-600 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Posting..." : "Post requirement"}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </main>
  );
}

export default App;