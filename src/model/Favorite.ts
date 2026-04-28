import mongoose, { Schema, Document } from 'mongoose';

export interface IFavorite extends Document {
    userId: string;
    placeId: mongoose.Types.ObjectId;
    addedAt: Date;
}

const FavoriteSchema: Schema = new Schema({
    userId: { type: String, required: true },
    placeId: { type: Schema.Types.ObjectId, ref: 'Place', required: true }
}, {
    timestamps: true
});

export const Favorite = mongoose.model<IFavorite>('Favorite', FavoriteSchema);