const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter=require('./routers/user')
const taskRouter=require('./routers/task')
const app = express();

const port = process.env.PORT || 3000;
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Server is up on port ', port)
});
const bcrypt=require('bcryptjs');

const myFunction =async (req,res)=>{
    const password="ManojKale";
    const hashPassword=await bcrypt.hash(password,8);
    console.log(password);
    console.log(hashPassword);

    const isMatch=await bcrypt.compare('ManojKale',hashPassword);
    console.log(isMatch)
}
myFunction();