import mongoose, { Document, Schema } from "mongoose";
import { toZonedTime } from "date-fns-tz";

interface IBooking extends Document {
  companyId: mongoose.Schema.Types.ObjectId;
  orderDateTime: Date;
  userEmail: string;
  userName: string;
  status: boolean;
}

const BookingSchema = new Schema<IBooking>({
  companyId: {
    type: Schema.Types.ObjectId,
    ref: "Business",
    required: true,
  },
  orderDateTime: {
    type: Date,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
    match: [/.+@.+\..+/, "Invalid Email Address"],
  },
  userName: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
    default: true,
  },
});


BookingSchema.set("toJSON", {
  transform: function (_, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

const Booking = mongoose.model<IBooking>("Booking", BookingSchema);

export default Booking;
