const Koa = require('koa');
const HomeRoutes = require('./routes/home.router');
const bodyPasrser = require('koa-bodyparser');
const PostRoutes = require('./routes/post.routes');

const app = new Koa();
app.use(bodyPasrser());
app.use(HomeRoutes.routes())
    .use(HomeRoutes.allowedMethods());
app.use(PostRoutes.routes())
    .use(PostRoutes.allowedMethods());
app.listen(3000);
console.log('Application is running on port 3000');