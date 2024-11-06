import { task } from "@trigger.dev/sdk/v3";
import { imageService } from "../services/image.service";

export const generateImageTask = task({
  id: "generate-image",
  retry: {
    maxAttempts: 3,
  },
  run: async (dream: string, { ctx }) => {
    const imageUrl = await imageService.generateImage(dream);

    if (!imageUrl) {
      throw new Error("Failed to generate image");
    }

    return {
      imageUrl,
    }
  },
});