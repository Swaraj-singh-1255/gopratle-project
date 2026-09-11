import { useState } from "react";
import StepIndicator from "./StepIndicator";
import EventBasics from "./EventBasics";

const INITIAL_DATA = {
  eventName: "",
  eventType: "",
  startDate: "",
  endDate: "",
  location: "",
  venue: "",
  category: "",
};

function App() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(INITIAL_DATA);

  const handleChange = (field, value) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl rounded-2xl border border-gray-200 bg-white p-8">
        <StepIndicator current={step} />

        {step === 1 && <EventBasics data={data} onChange={handleChange} />}
        {step > 1 && (
          <p className="text-gray-500">Step {step} content goes here.</p>
        )}

        <div className="mt-8 flex justify-between">
          <button
            onClick={() => setStep((s) => Math.max(s - 1, 1))}
            className="h-11 rounded-md border border-gray-200 px-5 text-[15px] font-medium"
          >
            Back
          </button>
          <button
            onClick={() => setStep((s) => Math.min(s + 1, 4))}
            className="h-11 rounded-md bg-amber-500 px-6 text-[15px] font-medium"
          >
            Continue
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;