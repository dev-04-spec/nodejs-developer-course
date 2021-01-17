const express = require('express');
const User=require('../models/user')
const router= new express.Router();

router.post('/users', async (req, res) => {

    try {
        const user = new User(req.body);
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        res.status(400).send(e)
    }

});

router.get('/users', async (req, res) => {

    try {

        const users = await User.find({})
        res.send(users)
    } catch (e) {
        res.status(500).send();
    }

});

router.get('/user/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const user = await User.findById(_id)
        res.send(user)
    } catch (e) {
        res.status(500).send();
    }

});
router.patch('/user/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['update', 'email', 'password', 'age'];
    const isValidOperation = updates.every(update => {
        return allowedUpdates.includes(update)
    })

    if (isValidOperation) {

        return res.status(400).send({
            error: 'Invalid updates !'
        })
    }

    try {

        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        if (!user) {
            res.status(404).send();
        }
        res.send(user);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.delete('/user/:id',async (req, res) => {

    try{
        const user =await User.findByIdAndDelete(req.params.id);
        if(!user){
            res.status(404).send();
        }
        res.send(user);
    }catch(e){
        res.status(500).send();
    }
});

module.exports = router;