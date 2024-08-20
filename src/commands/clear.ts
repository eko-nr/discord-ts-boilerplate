import { TextChannel } from "discord.js";
import { Command } from "../types/command";

const clear: Command = {
    name: 'clear_all',
    description: 'Clear all message',
    ownerOnly: false,
    execute: async(client, message, args) => {
        const channel = message.channel as TextChannel;

    },
    
};

export default clear;