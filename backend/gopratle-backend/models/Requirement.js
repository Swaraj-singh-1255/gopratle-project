const mongoose = require("mongoose");

const requirementSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      required: true,
      trim: true,
    },
    eventType: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    venue: {
      type: String,
      default: "",
    },
    category: {
      type: String,
      enum: ["planner", "performer", "crew"],
      required: true,
    },
    categoryDetails: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high", "urgent"],
      default: "medium",
    },
    specialRequirements: {
      type: String,
      default: "",
    },
    additionalNotes: {
      type: String,
      default: "",
    },
    contact: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Requirement", requirementSchema);