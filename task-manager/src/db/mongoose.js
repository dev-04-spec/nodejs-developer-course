const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://manojkale:cYTaRHEB7mWk51cJ@cluster0.amic5.mongodb.net/TASK-MANAGER-API', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})