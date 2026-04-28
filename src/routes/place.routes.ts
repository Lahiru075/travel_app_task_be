import { Router } from "express";
import { createPlace, getPlaces } from "../controller/place.controller";
import { upload } from "../middleware/upload";

const router = Router();

router.get("/", getPlaces);
router.post("/", upload.single("image"), createPlace);

export const placeRoutes = router;