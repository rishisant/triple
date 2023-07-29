const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const { v4: uuidv4 } = require('uuid');


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true, useUnifiedTopology: true});

//Import your PostSchema here
const Post = require('./PostSchema');

app.use(cors());
app.use(bodyParser.json());

app.get('/posts', (req, res) => {
    Post.find({}, (err, posts) => {
        if(err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(posts);
        }
    });
});

app.post('/create', async (req, res) => {
    const newPost = new Post({
        title: req.body.title,
        content: req.body.content,
        likes: 0,
        createdAt: Date.now(),
        uuid: uuidv4()
    });

    try {
        const savedPost = await newPost.save();
        res.send(savedPost);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

console.log("Server listening on port 3001")
app.listen(3001);