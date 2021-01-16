const mongoose = require('mongoose');
const validator = require('validator');
mongoose.connect('mongodb+srv://manojkale:EefjFZqBkvPqyC0V@cluster0.amic5.mongodb.net/TASK-MANAGER-API?retryWrites=true&w=majority', {

    useNewUrlParser: true,
    useCreateIndex: true

}).then(result => {
    console.log('connection established');
}).catch(error => {
    console.log('connection error', error);
})

