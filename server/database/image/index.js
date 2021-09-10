import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
    images: [
        {
            location: { type: String, required: true },
        },
    ],
},
    {
        timestamps: true, //this will give createdAt and updatedAt
    });


export const ImageModel = mongoose.model("Images", ImageSchema);