import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    food: { type: mongoose.Types.ObjectId, refs: "Foods" },
    restaurant: { type: mongoose.Types.ObjectId, refs: "Restaurants" },
    user: { type: mongoose.Types.ObjectId, refs: "Users" },
    rating: { type: Number, required: true },
    reviewText: { type: String, required: true },
    photos: [{ type: mongoose.Types.ObjectId, refs: "Images" }],
},
    {
        timestamps: true, //this will give createdAt and updatedAt
    }
);

export const ReviewModel = mongoose.model("Reviews", ReviewSchema);