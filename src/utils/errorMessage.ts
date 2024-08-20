import { Message } from "discord.js";

export default async(message: Message) => {
    await message.channel.send({
        content: "Sorry, there was an error on the server side"
    });
}