import { Command } from '../types/command';
import walletMenu from "../services/wallet_menu";

const wallet: Command = {
    name: 'wallet',
    description: 'user wallets',
    ownerOnly: false,
    execute: walletMenu
};

export default wallet;