import { Client, Message } from "discord.js";
import errorHandler from "../handlers/error_handler";
import { Command } from '../types/command';

const ping: Command = {
    name: 'ping',
    description: 'Replies with Pong!',
    ownerOnly: true,
    execute: async(client: Client, message: Message, args) => {
        message.channel.send('Pong!');
    },
};

export default ping;