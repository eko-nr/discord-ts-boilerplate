import { ButtonInteraction, CacheType, Message } from "discord.js";
import { ErrorMessageParams } from "../types/types";
import logger from "./logger";

const errorMessage = async<T>(param: ErrorMessageParams<T>, errors: any) => {
    logger.error(errors);
    
    if(typeof param === typeof Message){
        await param?.channel?.send({
            content: "Sorry, there was an error on the server side"
        });
    }else{
        await param.reply({
            content: "Sorry, there was an error on the server side"
        });
    }
}

export default errorMessage