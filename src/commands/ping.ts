import { Client, Message } from "discord.js";
import errorHandler from "../handlers/errorHandler";
import { Command } from '../types/command';

const ping: Command = {
    name: 'ping',
    description: 'Replies with Pong!',
    ownerOnly: false,
    execute: async(client: Client, message: Message, args) => {
        message.channel.send('Pong!');
    },
};

export default ping;