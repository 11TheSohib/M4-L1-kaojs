import Koa from 'koa';
import bodyParser from 'koa-bodyparser';

import { errorHandle } from './middlewares/error.middleware.js';
import router from './routers/index.route.js';

const app = new Koa();
const PORT = 3000;

app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

app.use(errorHandle);

app.listen(PORT, () => console.log('server running on port', PORT));
