import { Client, Message } from 'discord.js';
import { Command } from '../types/command';
import { ownerGuard } from '../guards/ownerGuard';
import commands from "../commands"

export class CommandHandler {
    private ownerId: string;

    constructor(ownerId: string) {
        this.ownerId = ownerId;
    }

    public async handle(client: Client, message: Message) {
        if (message.author.bot) return;

        const args = message.content.slice(1).split(/ +/);
        const commandName = args.shift()?.toLowerCase();
        const command = commands.find((cmd) => cmd.name === commandName);

        if (command) {
            if (command.ownerOnly && !ownerGuard(message, this.ownerId)) {
                return; 
            }

            command.execute(client, message, args);
        } else {
            message.channel.send(`Unknown command`);
        }
    }
}