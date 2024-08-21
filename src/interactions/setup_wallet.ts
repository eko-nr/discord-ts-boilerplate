import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } from "discord.js";
import { InteractionId } from "../constants/InteractionId";
import errorMessage from "../utils/errorMessage";
import { InteractionFn } from "../types/types";

const setupWallet: InteractionFn = async(interaction) => {
    try {
        const descriptionEmbed = "Hello"

        const embed = new EmbedBuilder()
            .setTitle('Setup Wallet')
            .setDescription(descriptionEmbed)
            .setColor('#0099ff');

        const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
            new ButtonBuilder()
                .setCustomId(InteractionId.importWallet)
                .setLabel('📥 Import Wallet')
                .setStyle(ButtonStyle.Primary),

            new ButtonBuilder()
                .setCustomId(InteractionId.generateWallet)
                .setLabel('📄 Generate Wallet')
                .setStyle(ButtonStyle.Primary),
        );

        interaction.update({
            components: [row],
            embeds: [embed],
        });
        
    } catch (error) {
        console.log('error walletMenu:', error);
        errorMessage<typeof interaction>(interaction)
    }
}

export default setupWallet