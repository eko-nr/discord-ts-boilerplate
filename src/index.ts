import dotenv from 'dotenv';
import { Client, GatewayIntentBits, Partials} from 'discord.js';
import { ButtonInteractionHandler, CommandHandler } from './handlers';

dotenv.config();
const token = process.env.DISCORD_TOKEN || "";
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages,
    ],
    partials: [Partials.Channel],
});
const ownerId = process.env.OWNER_ID || '';
const commandHandler = new CommandHandler(ownerId);
const buttonInteractionHandler = new ButtonInteractionHandler(ownerId);

client.on('messageCreate', (message) => {
    commandHandler.handle(client, message);
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    if (interaction.isButton()) {
        buttonInteractionHandler.handle(interaction)
    }
});

client.once('ready', async() => {
    console.log("Bot is ready!")
});

client.on('error', (error) => {
    console.log('client.on', 'error:', error);
});

client.login(token);