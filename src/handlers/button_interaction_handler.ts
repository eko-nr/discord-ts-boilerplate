import { ButtonInteraction, CacheType, Client, Interaction, Message } from 'discord.js';
import { ownerGuard } from '../guards/owner_guard';
import { InteractionId } from '../constants/InteractionId';
import setupWallet from '../interactions/setup_wallet';

export class ButtonInteractionHandler {
    private ownerId: string;

    constructor(ownerId: string) {
        this.ownerId = ownerId;
    }

    public async handle(interaction: ButtonInteraction<CacheType>) {
        switch (interaction.customId) {
            case InteractionId.setupWallet:
                setupWallet(interaction)
                break;

            
            
            default:
                break;
        }
    }
}