import { getMessagesForUser, userExists, } from "./db";
import { userReadMessage } from "./logging"
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
        let time = date.toString(); 
      
            
        userRead.push(user);        //Push user name
        userRead.push(time + ', '); //Push time accessed
            
        let log = userRead.toString(); //Convert array to string
      
         
        const fs = require('fs');    
            
      fs.writeFile("logging.txt", log, (err) => {
         if (err)
           console.log(err);
        }
       });
         
        
        //userReadMessage(user);  //Attempt at using database to store user will try to figure out later 
        });

    } catch (error) {
        console.error("Error occured during reading.", error);
    }
}
