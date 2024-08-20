import { Message } from 'discord.js';

export const privacyGuard = (message: Message): boolean => {
    if (message.guildId) {
        message.channel.send(`Unable continue this action, please DM me`);
        return true;
    }
    return false;
};