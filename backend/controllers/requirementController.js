const Requirement = require("../models/Requirement");

// POST /api/requirements
const createRequirement = async (req, res) => {
  try {
    const requirement = await Requirement.create(req.body);
    res.status(201).json(requirement);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// GET /api/requirements
// GET /api/requirements?category=performer
const getRequirements = async (req, res) => {
  try {
    const filter = {};
    if (req.query.category) {
      filter.category = req.query.category;
    }
    const requirements = await Requirement.find(filter).sort({ createdAt: -1 });
    res.status(200).json(requirements);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /api/requirements/:id
const getRequirementById = async (req, res) => {
  try {
    const requirement = await Requirement.findById(req.params.id);
    if (!requirement) {
      return res.status(404).json({ message: "Requirement not found" });
    }
    res.status(200).json(requirement);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createRequirement,
  getRequirements,
  getRequirementById,
};