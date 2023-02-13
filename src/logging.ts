import { connect } from "./db"

export const userReadMessage = async (reader: string) => {
    let db = await connect();
   
    await db.run(`
        INSERT INTO MessageRead
            (reader)
        VALUES (
            (SELECT id FROM Users WHERE user = :user),
            :reader
        )
`, {
    ":user": reader, 
   });
}
