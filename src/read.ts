import { getMessagesForUser, userExists, userReadMessage } from "./db";
import { authenticate } from "./session";

export async function readMessages(user: string) {
    try {
        if (!await userExists(user)) {
            throw new Error("User does not exist");
        }

        if (!await authenticate(user)) {
            throw new Error("Unable to authenticate");
        }

        getMessagesForUser(user).then((messages) => {
            messages.forEach((e: string) => console.log(e, "\n"));
        var userRead = [];  //Desperation using array to log user info
        var date = new Date(); //Date object to log access time
        let time = alert(date);
        userRead.push(user);
        let timeAndDate = time.toString(); //Convert time to string 
        userRead.push(timeAndDate);
        // Taken from https://stackoverflow.com/questions/17614123/node-js-how-to-write-an-array-to-file  
        const fs = require('fs');
        var file = fs.createWriteStream('array.txt');
        file.on('error', function(err) { /* error handling */});
        userRead.forEach(function(v) { file.write(v.join(', ') + '\n'); })
        file.end();
         
        
        userReadMessage(user);  //Attempt at using database to store user will try to figure out later 
        });

    } catch (error) {
        console.error("Error occured during reading.", error);
    }
}
