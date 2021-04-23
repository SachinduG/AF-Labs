const Router = require('@koa/router'),
    {getPosts, getPost, createPost, deletePost, updatePost} = require('../api/posts.api');

const router = new Router({
    prefix: '/posts'
});

router.get('/', async ctx => {
    ctx.body = await getPosts();
});

router.get('/:id', async ctx => {
    const id = ctx.params.id;
    ctx.body = await getPost(id);
});

router.post('/', async ctx => {
   let post = ctx.request.body;
   post = await createPost(post);
   ctx.response.status = 201;
   ctx.body = post;
});

router.put('/:id', async ctx =>{
    const id = ctx.params.id;
    let post = ctx.request.body;
    post = await updatePost(id, post);
    ctx.body = post;
});


router.delete('/:id', async ctx => {
    const  id = ctx.params.id;
    ctx.response.status = 204;
    ctx.body = await deletePost(id);

})
module.exports = router;