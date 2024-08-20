import { ButtonInteraction, CacheType, Client, Interaction, Message } from 'discord.js';

export type CommandExecuteFn = (client: Client, message: Message, args: string[]) => Promise<void>;

export type ExecuteParams = Parameters<CommandExecuteFn>


export interface Command {
    name: string;
    description: string;
    ownerOnly: boolean,
    execute: CommandExecuteFn;
}