import mongoose from "mongoose"

const DonationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  guardianName: { type: String, required: true },
  email: { type: String, required: true },
  rollId: { type: String, required: true },
  phone: { type: String, required: true },
  aadhaar: { type: String, required: true },
  bloodType: { type: String, required: true },
  roleType: { type: String, required: true },
  branch: { type: String, required: true },
  dob: { type: Date, required: true },
  location: { type: String, required: true },
  message: { type: String },
  createdAt: { type: Date, default: Date.now },
})

export default mongoose.models.Donation || mongoose.model("Donation", DonationSchema)
