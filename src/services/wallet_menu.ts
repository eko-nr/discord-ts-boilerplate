import {  CommandExecuteFn, ExecuteParams } from "../types/command";
import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } from "discord.js";
import errorMessage from "../utils/errorMessage";
import { InteractionId } from "../constants/InteractionId";
import errorHandler from "../handlers/error_handler";

const walletMenu: CommandExecuteFn = errorHandler(async(client, message, args, isError) => {
    try {
        const noWallet = "You don't have any wallet, you can setup wallet to generate or import wallet";
        const descriptionEmbed = 
        `1. 💳 trade wallet 💰 0.0021 ETH\n`+
        `0xa1E3F8337EC934D56e2dA4A5864c5F0103220F5f\n\n`+
        `2. 💳 trade wallet 💰 0.0021 ETH\n`+
        `0xa1E3F8337EC934D56e2dA4A5864c5F0103220F5f`

        const embed = new EmbedBuilder()
            .setTitle('Wallet')
            .setDescription(descriptionEmbed)
            .setColor('#0099ff');

        const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
            new ButtonBuilder()
                .setCustomId(InteractionId.setupWallet)
                .setLabel('⚙️ Setup Wallet')
                .setStyle(ButtonStyle.Primary),

            new ButtonBuilder()
                .setCustomId(InteractionId.transferAssets)
                .setLabel('💸 Transfer assets')
                .setStyle(ButtonStyle.Primary),
        );

        message.channel.send({
            components: [row],
            embeds: [embed],
        });
    } catch (error) {
        console.log('error walletMenu:', error);
        errorMessage(message)
    }
})

export default walletMenu