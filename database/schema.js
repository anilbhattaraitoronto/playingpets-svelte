const schema = `
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);
CREATE TABLE IF NOT EXISTS polls(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    question TEXT NOT NULL,
    choice1 TEXT NOT NULL,
    vote1 INTEGER DEFAULT 0,
    choice2 TEXT NOT NULL,
    vote2 INTEGER DEFAULT 0,
    pollpicture TEXT NOT NULL,
    altText TEXT NOT NULL,
    voter TEXT NOT NULL,
    FOREIGN KEY (voter) REFERENCES users(id) ON DELETE SET DEFAULT
);
`;

module.exports = schema;
