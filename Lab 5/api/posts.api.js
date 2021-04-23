let posts = new Map();
const UUID = require('uuid');

let createPost = (obj) => {
    let post = {
        id: UUID.v4(),
        date: new Date(),
        name: obj.name,
        description: obj.description
    };
    posts.set(post.id, post);
    return posts;
};

let getPosts =() =>{
    return [...posts.values()]
};

let getPost =() =>{
    return posts.get(id);
};

module.exports = {
    createPost,
    getPosts,
    getPost
};