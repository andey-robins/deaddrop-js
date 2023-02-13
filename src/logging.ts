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
    ":username": username,
   });
}
