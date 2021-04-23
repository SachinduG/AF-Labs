const posts = require('./').db('posts').collection('posts');

const save = async ({id, name, description, postedDate}) => {
    const result = await posts.insertOne({id, name, description, postedDate});
    return result.ops[0];
};

const getAll = async () => {
    const cursor = await posts.find();
    return cursor.toArray();
};

const removeById = async id => {
    await posts.deleteOne({id});
};

const update = async (id, {name, description, postedDate }) => {
    const result = await posts.replaceOne({id}, {id, name, description, postedDate});
    return result.ops[0];
};

const getById = async id => {
    return await posts.findOne({id});
};

module.exports = {getAll, save, removeById, update, getById};