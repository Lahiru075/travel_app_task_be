import { Router } from "express";
import { getFavorites, toggleFavorite } from "../controller/favorite.controller";

const router = Router();

router.post("/:placeId", toggleFavorite);
router.get("/", getFavorites);

export const favoriteRoutes = router;