const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      //unique: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      // unique: true,
      trim: true,
    },
    phone: {
      type: Number,
      required: true,
      // unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      //  unique: true,
      trim: true,
    },
    message: {
      type: String,
      required: false,
      //  unique: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
