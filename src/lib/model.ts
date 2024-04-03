import { TogetherAI } from "@langchain/community/llms/togetherai";
import { createExtraction, chainedActionPrompt } from "@/initiative";
import { type ExtraParams, Schema, UserState } from "./schema";
import { getZodChainedCombined, implementChain } from "@/initiative/chain";


export const materials = getZodChainedCombined(Schema, UserState);
export const init = implementChain(Schema, materials, {
  functions: (_extra: ExtraParams, state) => ({
    convertFileFromTo: async () => await Promise.resolve("success"),
    readFile: () => "success",
    findContact: () => [{ name: "name", email: "email" }],
    searchFile: () => ["success"],
    sentEmail: () => "success",
    summarizeText: () => "success",
    writeFile: () => "success",
  }),
  state: UserState,
  examples: [],
});

export const model = new TogetherAI({
  modelName: "mistralai/Mixtral-8x7B-Instruct-v0.1",
  apiKey: process.env.API_KEY,
});

export const chain = await createExtraction(
  model,
  init,
  {
    combinedZod: materials.combinedZod,
    stateZod: materials.stateZod,
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  chainedActionPrompt,
);
