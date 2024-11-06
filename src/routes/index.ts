import { Router } from "express";
import { exampleController } from "../controllers";
import { dreamController } from "../controllers/dream.controller";

export const router = Router();

router.get("/health", exampleController.healthCheck);

router.post("/dream", dreamController.convertDreamToImage);
