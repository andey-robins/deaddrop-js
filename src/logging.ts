import { connect } from "./db/db"

export const userReadMessage = async (user: string) => {
    let db = await connect();
   
    await db.run(`
        INSERT INTO MessageRead
            (user)
        VALUES (
            (SELECT user FROM Users WHERE user = :user)
        )
`, {
    ":user": username,
   });
}
