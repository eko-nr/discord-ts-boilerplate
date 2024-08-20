import { Client, Message } from 'discord.js';

export type CommandExecuteFn = (client: Client, message: Message, args: string[]) => Promise<void>;

export interface Command {
    name: string;
    description: string;
    ownerOnly: boolean,
    execute: CommandExecuteFn;
}
