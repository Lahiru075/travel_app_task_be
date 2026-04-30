import { Router } from "express";
import { createPlace, getPlaces } from "../controller/place.controller";
import { upload } from "../middleware/upload";
import { authenticate } from "../middleware/authenticate";

const router = Router();

router.get("/", authenticate, getPlaces);
router.post("/", authenticate, upload.single("image"), createPlace);

export const placeRoutes = router;