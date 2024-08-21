import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } from "discord.js";
import { InteractionId } from "../constants/InteractionId";
import errorMessage from "../utils/errorMessage";
import { InteractionFn } from "../types/types";
import errorHandler from "../handlers/error_handler";

const setupWallet: InteractionFn = errorHandler(async(interaction, error) => {
    if(error.isError){
        errorMessage<typeof interaction>(interaction, error.errors);
        return
    }

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
        
})

export default setupWallet