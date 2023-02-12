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
        console.log(user);
        
        var userRead = [];  //Desperation using array to log user info
            
        var date = new Date(); //Date object to log access time
        let time = date.toString(); 
         console.log(time);
            
        userRead.push(user);        //Push user name
        userRead.push(time + ', '); //Push time accessed
            
        let log = userRead.toString(); //Convert array to string
        console.log(userRead);
         
        const fs = require('fs');                   
        fs.writeFile(log.txt, log, err => {    //Write log out to file
            if(err) {
               console.log(err);
            }
        });
         
        
        userReadMessage(user);  //Attempt at using database to store user will try to figure out later 
        });

    } catch (error) {
        console.error("Error occured during reading.", error);
    }
}
