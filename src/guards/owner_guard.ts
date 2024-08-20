import { Message } from 'discord.js';

export const ownerGuard = (message: Message, ownerId: string): boolean => {
    if (message.author.id !== ownerId) {
        message.channel.send('You do not have permission to use this command.');
        return false;
    }
    return true;
};