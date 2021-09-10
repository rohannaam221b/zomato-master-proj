import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    email: { type: String },
    address: [{ detail: { type: String }, for: { type: String } }],
    phoneNumber: [{ type: Number }]

},
    {
        timestamps: true, //this will give createdAt and updatedAt
    }
);

export const UserModel = mongoose.model("Users", UserSchema);

