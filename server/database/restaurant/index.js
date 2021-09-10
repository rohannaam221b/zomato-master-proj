import mongoose from "mongoose";


const RestaurantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    mapLocation: { type: String, required: true },
    cuisine: [String],
    restaurantTimings: Number,
    contactNumber: Number,
    website: Number,
    popularDish: [String],
    averageCost: Number,
    amenties: [String],
    menuImages: {
        type: mongoose.Types.ObjectId,
        ref: "Images",
    },
    menu: {
        type: mongoose.Types.ObjectId,
        ref: "Menus",
    },
    reviews: [{ type: mongoose.Types.ObjectId, ref: "Reviews" }],
    photos: { type: mongoose.Types.ObjectId, ref: "Images" },
},
    {
        timestamps: true, //this will give createdAt and updatedAt
    });


const RestaurantModel = mongoose.model("Restaurants", RestaurantSchema);