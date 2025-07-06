// Schema
import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  salary: { type: Number, required: true },
  joiningDate: { type: Date, required: true },
});

export default mongoose.models.Employee || mongoose.model("Employee", EmployeeSchema);