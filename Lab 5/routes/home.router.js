const Router = require('@koa/router');

const router = new Router({
    prefix:'/home'
});

router.get('/', ctx => {
    ctx.body = 'Hello World - get';
});

router.post('/', ctx => {
    ctx.body = 'Hello World - post';
});

module.exports = router;