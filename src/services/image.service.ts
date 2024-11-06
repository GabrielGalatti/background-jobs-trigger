import { OpenAI, ClientOptions } from "openai";

const configuration: ClientOptions = {
  apiKey: process.env.OPENAI_API_KEY,
};

const openai = new OpenAI(configuration);

export const imageService = {
  async generateImage(prompt: string): Promise<string | undefined> {
    const response = await openai.images.generate({
      prompt: `Crie uma ilustração para o seguinte sonho do usuário: ${prompt}`,
      n: 1,
      size: "1024x1024",
    });

    return response.data[0].url;
  },
};
