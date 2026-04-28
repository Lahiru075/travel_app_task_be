import { Request, Response } from "express";
import { Favorite } from "../model/Favorite";

export const toggleFavorite = async (req: Request, res: Response) => {
    const { placeId } = req.body;

    const userId = "user123";

    try {
        const existingFav = await Favorite.findOne({ userId, placeId });

        if (existingFav) {
            await Favorite.deleteOne({ userId, placeId });
            res.status(200).json({ message: "Favorite removed" });
        } else {
            const newFav = new Favorite({ userId, placeId});
            await newFav.save();
            res.status(201).json({ message: "Favorite added" });
        }

    } catch (error) {
        res.status(500).json({ message: "Error toggling favorite", error });
    }
}

export const getFavorites = async (req: Request, res: Response) => {
    const userId = "user123";

    try {
        const favorites = await Favorite.find({ userId });
        res.status(200).json(favorites);
    } catch (error) {
        res.status(500).json({ message: "Error fetching favorites", error });
    }
}