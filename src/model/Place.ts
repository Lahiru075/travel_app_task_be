import mongoose, { Schema,Document } from "mongoose";

export interface IPlace extends Document {
    title: string;
    location: string;
    description: string;
    image: string;
    rating: number;
}

const PlaceSchema: Schema = new Schema({
    title: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 }
});

export const Place = mongoose.model<IPlace>('Place', PlaceSchema);