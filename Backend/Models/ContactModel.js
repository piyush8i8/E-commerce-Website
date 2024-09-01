import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
 
}, { minimize: false });

const ContactModel = mongoose.models.contact || mongoose.model("contact", contactSchema);

export default ContactModel;
