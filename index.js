const express = require('express')
const PORT = 3000
const app = express()
const userRouter = require('./routes/user.routes')
const cors = require('cors')

app.use(cors());
app.use(express.json())
app.use('/api', userRouter)

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))