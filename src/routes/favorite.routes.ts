import { Router } from "express";
import { getFavorites, toggleFavorite } from "../controller/favorite.controller";
import { authenticate } from "../middleware/authenticate";

const router = Router();

router.post("/toggle", authenticate, toggleFavorite);
router.get("/", authenticate, getFavorites);

export const favoriteRoutes = router;