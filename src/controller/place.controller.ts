import { Request, Response } from "express";
import { Place } from "../model/Place";
import cloudinary from "../config/cloudinary";

export const getPlaces = async (req: Request, res: Response) => {
    try {
        const places = await Place.find();
        res.status(200).json(places);
    } catch (error) {
        res.status(400).json({ message: "Error fetching places", error });
    }
};

export const createPlace = async (req: Request, res: Response) => {
    try {
        const { title , location, description , rating } = req.body;

        if (!title || !location || !description || !rating) {
            return res.status(400).json({ message: "All fields are required" });
        }

        let newPlace = new Place({
            title,
            location,
            description,
            rating
        });

        if (req.file) {
            const result: any = await new Promise((resolve, reject) => {
                const upload_stream = cloudinary.uploader.upload_stream(
                    { folder: "travel_app_task_flutter" },
                    (error, result) => {
                        if (error) {
                            console.error(error);
                            return reject(error);
                        }
                        resolve(result);
                    }
                )
                upload_stream.end(req.file?.buffer);
            })
            newPlace.image = result.secure_url;
        }

        const savedPlace = await newPlace.save();
        res.status(201).json(savedPlace);

    } catch (error) {
        res.status(400).json({ message: "Error creating place", error });
    }
}