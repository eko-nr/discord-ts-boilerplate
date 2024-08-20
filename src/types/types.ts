import { ButtonInteraction, CacheType, Message } from "discord.js";

export type InteractionFn = (interaction: ButtonInteraction<CacheType>) => void | Promise<void>

export type ErrorMessageParams<T> = T extends ButtonInteraction<CacheType> ? ButtonInteraction<CacheType> : Message;

export type ErrorHandlerParams<T extends any[]> = [...T, isError: boolean]