import { Client, Interaction, Message } from 'discord.js';
import { ownerGuard } from '../guards/ownerGuard';

export class ButtonInteractionHandler {
    private ownerId: string;

    constructor(ownerId: string) {
        this.ownerId = ownerId;
    }

    public async handle(interaction: Interaction) {

    }
}