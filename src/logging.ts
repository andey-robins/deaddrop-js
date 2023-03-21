import { connect } from "./db/db"

export const userReadMessage = async (username: string) => {
    let db = await connect();
   
    await db.run(`
        INSERT INTO MessageRead
            (username)
        VALUES (
            (SELECT user FROM Users WHERE user = :user)
        )
`, {
    ":user": username,
   });
}

export const userSentMessage = async (username: string) => {
   let db = await connect();
    
    await db.run(`
    INSERT INTO MessageSent
            (username)
        VALUES (
            (SELECT user FROM Users WHERE user = :user)
        )
`, {
    ":user": username,
   });
}

/*export const originalMessage = async (message: string) => {
    let db = await connect();

    await db.run(`
    INSERT INTO OriginalMessages
          (message)
    VALUES (
        (SELECT message FROM Messages WHERE message  = :message)
        )
    `, {
        ":message": message,
    });   
}*/
