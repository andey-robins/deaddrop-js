#  deaddrop-js

A deaddrop utility written in Typescript. Put files in a database behind a password to be retrieved at a later date.

This is a part of the University of Wyoming's Secure Software Design Course (Spring 2023). This is the base repository to be forked and updated for various assignments. Alternative language versions are available in:
- [Go](https://github.com/andey-robins/deaddrop-go)
- [Rust](https://github.com/andey-robins/deaddrop-rs)

## Versioning

`deaddrop-js` is built with:
- node v18.13.0

## Usage

`npm run build && node dist/index.js --help` for instructions

Then run `node dist/index.js --new --user <username here>` and you will be prompted to create the initial password.

## Database

Data gets stored into the local database file dd.db. This file will not by synched to git repos. Delete this file if you don't set up a user properly on the first go

## Logging Strategy

Attempting to add an additional section to the database to record the users name when the message is read. The other alternative is to use an array and write a file that tracks the users name and when they accessed the file. At the moment I am unable to get either of these approaches to work, and unsure how to debug any of the code. Hoping that I can figure this out before the deadline. Currently I have returned to the creating an extra column in the table to document which user read the message, this is done within the read.ts file; after the system fetches the message for the user. I have added the logging.ts file that contains the method that performes the logging. It was based off of the saveMessage method from messsage.ts, but currently having trouble having the column to log this event being created. On that note I added some code into db.ts to create a new column that refrences the id number from the Users column and uses an 'id' to track the sequence in which messages where opened. In addition a line of code was placed inside index.ts to export the method that was written in loggiging.ts. In terms of security issues that I found during my analysis of this program, logging was the main thing that I suggested adding to increase security by creating a record of what actions were performed by which user. The other change that I suggested implementing was indicating which user sent the message, to do this I would like to implement a sendMessage method into send.ts simliar to teh readMessage method within read.ts that requires a user to sign in before being able to send a message. However, this has gone on the back burner while I try to implement the changes necessary for the logging to occur. I hope that before the deadline this readme has been updated heavily.

Edit 1: 
After some digging I found that I need to add a table to the schema not just a column. But, now I'm  having trouble getting the schema to update; I'll continue to look into it but so far I have no leads. Also, I attempted to add the authenicate method into the sendMessage method within send.ts. However, doing this made no  change to the program while running, still working on how to force the user to enter their password before sending a message. Hopefully, this will all be sorted out on time.
