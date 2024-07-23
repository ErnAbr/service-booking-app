import mongoose, { Document, Schema } from "mongoose";

interface IBusiness extends Document {
  companyName: string;
  description: string;
  address: string;
  category: string;
  representative: string;
  email: string;
  photoUrl: string;
}

const BusinessSchema = new mongoose.Schema<IBusiness>({
  companyName: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  representative: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, "Invalid Email Address"],
  },
  photoUrl: {
    type: String,
    required: true,
  },
});

BusinessSchema.set("toJSON", {
  transform: function (_, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

const Business = mongoose.model<IBusiness>("Business", BusinessSchema);

export default Business;
