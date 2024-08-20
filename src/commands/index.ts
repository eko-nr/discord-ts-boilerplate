import ping from './ping';
import clear from './clear';
import wallet from './wallet';
import { Command } from '../types/command';

const commands: Command[] = [
    ping,
    clear,
    wallet
];

export default commands;