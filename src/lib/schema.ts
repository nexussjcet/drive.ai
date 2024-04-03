import {AvailableActions} from "initiative/chain"
import z, {type infer as Infer} from "zod"

const fileEnum = z.enum(["txt", "pdf", "md"])

const status = z.union([
    z.literal("success"),
    z.literal("failed"),
    z.literal("in-progress"),
    z.literal("permission denied"),
])

const ContactZod = z.object({

})

const AvailableActions = {

    convertFileFromTo: z.function()
    .describe("When action requires to convert one form to another, to continue in execution order. ")
    .args(z.object({ fromFileType: fileEnum, toFileType:fileEnum, fileSource: z.string(), fileDestination: z.string()}))
    .returns(status),

    readFile: z.function()
    .describe("When action requires to read some file from source, to continue in execution order. ")
    .args(z.object({ fileSource: z.string() }))
    .returns(z.any()),

    writeFile: z.function()
    .describe("When action requires to write some file to destination, to continue in execution order. ")
    .args(z.object({ fileDestination: z.string(), fileContentText: z.string().optional(), fileContentBuffer: z.any().optional() }))
    .returns(status),

    summarizeText: z.function()
    .describe("When action requires to summarize text, to continue in execution order. ")
    .args(z.object({ text: z.string() }))  
    .returns(z.string()),  

    sentEmail: z.function()
    .describe("When action requires to send email to someone, to continue in execution order. ")
    .args(z.object({ email: z.string(), subject: z.string(), body: z.string() }))
    .returns(status),

    findContact: z.function()
    .describe("When action requires to find contact by name, to continue in execution order. ")
    .args(z.object({ name: z.string() }))
    .returns(z.array(z.object({ name: z.string(), email: z.string() }))),

    searchFile: z.function()
    .describe("When action requires to search file by name, to continue in execution order. ")
    .args(z.object({ fileName: z.string() }))
    .returns(z.array(z.string())),

} satisfies AvailableActions

export const AvailableActionsZod = z.object(AvailableActions)

export const GetZodParam = <K extends keyof RawAvailableActions>(key: K) => {
    return AvailableActions[key]._def.args.items[0]
}

export const GetZodReturn = <K extends keyof RawAvailableActions>(key: K) => {
    return AvailableActions[key]._def.returns
}
// : Parameters<Infer<RawAvailableActions[K]>>
export type RawAvailableActions = typeof AvailableActions
export type RawAvailableActionsKeys = keyof typeof AvailableActions


export type GetActionParam<K extends keyof RawAvailableActions> = Parameters<Infer<RawAvailableActions[K]>>[0]
export type GetActionReturn<K extends keyof RawAvailableActions> = ReturnType<Infer<RawAvailableActions[K]>>

export type AFC<K extends keyof RawAvailableActions> = React.FunctionComponent<{data:GetActionReturn<K>}>