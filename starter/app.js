const express = require('express')
const app = express()
const tasks = require('./routers/tasks.js')
const connectDB = require('./db/connect')
require('dotenv').config()


//middleware
app.use(express.static('./public'))
app.use(express.json())

// routes
app.get('/', (req, res) => {
    res.static('./public')
})

app.use("/api/v1/tasks", tasks)

const port = 3000

const start =  async () => {
    try{
        await connectDB("mongodb+srv://YohaanS:Yohaan1279@project1.uv3lgma.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority")
        app.listen(port, console.log(`Server is listening on port ${port}...`))

    } catch (err) {
        console.log(err)
    }
}

start()
