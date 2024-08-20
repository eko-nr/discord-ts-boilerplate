import { ButtonInteraction, CacheType, Client, Interaction, Message } from 'discord.js';

export type CommandExecuteFn = (client: Client, message: Message, args: string[]) => Promise<void>;

export interface Command {
    name: string;
    description: string;
    ownerOnly: boolean,
    execute: CommandExecuteFn;
}

export type InteractionFn = (interaction: ButtonInteraction<CacheType>) => void | Promise<void>

export type ErrorMessageParams<T> = T extends ButtonInteraction<CacheType> ? ButtonInteraction<CacheType> : Message;