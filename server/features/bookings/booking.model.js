const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookingSchema = new Schema({
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
    match: [/.+\@.+\..+/, "Invalid Email Address"],
  },
  userName: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
    default: false,
  },
});

BookingSchema.set("toJSON", {
  transform: function (_, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

module.exports = mongoose.model("Booking", BookingSchema);
