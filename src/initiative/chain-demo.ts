import { TogetherAI } from "@langchain/community/llms/togetherai";
import { z } from "zod";
import { createExtraction } from "./";
import {
  AvailableActions,
  executeChainActions,
  getZodChainedCombined,
  implementChain,
} from "./chain";
import { chainedActionPrompt } from "./lib/prompt";
import { State } from "./state";

const model = new TogetherAI({
  modelName: "mistralai/Mixtral-8x7B-Instruct-v0.1",
  apiKey: process.env.API_KEY,
});

const Schema = {
  searchUserWithName: z
    .function()
    .describe("When action needs imformation of a user to continue in order. ")
    .args(z.object({ name: z.string() }))
    .returns(z.object({ email: z.string() })),
  sentEmailToUser: z
    .function()
    .describe("When action is requisting to sent an email to someone. Pass name of user as param.")
    .args(z.object({ email: z.string() }))
    .returns(z.string()),
} satisfies AvailableActions;

const userState = {
  userSelected: z
    .enum(["YES", "NO"])
    .transform((x) => `User selected ${x} on text permissions`),
  userDragged: z.string().transform((x) => `User dragged ${x} out of the box`),
} satisfies State;

type FuncParam = {
  ctx: object;
  extra: object;
};

const userStateData = {
  userSelected: "YES",
  userDragged: "Toy",
};

const materials = getZodChainedCombined(Schema, userState);

const init = implementChain(Schema, materials, {
  functions: (x: FuncParam, y) => ({
    searchUserWithName: async ({ name }) => ({email:`${name}@gmail.com`}),
    sentEmailToUser: async ({email}) => `Senting email to ${email}`
  }),
  examples: [
    {
      Input: "Find user Rajat",
      Output: [{ searchUserWithName: { name: "Rajat" } }],
    },
    {
      Input: "Sent email to guy named Alex",
      Output: [
        { searchUserWithName: { name: "Alex" } },
        { sentEmailToUser: { email: "unknown" } }
    ],
  },
    {
      Input: "Sent email to this guy",
      Output: [
        { sentEmailToUser: { email: "unknown" } }
      ],
    },
  ],
});

const chain = await createExtraction(
  model,
  init,
  {
    combinedZod: materials.combinedZod,
    stateZod: materials.stateZod,
  },
  chainedActionPrompt
);

const res = await chain.invoke("find Diane, and sent email to her", {
  state: userStateData,
});

console.log(res.response.validated?.success ? res.response.validated.data : "");

const x = await executeChainActions(Schema, init, res, {
  permissions: {
    searchUserWithName: true,
    sentEmailToUser: true,
  },
  params: {
    ctx: {},
    extra: {},
  },
});

console.log(x);
