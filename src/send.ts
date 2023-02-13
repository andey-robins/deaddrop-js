/*import readline from "readline";
import { saveMessage, userExists } from "./db";
import { authenticate } from "./session"; // Used to make users sign in before sending a message

export const sendMessage = async (user: string) => {
    try {
        if (!await userExists(user)) {
            throw new Error("Destination user does not exist");
        }
        
        if (!await authenticate(user)) {
            throw new Error("Unable to authenticate"); //Requires user to sign in before sending message
        }

        getUserMessage().then(async (message) => {
            await saveMessage(message, user);
        });


    } catch (error) {
        console.error("Error occured creating a new user.", error);
    }
}

const getUserMessage = async (): Promise<string> => {
    let rl = readline.createInterface(process.stdin, process.stdout);
    let message: string = await new Promise(resolve => rl.question("Enter your message: ", resolve));
    rl.close();
    return message;
}
*/
