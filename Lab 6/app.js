const Koa = require('koa'),
    serve = require('koa-static'),
    bodyParser = require('koa-bodyparser')
                require('./dal');

const HomeRouter = require('./routes/home.routes');
const PostRouter = require('./routes/post.routes');

const app = new Koa();

app.use(serve('public/'));

app.use(bodyParser());

app.use(HomeRouter.routes())
    .use(HomeRouter.allowedMethods);

app.use(PostRouter.routes)
    .use(PostRouter.allowedMethods);

app.use(ctx => {
    ctx.body = 'Hello';
});

app.listen(3000, err => {
    if(err){
        console.log(err);
        return;
    }
    console.log('Application is running on port 3000');
});