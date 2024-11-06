import { z } from "zod";

export namespace DreamToImage {
  export const input = z.object({
    dream: z.string(),
  });

  export const output = z.object({
    id: z.string(),
  });

  export type Input = z.infer<typeof input>;
  export type Output = z.infer<typeof output>;
}
