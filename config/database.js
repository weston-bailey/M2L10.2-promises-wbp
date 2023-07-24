const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection

db.on("connected", () => console.log(`mongoose is connected on ${db.name} @ ${db.host}:${db.port}`))
db.on("error", err => console.log("mongoose is mad:", err))