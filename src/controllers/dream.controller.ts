import { Request, Response } from "express";

import { DreamToImage } from "../schemas";
import { generateImageTask } from "../trigger/generateImage";

export const dreamController = {
  async convertDreamToImage(req: Request, res: Response) {
    const { dream } = DreamToImage.input.parse(req.body);
    const { id } = await generateImageTask.trigger(dream);
    const output = DreamToImage.output.parse({ id });
    res.status(200).json(output);
  },
};
