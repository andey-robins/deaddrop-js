import { connect } from "./db/db"

export const userReadMessage = async (reader: string, username: string) => {
    let db = await connect();
   
    await db.run(`
        INSERT INTO MessageRead
            (reader, username)
        VALUES (
            (SELECT id FROM Users WHERE user = :user),
            (SELECT user FROM Users WHERE user = :user)
        )
`, {
    ":user": reader,
    ":user": username,
   });
}
