import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  emailAddress:{ type: String, require: true },
  phoneNumber: { type: String, require: true },
  month: { type: Boolean, require: false },
  yeare: { type: Boolean, require: false },
  subscriptionType: { type: String, require: true },
  OnlineService:{ type: Boolean, require: false },
  largerStorage:{ type: Boolean, require: false },
  CustomizableProfile: { type: Boolean, require: false },
  Price: { type: Number, require: true },
});
const User = mongoose.model("User", userSchema)
export default User;
