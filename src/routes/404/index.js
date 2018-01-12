export default {
  path: '(.*)',
  action(ctx) {
    if (ctx.koa) ctx.koa.response.status = 404;
    return `404 Error - route "${ctx.pathname}" not found!`;
  },
};
